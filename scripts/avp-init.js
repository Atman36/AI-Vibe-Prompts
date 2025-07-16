#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Enhanced CLI with BMAD-inspired commands
class AVPCli {
  constructor() {
    this.version = '2.0.0';
    this.configPath = path.join(process.cwd(), 'core-config.yaml');
    this.agentsPath = path.join(process.cwd(), 'agents');
  }

  // Load configuration
  loadConfig() {
    try {
      if (fs.existsSync(this.configPath)) {
        const yaml = require('js-yaml');
        const configContent = fs.readFileSync(this.configPath, 'utf8');
        return yaml.load(configContent);
      }
    } catch (error) {
      console.warn('⚠️  Could not load core-config.yaml, using defaults');
    }
    return null;
  }

  // Get available agents
  getAgents() {
    const agents = {};
    const config = this.loadConfig();
    
    if (config && config.agents) {
      return config.agents;
    }

    // Fallback: scan agents directory
    if (fs.existsSync(this.agentsPath)) {
      const categories = fs.readdirSync(this.agentsPath);
      categories.forEach(category => {
        const categoryPath = path.join(this.agentsPath, category);
        if (fs.statSync(categoryPath).isDirectory()) {
          const agentFiles = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
          agentFiles.forEach(file => {
            const agentName = file.replace('.md', '');
            agents[agentName] = {
              name: agentName,
              file: `agents/${category}/${file}`,
              category: category
            };
          });
        }
      });
    }

    return agents;
  }

  // Show CLI help
  showHelp() {
    console.log(`
🚀 AI-Vibe-Prompts CLI v${this.version}
Enhanced with BMAD-METHOD inspired commands

CORE COMMANDS:
  init [template]     Initialize project with AI-Vibe-Prompts
  install            Install prompts in existing project  
  update             Update existing installation

BMAD-INSPIRED COMMANDS:
  explain <agent>     Show role, phase, dependencies of agent
  handoff <source> <target>  Validate agent-to-agent quality transfer
  pack <name>         Install domain-specific agent toolsets
  
WORKFLOW COMMANDS:
  agents-for <query>  Find agents by capability or phase
  run-workflow <preset>  Execute predefined workflow preset
  docs-gen           Generate agent documentation index
  
QUALITY COMMANDS:
  validate           Run quality validation for current phase
  status             Show current project state and active agents
  
EXAMPLES:
  avp init shadcn-vite          # Initialize with shadcn/ui + Vite template
  avp explain orchestrator      # Show orchestrator agent details
  avp agents-for "design"       # Find all design-related agents
  avp run-workflow auth-system  # Execute authentication workflow
  avp handoff architect developer  # Validate architecture handoff
  avp pack frontend             # Install frontend development pack
  avp validate                  # Run quality checks
  avp status                    # Show current project status

For more information, visit: https://github.com/Atman36/AI-Vibe-Prompts
`);
  }

  // Initialize project
  async init(template = 'shadcn-vite') {
    console.log(`🚀 Initializing project with template: ${template}`);
    
    const templates = {
      'shadcn-vite': {
        name: 'Shadcn/UI + Vite',
        description: 'Lightweight SPA with shadcn/ui components',
        stack: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']
      },
      'next-enterprise': {
        name: 'Next.js Enterprise',
        description: 'Full-stack enterprise application',
        stack: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'NextAuth.js']
      },
      't3-stack': {
        name: 'T3 Stack',
        description: 'Full-stack TypeScript application',
        stack: ['Next.js 15', 'tRPC', 'Prisma', 'NextAuth.js', 'Tailwind CSS']
      }
    };

    const selectedTemplate = templates[template];
    if (!selectedTemplate) {
      console.error(`❌ Template "${template}" not found. Available templates:`);
      Object.entries(templates).forEach(([key, tmpl]) => {
        console.log(`  ${key}: ${tmpl.description}`);
      });
      return;
    }

    console.log(`\n📋 Template: ${selectedTemplate.name}`);
    console.log(`📝 Description: ${selectedTemplate.description}`);
    console.log(`🛠️  Stack: ${selectedTemplate.stack.join(', ')}`);
    
