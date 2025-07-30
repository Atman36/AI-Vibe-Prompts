const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

const AGENTS_DIR = path.join(__dirname, '..', 'agents');

// --- Core Functions (from workflow-composer.md) ---

async function discoverAgents() {
  const registry = new Map();
  const errors = [];
  const startTime = Date.now();

  const categories = await fs.readdir(AGENTS_DIR);
  for (const category of categories) {
    const categoryPath = path.join(AGENTS_DIR, category);
    if ((await fs.stat(categoryPath)).isDirectory()) {
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

  console.log(`Discovered ${registry.size} agents in ${Date.now() - startTime}ms.`);
  if (errors.length > 0) {
    console.error('Discovery Errors:', errors);
  }
  return registry;
}

function parseAgentMetadata(content, filePath) {
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) return null;

  try {
    const metadata = yaml.load(yamlMatch[1]);
    const required = ['name', 'description', 'category', 'version', 'capabilities', 'metrics', 'confidence_threshold'];
    for (const field of required) {
      if (!metadata[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    return metadata;
  } catch (error) {
    throw new Error(`YAML parsing error in ${filePath}: ${error.message}`);
  }
}

// Mock agent invocation for testing purposes
async function invoke_agent(agentName, task) {
  console.log(`\n--- Invoking Agent: ${agentName} ---`);
  console.log('Task:', JSON.stringify(task, null, 2));
  // In a real scenario, this would call the AI model.
  // Here, we simulate a successful response with a high confidence score.
  const response = {
    result: `Successfully completed task for ${agentName}.`,
    confidence_score: 95, // Simulate high confidence
  };
  console.log('Agent Response:', response);
  console.log('--- End Invocation ---');
  return JSON.stringify(response);
}

async function executeWithConfidenceGates(agentName, task, agentRegistry) {
  const agent = agentRegistry.get(agentName);
  if (!agent) {
    throw new Error(`Agent '${agentName}' not found in registry.`);
  }

  const responseString = await invoke_agent(agentName, task);
  const { result, confidence_score } = JSON.parse(responseString);

  if (confidence_score < agent.confidence_threshold) {
    console.log(`Confidence score of ${confidence_score} for '${agentName}' is BELOW threshold of ${agent.confidence_threshold}.`);
    // In a real system, we would invoke the Project Auditor here.
    return { status: 'audit_required', result: 'Audit would be triggered here.' };
  }

  console.log(`Confidence score of ${confidence_score} for '${agentName}' is ABOVE threshold of ${agent.confidence_threshold}.`);
  return { status: 'success', result };
}

async function executeWorkflow(workflow, agentRegistry) {
  console.log(`\n========================================`);
  console.log(`🚀 Starting workflow: ${workflow.name}`);
  console.log(`========================================`);
  const results = [];

  for (const step of workflow.steps) {
    console.log(`\n▶️ Executing Step: ${step.description}`);
    const executionResult = await executeWithConfidenceGates(step.agentName, step.task, agentRegistry);

    if (executionResult.status === 'audit_required') {
      console.error(`❌ Workflow halted. Step '${step.description}' requires an audit.`);
      results.push({ step: step.description, status: 'audit_required', details: executionResult.result });
      return { finalStatus: 'AUDIT_REQUIRED', results };
    }

    console.log(`✅ Step '${step.description}' completed successfully.`);
    results.push({ step: step.description, status: 'success', result: executionResult.result });
  }

  console.log(`\n🎉 Workflow '${workflow.name}' completed successfully.`);
  console.log(`========================================\n`);
  return { finalStatus: 'SUCCESS', results };
}

// --- Test Definition and Execution ---

const testWorkflow = {
  name: 'Project Initialization Test',
  description: 'A simple workflow to test the orchestration logic.',
  steps: [
    {
      agentName: 'Project Initializer',
      task: { projectName: 'new-test-project', description: 'Initialize a new project structure.' },
      description: 'Initialize the project using the Init agent.'
    }
  ]
};

async function main() {
  console.log('Starting end-to-end workflow orchestration test...');
  const agentRegistry = await discoverAgents();
  
  if (agentRegistry.size === 0) {
    console.error('No agents found. Cannot run workflow.');
    return;
  }

  const finalReport = await executeWorkflow(testWorkflow, agentRegistry);

  console.log('--- FINAL WORKFLOW REPORT ---');
  console.log(JSON.stringify(finalReport, null, 2));
}

main().catch(console.error);
