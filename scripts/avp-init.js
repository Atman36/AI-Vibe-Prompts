#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');
const { Command } = require('commander');

const program = new Command();
const AGENTS_DIR = path.join(__dirname, '..', 'agents');

// --- Core Orchestration Functions ---

async function discoverAgents(verbose = true) {
  const registry = new Map();
  const errors = [];
  const startTime = Date.now();

  try {
    const categories = await fs.readdir(AGENTS_DIR);
    for (const category of categories) {
      const categoryPath = path.join(AGENTS_DIR, category);
      const stats = await fs.stat(categoryPath);
      if (stats.isDirectory()) {
        const agentFiles = await fs.readdir(categoryPath);
        for (const file of agentFiles) {
          if (file.endsWith('.md')) {
            const filePath = path.join(categoryPath, file);
            try {
              const content = await fs.readFile(filePath, 'utf-8');
              const metadata = parseAgentMetadata(content, filePath);
              if (metadata) {
                registry.set(metadata.name, { ...metadata, filePath });
              }
            } catch (error) {
              errors.push(`${filePath}: ${error.message}`);
            }
          }
        }
      }
    }
  } catch (e) {
    console.error(`Error reading agents directory: ${e.message}`);
    return null;
  }

  if (verbose) {
    console.log(`Discovered ${registry.size} agents in ${Date.now() - startTime}ms.`);
    if (errors.length > 0) {
      console.error('Discovery Errors:', errors);
    }
  }
  return registry;
}

function parseAgentMetadata(content, filePath) {
  const yamlMatch = content.match(/^---(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)---/);
  if (!yamlMatch) {
    return null;
  }
  try {
    const metadata = yaml.load(yamlMatch[1]);
    if (!metadata) return null;
    const required = ['name', 'description', 'category', 'version', 'capabilities', 'metrics', 'confidence_threshold'];
    for (const field of required) {
      if (!metadata[field]) throw new Error(`Missing required field: '${field}' in ${filePath}`);
    }
    return metadata;
  } catch (error) {
    throw new Error(`YAML parsing error in ${filePath}: ${error.message}`);
  }
}

async function invoke_agent(agentName, task) {
  console.log(`
--- Invoking Agent: ${agentName} ---`);
  console.log('Task:', JSON.stringify(task, null, 2));
  const response = {
    result: `Successfully completed task for ${agentName}.`,
    confidence_score: Math.floor(Math.random() * 41) + 60, // Random score between 60-100
  };
  console.log('--- End Invocation ---');
  return JSON.stringify(response);
}

async function executeWithConfidenceGates(agentName, task, agentRegistry) {
  const agent = agentRegistry.get(agentName);
  if (!agent) throw new Error(`Agent '${agentName}' not found in registry.`);

  const responseString = await invoke_agent(agentName, task);
  const { result, confidence_score } = JSON.parse(responseString);

  if (confidence_score < agent.confidence_threshold) {
    console.log(`Confidence score ${confidence_score} for '${agentName}' is BELOW threshold of ${agent.confidence_threshold}.`);
    return { status: 'audit_required', result: 'Audit would be triggered here.' };
  }

  console.log(`Confidence score ${confidence_score} for '${agentName}' is ABOVE threshold of ${agent.confidence_threshold}.`);
  return { status: 'success', result };
}

async function executeWorkflow(workflow, agentRegistry) {
  console.log(`
========================================`);
  console.log(`🚀 Starting workflow: ${workflow.name}`);
  console.log(`========================================`);
  const results = [];

  for (const step of workflow.steps) {
    console.log(`
▶️ Executing Step: ${step.description}`);
    const executionResult = await executeWithConfidenceGates(step.agentName, step.task, agentRegistry);

    if (executionResult.status === 'audit_required') {
      console.error(`❌ Workflow halted. Step '${step.description}' requires an audit.`);
      results.push({ step: step.description, status: 'audit_required', details: executionResult.result });
      return { finalStatus: 'AUDIT_REQUIRED', results };
    }

    console.log(`✅ Step '${step.description}' completed successfully.`);
    results.push({ step: step.description, status: 'success', result: executionResult.result });
  }

  console.log(`
🎉 Workflow '${workflow.name}' completed successfully.`);
  console.log(`========================================
`);
  return { finalStatus: 'SUCCESS', results };
}

// --- CLI Command Definitions ---

program
  .name('avp')
  .description('AI-Vibe-Prompts CLI for orchestrating multi-agent workflows.')
  .version('3.0.0');

program.command('discover')
  .description('Discover all available agents and list their capabilities.')
  .action(async () => {
    console.log('Discovering available agents...');
    const registry = await discoverAgents(false);
    if (registry && registry.size > 0) {
      console.log(`Found ${registry.size} agents:\n`);
      for (const [name, agent] of registry.entries()) {
        console.log(`- ${name} (v${agent.version})`);
        console.log(`  Description: ${agent.description}`);
        console.log(`  Capabilities: ${agent.capabilities.join(', ')}\n`);
      }
    } else {
        console.log('No agents found.');
    }
  });

program.command('workflow:run <workflowFile>')
  .description('Run a workflow defined in a JSON file.')
  .action(async (workflowFile) => {
    try {
      const workflowPath = path.resolve(workflowFile);
      console.log(`Loading workflow from: ${workflowPath}`);
      const workflowContent = await fs.readFile(workflowPath, 'utf-8');
      const workflow = JSON.parse(workflowContent);

      const agentRegistry = await discoverAgents();
      if (!agentRegistry || agentRegistry.size === 0) {
        console.error('No agents found. Cannot run workflow.');
        return;
      }

      const finalReport = await executeWorkflow(workflow, agentRegistry);

      console.log('--- FINAL WORKFLOW REPORT ---');
      console.log(JSON.stringify(finalReport, null, 2));

    } catch (error) {
      console.error(`Error running workflow: ${error.message}`);
      if (error.code === 'ENOENT') {
          console.error(`Error: The workflow file was not found at ${error.path}`);
      }
      process.exit(1);
    }
  });

program.parse(process.argv);