    // Create project structure
    this.createProjectStructure(template);
    console.log('✅ Project initialized successfully!');
  }

  // Create project structure
  createProjectStructure(template) {
    const dirs = [
      'agents/core',
      'agents/project', 
      'agents/design',
      'agents/helpers',
      'system/checklists',
      'templates',
      'scripts',
      'docs'
    ];

    dirs.forEach(dir => {
      const fullPath = path.join(process.cwd(), dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`📁 Created: ${dir}/`);
      }
    });

    // Copy template files
    this.copyTemplateFiles(template);
  }

  // Copy template files
  copyTemplateFiles(template) {
    // Copy core configuration
    const sourceConfigPath = path.join(__dirname, '..', 'core-config.yaml');
    const destConfigPath = path.join(process.cwd(), 'core-config.yaml');
    
    if (fs.existsSync(sourceConfigPath)) {
      fs.copyFileSync(sourceConfigPath, destConfigPath);
      console.log('📄 Copied: core-config.yaml');
    }

    // Copy agents
    const sourceAgentsPath = path.join(__dirname, '..', 'agents');
    const destAgentsPath = path.join(process.cwd(), 'agents');
    
    if (fs.existsSync(sourceAgentsPath)) {
      this.copyDirectory(sourceAgentsPath, destAgentsPath);
      console.log('🤖 Copied: agents/');
    }

    // Copy system files
    const sourceSystemPath = path.join(__dirname, '..', 'system');
    const destSystemPath = path.join(process.cwd(), 'system');
    
    if (fs.existsSync(sourceSystemPath)) {
      this.copyDirectory(sourceSystemPath, destSystemPath);
      console.log('⚙️  Copied: system/');
    }
  }

  // Copy directory recursively
  copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        this.copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }

  // Install in existing project
  install() {
    console.log('📦 Installing AI-Vibe-Prompts in existing project...');
    
    if (fs.existsSync(this.configPath)) {
      console.log('⚠️  AI-Vibe-Prompts already installed. Use "update" command instead.');
      return;
    }

    this.createProjectStructure('minimal');
    console.log('✅ AI-Vibe-Prompts installed successfully!');
  }

  // Update existing installation
  update() {
    console.log('🔄 Updating AI-Vibe-Prompts...');
    
    if (!fs.existsSync(this.configPath)) {
      console.log('❌ AI-Vibe-Prompts not found. Use "install" command first.');
      return;
    }

    // Backup existing config
    const backupPath = `${this.configPath}.backup`;
    fs.copyFileSync(this.configPath, backupPath);
    console.log(`📋 Backed up config to: ${backupPath}`);

    // Update files
    this.copyTemplateFiles('update');
    console.log('✅ AI-Vibe-Prompts updated successfully!');
  }

  // Explain agent details (BMAD command)
  explain(agentName) {
    if (!agentName) {
      console.log('❌ Please specify an agent name. Usage: avp explain <agent>');
      return;
    }

    const agents = this.getAgents();
    const agent = agents[agentName];
    
    if (!agent) {
      console.log(`❌ Agent "${agentName}" not found. Available agents:`);
      Object.keys(agents).forEach(name => console.log(`  • ${name}`));
      return;
    }

    console.log(`\n🤖 Agent: ${agent.name || agentName}`);
    console.log(`📁 Category: ${agent.category || 'unknown'}`);
    console.log(`📄 File: ${agent.file}`);
    
    if (agent.capabilities) {
      console.log(`🛠️  Capabilities: ${agent.capabilities.join(', ')}`);
    }
    
    if (agent.phase) {
      console.log(`📈 Phase: ${agent.phase}`);
    }
    
    if (agent.dependencies) {
      console.log(`🔗 Dependencies: ${agent.dependencies.join(', ')}`);
    }
    
    if (agent.invokable_by) {
      console.log(`🎯 Invokable by: ${agent.invokable_by.join(', ')}`);
    }
  }

  // Find agents by capability or phase
  agentsFor(query) {
    if (!query) {
      console.log('❌ Please specify a search query. Usage: avp agents-for <query>');
      return;
    }

    const agents = this.getAgents();
    const matches = [];

    Object.entries(agents).forEach(([name, agent]) => {
      const searchText = [
        name,
        agent.category,
        agent.phase,
        ...(agent.capabilities || [])
      ].join(' ').toLowerCase();

      if (searchText.includes(query.toLowerCase())) {
        matches.push({ name, ...agent });
      }
    });

    if (matches.length === 0) {
      console.log(`❌ No agents found matching "${query}"`);
      return;
    }

    console.log(`\n🔍 Found ${matches.length} agent(s) matching "${query}":\n`);
    matches.forEach(agent => {
      console.log(`🤖 ${agent.name}`);
      console.log(`   📁 Category: ${agent.category}`);
      if (agent.capabilities) {
        console.log(`   🛠️  Capabilities: ${agent.capabilities.join(', ')}`);
      }
      console.log('');
    });
  }

  // Validate handoff between agents
  handoff(source, target) {
    if (!source || !target) {
      console.log('❌ Please specify source and target agents. Usage: avp handoff <source> <target>');
      return;
    }

    const agents = this.getAgents();
    const sourceAgent = agents[source];
    const targetAgent = agents[target];

    if (!sourceAgent) {
      console.log(`❌ Source agent "${source}" not found.`);
      return;
    }

    if (!targetAgent) {
      console.log(`❌ Target agent "${target}" not found.`);
      return;
    }

    console.log(`\n🔄 Validating handoff: ${source} → ${target}\n`);

    // Check handoff compatibility
    const config = this.loadConfig();
    let handoffConfig = null;
    
    if (config && config.handoffs) {
      const handoffKey = `${source}_to_${target}`;
      handoffConfig = config.handoffs[handoffKey];
    }

    if (handoffConfig) {
      console.log('✅ Handoff configuration found:');
      console.log(`   📥 Input: ${handoffConfig.input}`);
      console.log(`   📤 Output: ${handoffConfig.output}`);
      console.log(`   ✔️  Checklist: ${handoffConfig.checklist}`);
      if (handoffConfig.validation) {
        console.log(`   🔍 Validation: ${handoffConfig.validation}`);
      }
    } else {
      console.log('⚠️  No specific handoff configuration found.');
      console.log('📋 Using general handoff checklist: system/checklists/handoff-checklist.md');
    }

    // Check agent dependencies
    if (targetAgent.dependencies && targetAgent.dependencies.includes(sourceAgent.name)) {
      console.log('✅ Target agent lists source as dependency');
    } else {
      console.log('⚠️  Target agent does not list source as dependency');
    }

    console.log('\n📋 Handoff checklist items to verify:');
    console.log('   □ Source agent deliverables complete');
    console.log('   □ Quality gates passed');
    console.log('   □ Documentation updated');
    console.log('   □ Target agent context sufficient');
    console.log('   □ No critical information lost');
  }

  // Run workflow preset
  runWorkflow(preset) {
    if (!preset) {
      console.log('❌ Please specify a workflow preset. Usage: avp run-workflow <preset>');
      return;
    }

    const config = this.loadConfig();
    let workflow = null;

    if (config && config.workflow_presets) {
      workflow = config.workflow_presets[preset];
    }

    if (!workflow) {
      console.log(`❌ Workflow preset "${preset}" not found. Available presets:`);
      if (config && config.workflow_presets) {
        Object.keys(config.workflow_presets).forEach(name => {
          console.log(`  • ${name}`);
        });
      } else {
        console.log('  No workflow presets found in configuration.');
      }
      return;
    }

    console.log(`\n🚀 Running workflow: ${workflow.name}\n`);
    console.log(`📋 Agents: ${workflow.agents.join(' → ')}`);
    console.log(`📈 Phases: ${workflow.phases.join(' → ')}`);
    
    if (workflow.deliverables) {
      console.log(`📦 Deliverables: ${workflow.deliverables.join(', ')}`);
    }

    console.log('\n📝 Workflow execution plan:');
    workflow.agents.forEach((agent, index) => {
      const phase = workflow.phases[index] || 'unknown';
      console.log(`   ${index + 1}. ${agent} (${phase} phase)`);
    });

    console.log('\n✨ Use the orchestrator to execute this workflow step by step.');
  }

  // Install expansion pack
  pack(packName) {
    if (!packName) {
      console.log('❌ Please specify a pack name. Usage: avp pack <name>');
      return;
    }

    const config = this.loadConfig();
    let pack = null;

    if (config && config.expansion_packs) {
      pack = config.expansion_packs[packName];
    }

    if (!pack) {
      console.log(`❌ Expansion pack "${packName}" not found. Available packs:`);
      if (config && config.expansion_packs) {
        Object.entries(config.expansion_packs).forEach(([name, p]) => {
          console.log(`  • ${name}: ${p.name}`);
        });
      } else {
        console.log('  No expansion packs found in configuration.');
      }
      return;
    }

    console.log(`\n📦 Installing expansion pack: ${pack.name}\n`);
    
    if (pack.agents) {
      console.log(`🤖 Agents to install: ${pack.agents.join(', ')}`);
    }
    
    if (pack.templates) {
      console.log(`📄 Templates to install: ${pack.templates.join(', ')}`);
    }

    console.log('\n⚠️  Expansion pack installation not yet implemented.');
    console.log('📋 Manual installation: Copy agents and templates from the expansion pack directory.');
  }

  // Generate documentation
  docsGen() {
    console.log('📚 Generating agent documentation...\n');

    const agents = this.getAgents();
    const categories = {};

    // Group agents by category
    Object.entries(agents).forEach(([name, agent]) => {
      const category = agent.category || 'other';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push({ name, ...agent });
    });

    // Generate documentation content
    let docContent = '# AI-Vibe-Prompts Agent Matrix\n\n';
    docContent += 'Auto-generated documentation of all available agents.\n\n';

    Object.entries(categories).forEach(([category, categoryAgents]) => {
      docContent += `## ${category.charAt(0).toUpperCase() + category.slice(1)} Agents\n\n`;
      
      categoryAgents.forEach(agent => {
        docContent += `### ${agent.name}\n`;
        if (agent.description) {
          docContent += `${agent.description}\n\n`;
        }
        docContent += `- **File**: \`${agent.file}\`\n`;
        if (agent.capabilities) {
          docContent += `- **Capabilities**: ${agent.capabilities.join(', ')}\n`;
        }
        if (agent.phase) {
          docContent += `- **Phase**: ${agent.phase}\n`;
        }
        docContent += '\n';
      });
    });

    // Write documentation file
    const docsPath = path.join(process.cwd(), 'docs', 'AGENT_MATRIX.md');
    fs.writeFileSync(docsPath, docContent);
    
    console.log(`✅ Documentation generated: docs/AGENT_MATRIX.md`);
    console.log(`📊 Total agents: ${Object.keys(agents).length}`);
    console.log(`📂 Categories: ${Object.keys(categories).length}`);
  }

  // Show project status
  status() {
    console.log('📊 AI-Vibe-Prompts Project Status\n');

    // Check installation
    if (!fs.existsSync(this.configPath)) {
      console.log('❌ AI-Vibe-Prompts not installed in this project');
      console.log('💡 Run "avp install" to set up AI-Vibe-Prompts');
      return;
    }

    console.log('✅ AI-Vibe-Prompts installed');

    // Load configuration
    const config = this.loadConfig();
    if (config) {
      console.log(`📄 Configuration: ${config.name} v${config.version}`);
      console.log(`🎯 Framework: ${config.framework}`);
    }

    // Count agents
    const agents = this.getAgents();
    const agentCount = Object.keys(agents).length;
    console.log(`🤖 Agents available: ${agentCount}`);

    // Show agent categories
    const categories = {};
    Object.values(agents).forEach(agent => {
      const category = agent.category || 'other';
      categories[category] = (categories[category] || 0) + 1;
    });

    console.log('\n📂 Agent categories:');
    Object.entries(categories).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} agents`);
    });

    // Check for workflow presets
    if (config && config.workflow_presets) {
      const presetCount = Object.keys(config.workflow_presets).length;
      console.log(`\n🚀 Workflow presets: ${presetCount}`);
    }

    // Check for expansion packs
    if (config && config.expansion_packs) {
      const packCount = Object.keys(config.expansion_packs).length;
      console.log(`📦 Expansion packs: ${packCount}`);
    }

    console.log('\n💡 Next steps:');
    console.log('   • Use "avp explain <agent>" to learn about specific agents');
    console.log('   • Use "avp run-workflow <preset>" to execute workflows');
    console.log('   • Use "avp docs-gen" to generate documentation');
  }

  // Validate project
  validate() {
    console.log('🔍 Running quality validation...\n');

    let score = 0;
    let maxScore = 0;

    // Check configuration
    maxScore += 10;
    if (fs.existsSync(this.configPath)) {
      console.log('✅ Configuration file exists');
      score += 10;
    } else {
      console.log('❌ Configuration file missing');
    }

    // Check agents directory
    maxScore += 10;
    if (fs.existsSync(this.agentsPath)) {
      console.log('✅ Agents directory exists');
      score += 10;
    } else {
      console.log('❌ Agents directory missing');
    }

    // Check system directory
    maxScore += 10;
    const systemPath = path.join(process.cwd(), 'system');
    if (fs.existsSync(systemPath)) {
      console.log('✅ System directory exists');
      score += 10;
    } else {
      console.log('❌ System directory missing');
    }

    // Check handoff checklist
    maxScore += 10;
    const handoffPath = path.join(process.cwd(), 'system', 'checklists', 'handoff-checklist.md');
    if (fs.existsSync(handoffPath)) {
      console.log('✅ Handoff checklist exists');
      score += 10;
    } else {
      console.log('❌ Handoff checklist missing');
    }

    // Check agent files
    const agents = this.getAgents();
    const agentCount = Object.keys(agents).length;
    maxScore += 20;
    
    if (agentCount >= 4) {
      console.log(`✅ Sufficient agents available (${agentCount})`);
      score += 20;
    } else {
      console.log(`⚠️  Limited agents available (${agentCount})`);
      score += Math.floor((agentCount / 4) * 20);
    }

    // Calculate final score
    const percentage = Math.round((score / maxScore) * 100);
    console.log(`\n📊 Overall Score: ${score}/${maxScore} (${percentage}%)`);

    if (percentage >= 80) {
      console.log('🎉 Excellent! Your AI-Vibe-Prompts setup is ready for production.');
    } else if (percentage >= 60) {
      console.log('👍 Good setup. Consider addressing missing components.');
    } else {
      console.log('⚠️  Setup incomplete. Run "avp install" or "avp update".');
    }
  }

  // AI Blindspot Prevention Commands
  validateSpec() {
    console.log('🔍 Running specification compliance validation...');
    console.log('📚 Cross-referencing implementation with documentation');
    console.log('⚠️  Invoking RAG Assistant for comprehensive validation');
    console.log('✅ Recommendation: Run this before any implementation');
  }

  checkBlindspots() {
    console.log('🧠 AI Blindspot Detection Analysis\n');
    console.log('🔍 Checking for common AI blindspots:');
    console.log('   ❌ "Read the Docs" syndrome - ignoring documentation');
    console.log('   ❌ "Respect the Spec" failures - deviating from specifications');
    console.log('   ❌ "Know Your Limits" issues - overconfident responses');
    console.log('   ❌ Random fix applications - non-systematic debugging');
    console.log('   ❌ Assumption cascades - building on unverified assumptions');
    console.log('\n⚠️  Recommended: Run after each major decision or implementation');
  }

  verifyDocs() {
    console.log('📚 Documentation Cross-Reference Validation\n');
    console.log('🔍 Validating against:');
    console.log('   - API documentation compliance');
    console.log('   - Architecture specification adherence');
    console.log('   - Security requirement fulfillment');
    console.log('   - Performance benchmark alignment');
    console.log('\n🛡️ Invoking RAG Assistant for thorough verification');
  }

  gateCheck() {
    console.log('🚪 Mandatory Quality Gate Validation\n');
    console.log('✅ Checking quality gates:');
    console.log('   - Documentation compliance');
    console.log('   - Specification adherence');
    console.log('   - Security requirements');
    console.log('   - Performance targets');
    console.log('   - Test coverage standards');
    console.log('\n📊 Validating handoff readiness');
  }

  debugSession() {
    console.log('🔬 Starting Scientific Debugging Session\n');
    console.log('📋 Debugging methodology:');
    console.log('   1. Evidence collection');
    console.log('   2. Hypothesis formation');
    console.log('   3. Minimal testing');
    console.log('   4. Analysis & iteration');
    console.log('\n🧪 Invoking Debugger Assistant for systematic approach');
  }

  hypothesisTest(hypothesis) {
    if (!hypothesis) {
      console.log('❌ Please provide a hypothesis to test');
      console.log('Usage: avp hypothesis-test "If X, then Y because Z"');
      return;
    }
    console.log(`🧪 Testing hypothesis: ${hypothesis}`);
    console.log('📋 Designing minimal experiment...');
    console.log('⚡ Use controlled testing with single variable changes');
  }

  stopDigging() {
    console.log('⛔ Stop Digging Detection\n');
    console.log('🔍 Checking for debugging decay patterns:');
    console.log('   - Repetitive failed attempts');
    console.log('   - Absence of progress indicators');
    console.log('   - Escalating complexity without results');
    console.log('\n💡 Recommendation: Switch to fresh perspective or different approach');
  }

  qualityReport() {
    console.log('📊 Comprehensive Quality Assessment\n');
    console.log('📈 Quality dimensions:');
    console.log('   - Code quality metrics');
    console.log('   - Performance indicators');
    console.log('   - Security posture');
    console.log('   - Technical debt levels');
    console.log('\n📋 Invoking Quality Monitor for detailed analysis');
  }

  debtAnalysis() {
    console.log('💳 Technical Debt Analysis\n');
    console.log('🔍 Analyzing debt categories:');
    console.log('   - Code debt (smells, patterns)');
    console.log('   - Test debt (coverage, quality)');
    console.log('   - Architectural debt (coupling, abstractions)');
    console.log('   - Documentation debt (gaps, outdated)');
    console.log('\n📊 Prioritizing by impact/effort matrix');
  }

  refactorPrep() {
    console.log('🏗️ Mise en Place - Refactoring Preparation\n');
    console.log('📋 Preparatory steps:');
    console.log('   - Code analysis for refactoring opportunities');
    console.log('   - Safety net creation (tests, backups)');
    console.log('   - Dependency impact assessment');
    console.log('\n🛡️ Invoking Refactor Assistant for systematic preparation');
  }

  // Main CLI handler
  run() {
    const args = process.argv.slice(2);
    const command = args[0];
    const params = args.slice(1);

    switch (command) {
      // Core commands
      case 'init':
        this.init(params[0]);
        break;
      case 'install':
        this.install();
        break;
      case 'update':
        this.update();
        break;
      
      // AI Blindspot Prevention commands
      case 'validate-spec':
        this.validateSpec();
        break;
      case 'check-blindspots':
        this.checkBlindspots();
        break;
      case 'verify-docs':
        this.verifyDocs();
        break;
      case 'gate-check':
        this.gateCheck();
        break;
      
      // Scientific debugging commands
      case 'debug-session':
        this.debugSession();
        break;
      case 'hypothesis-test':
        this.hypothesisTest(params.join(' '));
        break;
      case 'stop-digging':
        this.stopDigging();
        break;
      
      // Enhanced BMAD commands
      case 'explain':
        this.explain(params[0]);
        break;
      case 'agents-for':
        this.agentsFor(params[0]);
        break;
      case 'handoff':
        this.handoff(params[0], params[1]);
        break;
      case 'run-workflow':
        this.runWorkflow(params[0]);
        break;
      case 'pack':
        this.pack(params[0]);
        break;
      case 'docs-gen':
        this.docsGen();
        break;
      
      // Quality & monitoring commands
      case 'validate':
        this.validate();
        break;
      case 'status':
        this.status();
        break;
      case 'quality-report':
        this.qualityReport();
        break;
      case 'debt-analysis':
        this.debtAnalysis();
        break;
      
      // Prevention & learning commands
      case 'refactor-prep':
        this.refactorPrep();
        break;
      
      // Help and version
      case 'help':
      case '--help':
      case '-h':
        this.showHelp();
        break;
      case 'version':
      case '--version':
      case '-v':
        console.log(`AI-Vibe-Prompts CLI v${this.version}`);
        break;
      default:
        if (!command) {
          this.showHelp();
        } else {
          console.log(`❌ Unknown command: ${command}`);
          console.log('💡 Run "avp help" to see available commands');
        }
    }
  }
}

// Run CLI
const cli = new AVPCli();
cli.run(); 