#!/usr/bin/env node

/**
 * AI-Vibe-Prompts Initialization Script
 * Supports both Claude Code and Cursor AI environments
 */

const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');
const { Command } = require('commander');

class AVPInitializer {
  constructor() {
    this.rootDir = process.cwd();
    this.configPath = path.join(this.rootDir, 'core-config.yaml');
    this.environment = this.detectEnvironment();
  }

  detectEnvironment() {
    // Check for Claude Code environment
    try {
      if (process.env.CLAUDE_CODE || require('fs').existsSync('.claude')) {
        return 'claude-code';
      }
      // Check for Cursor environment
      if (process.env.CURSOR_AI || require('fs').existsSync('.cursor') || process.env.ANTHROPIC_API_KEY) {
        return 'cursor';
      }
    } catch (e) {
      // Fallback
    }
    return 'unknown';
  }

  async initialize() {
    console.log(`🚀 Initializing AI-Vibe-Prompts (Environment: ${this.environment})`);
    
    try {
      const config = this.loadConfig();
      await this.setupAgentDiscovery(config);
      await this.validateSetup();
      
      console.log('✅ AI-Vibe-Prompts initialized successfully!');
      this.printUsageInstructions();
    } catch (error) {
      console.error('❌ Initialization failed:', error.message);
      process.exit(1);
    }
  }

  async loadConfig() {
    try {
      await fs.access(this.configPath);
    } catch (e) {
      throw new Error('core-config.yaml not found');
    }
    
    const configContent = await fs.readFile(this.configPath, 'utf8');
    return yaml.load(configContent);
  }

  async setupAgentDiscovery(config) {
    const agentsDir = path.join(this.rootDir, '.claude', 'agents');
    
    try {
      await fs.access(agentsDir);
    } catch (e) {
      throw new Error('.claude/agents directory not found');
    }

    // Scan for available agents
    const files = await fs.readdir(agentsDir);
    const agentFiles = files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));

    console.log(`📁 Found ${agentFiles.length} agents:`, agentFiles.join(', '));

    // Validate agent configuration
    for (const agentFile of agentFiles) {
      const agentPath = path.join(agentsDir, `${agentFile}.md`);
      const content = await fs.readFile(agentPath, 'utf8');
      
      if (!content.startsWith('---')) {
        console.warn(`⚠️  Agent ${agentFile} missing YAML frontmatter`);
      }
    }
  }

  async validateSetup() {
    const checks = [
      { name: 'Claude Code agents directory', path: '.claude/agents' },
      { name: 'Core configuration', path: 'core-config.yaml' },
      { name: 'Tools configuration', path: 'tools/tools.json' },
      { name: 'Project documentation', path: 'CLAUDE.md' }
    ];

    for (const check of checks) {
      let exists = true;
      try {
        await fs.access(path.join(this.rootDir, check.path));
      } catch (e) {
        exists = false;
      }
      console.log(`${exists ? '✅' : '❌'} ${check.name}`);
      
      if (!exists && check.name === 'Claude Code agents directory') {
        throw new Error('Critical: .claude/agents directory missing');
      }
    }
  }

  printUsageInstructions() {
    console.log('\\n📖 Usage Instructions:');
    
    if (this.environment === 'claude-code') {
      console.log('🤖 Claude Code Environment:');
      console.log('  • Use "@agent-name task description" for explicit agent calls');
      console.log('  • Use natural language - agents will be auto-selected');
      console.log('  • Examples:');
      console.log('    - "@architect design the user authentication system"');
      console.log('    - "@developer implement the dashboard component"');
      console.log('    - "Help me debug this API issue" (auto-selects debugger-assistant)');
    } else if (this.environment === 'cursor') {
      console.log('🔧 Cursor AI Environment:');
      console.log('  • Legacy orchestration system available');
      console.log('  • Use core-config.yaml for agent configuration');
      console.log('  • Manual agent invocation through scripts');
    }
    
    console.log('\\n🔗 Available Agents:');
    console.log('  Core: architect, developer, analyst, workflow-composer');
    console.log('  Helpers: codebase-analyzer, debugger-assistant, refactor-assistant, quality-monitor');
    console.log('  Specialists: nextjs-optimizer, react-optimizer, vue-optimizer');
    console.log('  Design: designer (UI/UX and design systems)');
  }
}

// Agent discovery and workflow functions from old version
const AGENTS_DIR = path.join(__dirname, '..', 'agents');

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
    
    const required = ['name', 'description'];
    for (const field of required) {
      if (!metadata[field]) throw new Error(`Missing required field: '${field}' in ${filePath}`);
    }
    return metadata;
  } catch (error) {
    throw new Error(`YAML parsing error in ${filePath}: ${error.message}`);
  }
}

// CLI setup
const program = new Command();

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
        console.log(`- ${name} (${agent.version || 'v1.0.0'})`);
        console.log(`  Description: ${agent.description}`);
        if (agent.capabilities) {
          console.log(`  Capabilities: ${agent.capabilities.join(', ')}\n`);
        } else {
          console.log('');
        }
      }
    } else {
      console.log('No agents found.');
    }
  });

program.command('init')
  .description('Initialize AI-Vibe-Prompts system.')
  .action(async () => {
    const initializer = new AVPInitializer();
    await initializer.initialize();
  });

// Run initialization if called directly
if (require.main === module) {
  program.parse(process.argv);
}

module.exports = { AVPInitializer, discoverAgents, parseAgentMetadata };