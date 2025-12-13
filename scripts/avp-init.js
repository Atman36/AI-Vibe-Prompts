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

    console.log(`📁 Found ${agentFiles.length} agents:`);
    console.log(`  ${agentFiles.join(', ')}`);

    // Validate agent configuration
    for (const agentFile of agentFiles) {
      const agentPath = path.join(agentsDir, `${agentFile}.md`);
      const content = await fs.readFile(agentPath, 'utf8');
      
      if (!content.startsWith('---')) {
        console.warn(`⚠️  Agent ${agentFile} missing YAML frontmatter`);
      }
    }
  }

  async setupSkillsDiscovery(config) {
    const skillsDir = path.join(this.rootDir, '.claude', 'skills');
    
    try {
      await fs.access(skillsDir);
    } catch (e) {
      console.warn('⚠️  .claude/skills directory not found - Skills system not available');
      return { skills: [], categories: [] };
    }

    const skills = [];
    const categories = await fs.readdir(skillsDir);
    
    for (const category of categories) {
      const categoryPath = path.join(skillsDir, category);
      const stat = await fs.stat(categoryPath);
      
      if (!stat.isDirectory()) continue;
      
      const skillDirs = await fs.readdir(categoryPath);
      
      for (const skillDir of skillDirs) {
        const skillPath = path.join(categoryPath, skillDir);
        const skillFilePath = path.join(skillPath, 'SKILL.md');
        
        try {
          const content = await fs.readFile(skillFilePath, 'utf8');
          const metadata = this.parseSkillMetadata(content);
          
          skills.push({
            name: metadata.name || skillDir,
            category,
            path: skillFilePath,
            description: metadata.description || 'No description',
            version: metadata.version || '0.0.0',
            tags: metadata.tags || [],
            auto_invoke: metadata.auto_invoke || false
          });
        } catch (e) {
          console.warn(`⚠️  Skill ${skillDir} missing SKILL.md file`);
        }
      }
    }

    console.log(`🎯 Found ${skills.length} skills across ${categories.length} categories`);
    return { skills, categories };
  }

  parseSkillMetadata(content) {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return {};
    
    try {
      return yaml.load(frontmatterMatch[1]);
    } catch (e) {
      console.warn('⚠️  Failed to parse skill metadata:', e.message);
      return {};
    }
  }

  async listSkills() {
    const config = await this.loadConfig();
    const { skills, categories } = await this.setupSkillsDiscovery(config);
    
    if (skills.length === 0) {
      console.log('ℹ️  No skills found. Skills system is not set up yet.');
      return;
    }

    console.log('\n🎯 Available Claude Skills:\n');
    
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    for (const [category, categorySkills] of Object.entries(groupedSkills)) {
      console.log(`\n📂 ${category.toUpperCase()}`);
      for (const skill of categorySkills) {
        const autoInvokeIndicator = skill.auto_invoke ? '🔄' : '  ';
        console.log(`  ${autoInvokeIndicator} ${skill.name} (v${skill.version})`);
        console.log(`     ${skill.description}`);
        if (skill.tags.length > 0) {
          console.log(`     Tags: ${skill.tags.join(', ')}`);
        }
      }
    }

    console.log('\n🔄 = Auto-invoked when relevant');
    console.log(`\n💡 Total: ${skills.length} skills available`);
  }

  async validateSetup() {
    const checks = [
      { name: 'Claude Code agents directory', path: '.claude/agents', critical: true },
      { name: 'Claude Code skills directory', path: '.claude/skills', critical: false },
      { name: 'Core configuration', path: 'core-config.yaml', critical: true },
      { name: 'Tools configuration', path: 'tools/tools.json', critical: false },
      { name: 'Project documentation', path: 'CLAUDE.md', critical: false }
    ];

    for (const check of checks) {
      let exists = true;
      try {
        await fs.access(path.join(this.rootDir, check.path));
      } catch (e) {
        exists = false;
      }
      console.log(`${exists ? '✅' : '❌'} ${check.name}`);
      
      if (!exists && check.critical) {
        throw new Error(`Critical: ${check.path} missing`);
      }
    }
  }

  printUsageInstructions() {
    console.log('\n📖 Usage Instructions:');
    
    if (this.environment === 'claude-code') {
      console.log('🤖 Claude Code v2.x Environment:');
      console.log('  • Use "@agent-name task description" for explicit agent calls');
      console.log('  • Use natural language - agents and skills are auto-selected');
      console.log('  • Skills load automatically based on context (progressive disclosure)');
      console.log('  • Examples:');
      console.log('    - "@architect design the user authentication system"');
      console.log('    - "@developer implement the dashboard component"');
      console.log('    - "Analyze the codebase" (auto-invokes codebase-analysis skill)');
      console.log('    - "Run quality checks" (auto-invokes quality-gates skill)');
    } else if (this.environment === 'cursor') {
      console.log('🔧 Cursor AI Environment:');
      console.log('  • Legacy orchestration system available');
      console.log('  • Use core-config.yaml for agent configuration');
      console.log('  • Manual agent invocation through scripts');
    }
    
    console.log('\n🔗 Available Agents:');
    console.log('  Core: architect, developer, analyst, workflow-composer');
    console.log('  Helpers: codebase-analyzer, debugger-assistant, refactor-assistant, quality-monitor');
    console.log('  Specialists: nextjs-optimizer, react-optimizer, vue-optimizer');
    console.log('  Design: designer (UI/UX and design systems)');
    
    console.log('\n🎯 Available Skills (v2.x):');
    console.log('  Core: codebase-analysis, quality-gates');
    console.log('  Framework: nextjs-optimization');
    console.log('  ℹ️  Run "node scripts/avp-init.js skills:list" for detailed skill info');
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

program.command('skills:list')
  .description('List all available Claude Skills (v2.x).')
  .action(async () => {
    const initializer = new AVPInitializer();
    await initializer.listSkills();
  });

program.command('skills:info <skill-name>')
  .description('Show detailed information about a specific skill.')
  .action(async (skillName) => {
    const initializer = new AVPInitializer();
    const config = await initializer.loadConfig();
    const { skills } = await initializer.setupSkillsDiscovery(config);
    
    const skill = skills.find(s => s.name === skillName);
    if (!skill) {
      console.error(`❌ Skill "${skillName}" not found.`);
      console.log(`\nAvailable skills: ${skills.map(s => s.name).join(', ')}`);
      process.exit(1);
    }
    
    console.log(`\n🎯 Skill: ${skill.name}`);
    console.log(`📂 Category: ${skill.category}`);
    console.log(`📦 Version: ${skill.version}`);
    console.log(`🔄 Auto-invoke: ${skill.auto_invoke ? 'Yes' : 'No'}`);
    console.log(`📝 Description: ${skill.description}`);
    if (skill.tags.length > 0) {
      console.log(`🏷️  Tags: ${skill.tags.join(', ')}`);
    }
    console.log(`📄 Path: ${skill.path}`);
    
    console.log('\n📖 Full Skill Content:');
    console.log('─'.repeat(60));
    try {
      const content = await fs.readFile(skill.path, 'utf8');
      const bodyMatch = content.match(/---\n[\s\S]*?\n---\n([\s\S]*)/);
      if (bodyMatch) {
        console.log(bodyMatch[1].trim());
      } else {
        console.log(content);
      }
    } catch (e) {
      console.error('Failed to read skill content:', e.message);
    }
  });

program.command('system:status')
  .description('Show AI-Vibe-Prompts system status and configuration.')
  .action(async () => {
    const initializer = new AVPInitializer();
    console.log('🔍 AI-Vibe-Prompts System Status\n');
    console.log(`Environment: ${initializer.environment}`);
    console.log(`Root Directory: ${initializer.rootDir}`);
    
    console.log('\n📊 Component Status:');
    await initializer.validateSetup();
    
    console.log('\n🤖 Agents:');
    const config = await initializer.loadConfig();
    await initializer.setupAgentDiscovery(config);
    
    console.log('\n🎯 Skills:');
    const { skills } = await initializer.setupSkillsDiscovery(config);
    console.log(`  Total: ${skills.length} skills`);
    
    const autoInvokeCount = skills.filter(s => s.auto_invoke).length;
    console.log(`  Auto-invoke: ${autoInvokeCount}/${skills.length}`);
  });

// Run initialization if called directly
if (require.main === module) {
  program.parse(process.argv);
}

module.exports = { AVPInitializer, discoverAgents, parseAgentMetadata };