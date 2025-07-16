#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.bold}${colors.cyan}${msg}${colors.reset}`),
  step: (msg) => console.log(`${colors.magenta}▶${colors.reset} ${msg}`)
};

const TEMPLATES = {
  'shadcn-vite': {
    name: 'Vite + React + shadcn/ui',
    description: 'Lightweight template for marketing sites and SPAs',
    repo: 'https://github.com/shadcn/vite-template.git',
    features: ['Vite', 'React 18', 'Tailwind CSS', 'shadcn/ui', 'TypeScript']
  },
  'next-enterprise': {
    name: 'Next.js Enterprise',
    description: 'Production-ready Next.js with advanced features',
    repo: 'https://github.com/Blazity/next-enterprise.git',
    features: ['Next.js 15', 'TypeScript', 'Turbopack', 'NextAuth', 'Prisma']
  },
  't3-stack': {
    name: 'T3 Stack',
    description: 'Full-stack TypeScript with tRPC and Prisma',
    repo: 'https://github.com/t3-oss/create-t3-app.git',
    features: ['Next.js', 'tRPC', 'Prisma', 'NextAuth', 'TypeScript']
  }
};

function showBanner() {
  console.log(`
${colors.cyan}${colors.bold}
 █████╗ ██╗      ██╗   ██╗██╗██████╗ ███████╗
██╔══██╗██║      ██║   ██║██║██╔══██╗██╔════╝
███████║██║█████╗██║   ██║██║██████╔╝█████╗  
██╔══██║██║╚════╝╚██╗ ██╔╝██║██╔══██╗██╔══╝  
██║  ██║██║       ╚████╔╝ ██║██████╔╝███████╗
╚═╝  ╚═╝╚═╝        ╚═══╝  ╚═╝╚═════╝ ╚══════╝
                                              
    Prompts & Agent System for Modern Web Development
${colors.reset}
  `);
}

function showHelp() {
  console.log(`
${colors.bold}Usage:${colors.reset}
  npx ai-vibe-prompts <command> [options]

${colors.bold}Commands:${colors.reset}
  ${colors.green}init [directory]${colors.reset}        Initialize AI-Vibe-Prompts in existing project
  ${colors.green}create <name> [template]${colors.reset} Create new project with template
  ${colors.green}list-templates${colors.reset}          Show available project templates
  ${colors.green}list-agents${colors.reset}             Show available AI agents
  ${colors.green}help${colors.reset}                    Show this help message

${colors.bold}Options:${colors.reset}
  ${colors.yellow}--template, -t${colors.reset}         Specify template (shadcn-vite, next-enterprise, t3-stack)
  ${colors.yellow}--agents-only${colors.reset}          Install only agents (no project template)
  ${colors.yellow}--force${colors.reset}                Overwrite existing files
  ${colors.yellow}--verbose${colors.reset}              Show detailed output

${colors.bold}Examples:${colors.reset}
  ${colors.cyan}npx ai-vibe-prompts init${colors.reset}
  ${colors.cyan}npx ai-vibe-prompts create my-app --template=t3-stack${colors.reset}
  ${colors.cyan}npx ai-vibe-prompts create my-dashboard -t next-enterprise${colors.reset}
  ${colors.cyan}npx ai-vibe-prompts init . --agents-only${colors.reset}
`);
}

function listTemplates() {
  log.title('Available Project Templates');
  
  Object.entries(TEMPLATES).forEach(([key, template]) => {
    console.log(`\n${colors.bold}${key}${colors.reset} - ${template.name}`);
    console.log(`  ${colors.cyan}${template.description}${colors.reset}`);
    console.log(`  Features: ${template.features.join(', ')}`);
  });
  
  console.log(`\n${colors.yellow}Usage:${colors.reset} npx ai-vibe-prompts create <name> --template=<template-key>`);
}

