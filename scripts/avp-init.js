#!/usr/bin/env node

/**
 * AI-Vibe-Prompts Initializer
 * Simple CLI tool for setting up AI-Vibe-Prompts in projects
 * Inspired by BMAD-METHOD's installer approach
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  name: 'AI-Vibe-Prompts',
  version: '2.0.0',
  defaultPrompts: [
    'system/system-prompt.md',
    'modes/mode-orchestrator.md',
    'modes/mode-architect.md',
    'core-config.yaml'
  ]
};

// Colors for console output
const colors = {
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function banner() {
  log(`
╔══════════════════════════════════════════════════════════════╗
║                    AI-Vibe-Prompts v${config.version}                    ║
║                                                              ║
║     🤖 Context Engineering Framework for AI Development     ║
║        Inspired by BMAD-METHOD Agent Coordination           ║
╚══════════════════════════════════════════════════════════════╝
`, 'cyan');
}

function getRepoRoot() {
  // Get the directory where this script is located
  const scriptDir = __dirname;
  // Go up one level to get to the repo root
  return path.join(scriptDir, '..');
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    log(`✓ Created directory: ${dirPath}`, 'green');
  }
}

function copyFile(sourcePath, destPath) {
  try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(destPath, content);
    log(`✓ Copied: ${path.basename(destPath)}`, 'green');
    return true;
  } catch (error) {
    log(`✗ Failed to copy ${path.basename(destPath)}: ${error.message}`, 'red');
    return false;
  }
}

function createProjectStructure(targetDir) {
  const directories = [
    'docs',
    'docs/prompts',
    '.ai-vibe-prompts'
  ];

  directories.forEach(dir => {
    ensureDirectoryExists(path.join(targetDir, dir));
  });
}

function installCoreFiles(targetDir) {
  const repoRoot = getRepoRoot();
  const installDir = path.join(targetDir, '.ai-vibe-prompts');
  
  log('\n📋 Installing core files...', 'cyan');
  
  let successCount = 0;
  config.defaultPrompts.forEach(promptPath => {
    const sourcePath = path.join(repoRoot, promptPath);
    const destPath = path.join(installDir, promptPath);
    
    // Ensure destination directory exists
    ensureDirectoryExists(path.dirname(destPath));
    
    if (copyFile(sourcePath, destPath)) {
      successCount++;
    }
  });

  // Copy entire modes directory for agent coordination
  const modesSourceDir = path.join(repoRoot, 'modes');
  const modesDestDir = path.join(installDir, 'modes');
  
  if (fs.existsSync(modesSourceDir)) {
    ensureDirectoryExists(modesDestDir);
    const modeFiles = fs.readdirSync(modesSourceDir);
    modeFiles.forEach(file => {
      if (file.endsWith('.md')) {
        const sourcePath = path.join(modesSourceDir, file);
        const destPath = path.join(modesDestDir, file);
        if (copyFile(sourcePath, destPath)) {
          successCount++;
        }
      }
    });
  }

  return successCount;
}

function createQuickStartGuide(targetDir) {
  const guidePath = path.join(targetDir, 'docs', 'AI_VIBE_PROMPTS_SETUP.md');
  
  const guideContent = `# AI-Vibe-Prompts Setup Guide

## 🚀 Quick Start

Your project now includes AI-Vibe-Prompts for enhanced AI-assisted development!

### Option 1: Agent Orchestrator (Recommended)

1. **Set System Prompt**
   - Copy content from \`.ai-vibe-prompts/system/system-prompt.md\`
   - Paste into your AI assistant's system prompt/rules section

2. **Start Agent Orchestrator**
   \`\`\`
   @.ai-vibe-prompts/modes/mode-orchestrator.md
   *status
   \`\`\`

3. **Begin Development**
   \`\`\`
   *phase planning
   *architect
   I need to build a [describe your project]
   \`\`\`

### Option 2: Individual Agents

Reference specific agents directly:
\`\`\`
@.ai-vibe-prompts/modes/mode-architect.md    # For architecture planning
@.ai-vibe-prompts/modes/mode-developer.md    # For implementation
@.ai-vibe-prompts/modes/mode-analyst.md      # For analysis & optimization
\`\`\`

## 🤖 Available Agents

- **Orchestrator**: Multi-agent coordinator with handoff management
- **Architect**: System design and technology planning
- **Developer**: Code implementation with quality focus
- **Analyst**: Project analysis and optimization

## 📋 Development Workflow

1. **Planning Phase**: Use Architect agent for system design
2. **Implementation Phase**: Use Developer agent for coding
3. **Review Phase**: Use Analyst agent for quality assurance

Each phase includes quality gates and structured handoffs between agents.

## 🔧 Configuration

Core configuration is available in \`.ai-vibe-prompts/core-config.yaml\`

## 📚 More Information

Visit the [AI-Vibe-Prompts repository](https://github.com/Atman36/AI-Vibe-Prompts) for:
- Complete documentation
- Advanced usage examples
- Contribution guidelines
- Latest updates

---
Generated by AI-Vibe-Prompts v${config.version}
`;

  fs.writeFileSync(guidePath, guideContent);
  log(`✓ Created setup guide: ${guidePath}`, 'green');
}

function showSuccessMessage(targetDir, filesInstalled) {
  log(`\n🎉 Installation Complete!`, 'green');
  log(`
📊 Summary:
   ${colors.green}✓${colors.reset} ${filesInstalled} files installed
   ${colors.green}✓${colors.reset} Project structure created
   ${colors.green}✓${colors.reset} Setup guide generated

📍 Installation location: ${targetDir}/.ai-vibe-prompts/

🚀 Next Steps:
   1. Copy system prompt from .ai-vibe-prompts/system/system-prompt.md
   2. Set it as your AI assistant's system prompt
   3. Start with: @.ai-vibe-prompts/modes/mode-orchestrator.md
   4. Read: docs/AI_VIBE_PROMPTS_SETUP.md for detailed instructions

💡 Pro tip: Use the Agent Orchestrator for full workflow management!
`, 'cyan');
}

function main() {
  const args = process.argv.slice(2);
  const targetDir = args[0] || process.cwd();

  banner();

  log(`📁 Target directory: ${targetDir}`, 'yellow');
  
  // Check if target directory exists
  if (!fs.existsSync(targetDir)) {
    log(`✗ Target directory does not exist: ${targetDir}`, 'red');
    process.exit(1);
  }

  // Create project structure
  log('\n🏗️  Creating project structure...', 'cyan');
  createProjectStructure(targetDir);

  // Install core files
  const filesInstalled = installCoreFiles(targetDir);

  // Create quick start guide
  log('\n📚 Creating setup guide...', 'cyan');
  createQuickStartGuide(targetDir);

  // Show success message
  showSuccessMessage(targetDir, filesInstalled);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main }; 