function listAgents() {
  log.title('Available AI Agents');
  
  const agents = {
    'Core Agents': {
      'orchestrator': 'Central coordinator for multi-agent workflows',
      'architect': 'System design and architecture planning',
      'developer': 'Code implementation and testing',
      'analyst': 'Code quality and performance analysis'
    },
    'Project Agents': {
      'init': 'Project initialization and setup',
      'audit': 'Comprehensive project auditing'
    },
    'Design Agents': {
      'design-system': 'Design system creation and management',
      'figma-converter': 'Figma to React component conversion'
    },
    'Helper Agents': {
      'rag-assistant': 'Code analysis and context extraction',
      'workflow-composer': 'Multi-agent workflow creation',
      'quality-monitor': 'Quality metrics and monitoring'
    }
  };
  
  Object.entries(agents).forEach(([category, agentList]) => {
    console.log(`\n${colors.bold}${colors.magenta}${category}${colors.reset}`);
    Object.entries(agentList).forEach(([agent, description]) => {
      console.log(`  ${colors.green}${agent}${colors.reset} - ${description}`);
    });
  });
  
  console.log(`\n${colors.yellow}Usage:${colors.reset} @agents/<category>/<agent>.md`);
}

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    log.success(`Created directory: ${dirPath}`);
  }
}

function copyAgents(targetDir, options = {}) {
  const sourcePath = path.join(__dirname, '..');
  const agentsSource = path.join(sourcePath, 'agents');
  const systemSource = path.join(sourcePath, 'system');
  
  if (!fs.existsSync(agentsSource)) {
    log.error('Agents directory not found. Make sure AI-Vibe-Prompts is properly installed.');
    process.exit(1);
  }
  
  // Copy agents directory
  const agentsTarget = path.join(targetDir, 'ai-vibe-prompts', 'agents');
  const systemTarget = path.join(targetDir, 'ai-vibe-prompts', 'system');
  
  ensureDirectory(path.dirname(agentsTarget));
  ensureDirectory(path.dirname(systemTarget));
  
  log.step('Copying AI agents...');
  execSync(`cp -r "${agentsSource}" "${path.dirname(agentsTarget)}"`);
  log.success('Agents copied successfully');
  
  log.step('Copying system configuration...');
  execSync(`cp -r "${systemSource}" "${path.dirname(systemTarget)}"`);
  log.success('System configuration copied');
  
  // Create package.json script if it doesn't exist
  const packageJsonPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }
    
    packageJson.scripts.ai = 'echo "Use @agents/<category>/<agent>.md to activate AI agents"';
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    log.success('Added AI script to package.json');
  }
  
  // Create .ai-vibe-prompts config
  const configPath = path.join(targetDir, '.ai-vibe-prompts.json');
  const config = {
    version: '2.0.0',
    agentsPath: './ai-vibe-prompts/agents',
    systemPath: './ai-vibe-prompts/system',
    installedAt: new Date().toISOString(),
    agents: {
      core: ['orchestrator', 'architect', 'developer', 'analyst'],
      project: ['init', 'audit'],
      design: ['design-system', 'figma-converter'],
      helpers: ['rag-assistant', 'workflow-composer', 'quality-monitor']
    }
  };
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  log.success('Created AI-Vibe-Prompts configuration');
}

function createProject(name, template, options = {}) {
  const projectPath = path.resolve(name);
  
  if (fs.existsSync(projectPath) && !options.force) {
    log.error(`Directory ${name} already exists. Use --force to overwrite.`);
    process.exit(1);
  }
  
  log.title(`Creating project: ${name}`);
  
  if (template && TEMPLATES[template]) {
    log.step(`Using template: ${TEMPLATES[template].name}`);
    
    // Create project from template
    ensureDirectory(projectPath);
    
    // For now, create a basic structure
    // In production, this would clone the actual template repositories
    log.step('Setting up project structure...');
    
    const directories = [
      'src/components/ui',
      'src/lib',
      'src/hooks',
      'src/types',
      'src/app',
      'public'
    ];
    
    directories.forEach(dir => {
      ensureDirectory(path.join(projectPath, dir));
    });
    
    // Create basic package.json
    const templateConfig = TEMPLATES[template];
    const packageJson = {
      name: name,
      version: '0.1.0',
      private: true,
      description: `Project created with ${templateConfig.name} template`,
      scripts: {
        dev: 'next dev',
        build: 'next build',
        start: 'next start',
        lint: 'next lint',
        ai: 'echo "Use @agents/<category>/<agent>.md to activate AI agents"'
      },
      dependencies: {},
      devDependencies: {}
    };
    
    fs.writeFileSync(
      path.join(projectPath, 'package.json'),
      JSON.stringify(packageJson, null, 2)
    );
    
    // Copy template README
    const templateReadmePath = path.join(__dirname, '..', 'templates', template, 'README.md');
    if (fs.existsSync(templateReadmePath)) {
      fs.copyFileSync(templateReadmePath, path.join(projectPath, 'README.md'));
    }
    
    log.success(`Project template ${template} created`);
  } else {
    // Create basic directory structure
    ensureDirectory(projectPath);
    log.step('Creating basic project structure...');
  }
  
  // Copy AI agents
  copyAgents(projectPath, options);
  
  log.title('✨ Project created successfully!');
  
  console.log(`
${colors.bold}Next steps:${colors.reset}
  1. ${colors.cyan}cd ${name}${colors.reset}
  2. ${colors.cyan}npm install${colors.reset}
  3. ${colors.cyan}npm run dev${colors.reset}

${colors.bold}AI Agents Usage:${colors.reset}
  • ${colors.green}@agents/project/init.md${colors.reset}     - Initialize new project
  • ${colors.green}@agents/core/architect.md${colors.reset}   - Plan architecture  
  • ${colors.green}@agents/core/developer.md${colors.reset}   - Implement features
  • ${colors.green}@agents/helpers/rag-assistant.md${colors.reset} - Analyze codebase

${colors.bold}Workflows:${colors.reset}
  • ${colors.yellow}*new-project [description]${colors.reset} - Create new project workflow
  • ${colors.yellow}*analyze [scope]${colors.reset}           - Analyze existing code
  • ${colors.yellow}*quality${colors.reset}                  - Run quality assessment
`);
}

function initializeInExisting(directory, options = {}) {
  const targetDir = path.resolve(directory || '.');
  
  log.title(`Initializing AI-Vibe-Prompts in: ${targetDir}`);
  
  if (!fs.existsSync(targetDir)) {
    log.error(`Directory ${targetDir} does not exist.`);
    process.exit(1);
  }
  
  // Check if already initialized
  const configPath = path.join(targetDir, '.ai-vibe-prompts.json');
  if (fs.existsSync(configPath) && !options.force) {
    log.warn('AI-Vibe-Prompts already initialized. Use --force to reinitialize.');
    process.exit(1);
  }
  
  copyAgents(targetDir, options);
  
  log.title('✨ AI-Vibe-Prompts initialized successfully!');
  
  console.log(`
${colors.bold}Available agents:${colors.reset}
  • Core: orchestrator, architect, developer, analyst
  • Project: init, audit  
  • Design: design-system, figma-converter
  • Helpers: rag-assistant, workflow-composer, quality-monitor

${colors.bold}Usage:${colors.reset}
  ${colors.cyan}@agents/<category>/<agent>.md${colors.reset}

${colors.bold}Examples:${colors.reset}
  ${colors.green}@agents/helpers/rag-assistant.md${colors.reset} - Analyze your codebase
  ${colors.green}@agents/core/architect.md${colors.reset}        - Plan new features
  ${colors.green}@agents/core/developer.md${colors.reset}        - Implement features
`);
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const options = {
    template: args.find(arg => arg.startsWith('--template='))?.split('=')[1] || 
              args.find(arg => arg.startsWith('-t='))?.split('=')[1] ||
              (args.includes('--template') || args.includes('-t') ? args[args.findIndex(arg => arg === '--template' || arg === '-t') + 1] : null),
    force: args.includes('--force'),
    verbose: args.includes('--verbose'),
    agentsOnly: args.includes('--agents-only')
  };
  
  showBanner();
  
  switch (command) {
    case 'init':
      const directory = args[1];
      initializeInExisting(directory, options);
      break;
      
    case 'create':
      const projectName = args[1];
      if (!projectName) {
        log.error('Project name is required');
        showHelp();
        process.exit(1);
      }
      createProject(projectName, options.template, options);
      break;
      
    case 'list-templates':
      listTemplates();
      break;
      
    case 'list-agents':
      listAgents();
      break;
      
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
      
    default:
      if (!command) {
        showHelp();
      } else {
        log.error(`Unknown command: ${command}`);
        showHelp();
        process.exit(1);
      }
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  createProject,
  initializeInExisting,
  copyAgents,
  listTemplates,
  listAgents
}; 