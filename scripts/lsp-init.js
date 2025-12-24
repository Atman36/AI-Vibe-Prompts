#!/usr/bin/env node

/**
 * LSP (Language Server Protocol) Initialization Script
 * Sets up language servers for AI-Vibe-Prompts Code Intelligence
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');

class LSPInitializer {
  constructor() {
    this.rootDir = process.cwd();
    this.configPath = path.join(this.rootDir, '.kiro', 'settings', 'lsp.json');
    this.detectedLanguages = new Set();
  }

  async initialize(options = {}) {
    console.log('🔧 Initializing LSP (Language Server Protocol)...\n');

    try {
      // 1. Detect project languages
      await this.detectLanguages();
      
      // 2. Check/install LSP servers
      await this.setupServers(options);
      
      // 3. Create/update config
      await this.ensureConfig();
      
      // 4. Validate setup
      await this.validateSetup();
      
      console.log('\n✅ LSP initialization complete!');
      this.printUsage();
    } catch (error) {
      console.error('\n❌ LSP initialization failed:', error.message);
      process.exit(1);
    }
  }

  async detectLanguages() {
    console.log('🔍 Detecting project languages...');
    
    const patterns = {
      typescript: ['tsconfig.json', '**/*.ts', '**/*.tsx'],
      javascript: ['package.json', '**/*.js', '**/*.jsx'],
      python: ['pyproject.toml', 'setup.py', 'requirements.txt', '**/*.py'],
      rust: ['Cargo.toml', '**/*.rs'],
      json: ['**/*.json'],
      css: ['**/*.css', '**/*.scss', '**/*.less'],
      html: ['**/*.html']
    };

    for (const [lang, files] of Object.entries(patterns)) {
      for (const pattern of files) {
        if (pattern.includes('*')) continue; // Skip glob patterns for now
        try {
          await fs.access(path.join(this.rootDir, pattern));
          this.detectedLanguages.add(lang);
          break;
        } catch (e) {
          // File doesn't exist
        }
      }
    }

    // Check for common files
    try {
      const packageJson = await fs.readFile(path.join(this.rootDir, 'package.json'), 'utf8');
      const pkg = JSON.parse(packageJson);
      
      if (pkg.devDependencies?.typescript || pkg.dependencies?.typescript) {
        this.detectedLanguages.add('typescript');
      }
      this.detectedLanguages.add('javascript');
      this.detectedLanguages.add('json');
    } catch (e) {
      // No package.json
    }

    console.log(`  Detected: ${[...this.detectedLanguages].join(', ') || 'none'}`);
  }

  async setupServers(options = {}) {
    console.log('\n📦 Setting up LSP servers...');
    
    const servers = {
      typescript: {
        name: 'TypeScript/JavaScript',
        check: 'typescript-language-server --version',
        install: 'npm install -g typescript-language-server typescript',
        required: this.detectedLanguages.has('typescript') || this.detectedLanguages.has('javascript')
      },
      python: {
        name: 'Python (Pyright)',
        check: 'pyright --version',
        install: 'pip install pyright',
        altInstall: 'uv tool install pyright',
        required: this.detectedLanguages.has('python')
      },
      rust: {
        name: 'Rust (rust-analyzer)',
        check: 'rust-analyzer --version',
        install: 'rustup component add rust-analyzer',
        required: this.detectedLanguages.has('rust')
      },
      vscode_servers: {
        name: 'VSCode Language Servers (JSON, CSS, HTML)',
        check: 'vscode-json-language-server --version',
        install: 'npm install -g vscode-langservers-extracted',
        required: true
      }
    };

    for (const [key, server] of Object.entries(servers)) {
      if (!server.required && !options.all) {
        console.log(`  ⏭️  ${server.name} - skipped (not detected)`);
        continue;
      }

      const installed = this.checkCommand(server.check);
      
      if (installed) {
        console.log(`  ✅ ${server.name} - installed`);
      } else if (options.install) {
        console.log(`  📥 Installing ${server.name}...`);
        try {
          execSync(server.install, { stdio: 'inherit' });
          console.log(`  ✅ ${server.name} - installed`);
        } catch (e) {
          if (server.altInstall) {
            try {
              execSync(server.altInstall, { stdio: 'inherit' });
              console.log(`  ✅ ${server.name} - installed (alt)`);
            } catch (e2) {
              console.log(`  ⚠️  ${server.name} - install failed`);
            }
          } else {
            console.log(`  ⚠️  ${server.name} - install failed`);
          }
        }
      } else {
        console.log(`  ❌ ${server.name} - not installed`);
        console.log(`     Run: ${server.install}`);
      }
    }
  }

  checkCommand(cmd) {
    try {
      execSync(cmd, { stdio: 'pipe' });
      return true;
    } catch (e) {
      return false;
    }
  }

  async ensureConfig() {
    console.log('\n📄 Configuring LSP...');
    
    const configDir = path.dirname(this.configPath);
    
    try {
      await fs.mkdir(configDir, { recursive: true });
    } catch (e) {
      // Directory exists
    }

    let config;
    try {
      const existing = await fs.readFile(this.configPath, 'utf8');
      config = JSON.parse(existing);
      console.log('  Found existing config, updating...');
    } catch (e) {
      config = this.getDefaultConfig();
      console.log('  Creating new config...');
    }

    // Enable detected languages
    for (const lang of this.detectedLanguages) {
      if (config.servers[lang]) {
        config.servers[lang].enabled = true;
      }
    }

    await fs.writeFile(this.configPath, JSON.stringify(config, null, 2));
    console.log(`  ✅ Config saved: ${this.configPath}`);
  }

  getDefaultConfig() {
    return {
      version: '1.0.0',
      servers: {
        typescript: {
          command: 'typescript-language-server',
          args: ['--stdio'],
          filetypes: ['typescript', 'typescriptreact', 'javascript', 'javascriptreact'],
          enabled: false
        },
        python: {
          command: 'pyright-langserver',
          args: ['--stdio'],
          filetypes: ['python'],
          enabled: false
        },
        rust: {
          command: 'rust-analyzer',
          args: [],
          filetypes: ['rust'],
          enabled: false
        }
      },
      tools: {
        getDiagnostics: { autoRun: true, triggerOn: ['afterEdit'] },
        goToDefinition: { autoRun: false },
        findReferences: { autoRun: false },
        hover: { autoRun: false }
      },
      environment: {
        ENABLE_LSP_TOOL: '1'
      }
    };
  }

  async validateSetup() {
    console.log('\n🔍 Validating LSP setup...');
    
    const checks = [
      { name: 'Config file', path: this.configPath },
      { name: 'Kiro settings dir', path: path.join(this.rootDir, '.kiro', 'settings') }
    ];

    for (const check of checks) {
      try {
        await fs.access(check.path);
        console.log(`  ✅ ${check.name}`);
      } catch (e) {
        console.log(`  ❌ ${check.name}`);
      }
    }
  }

  printUsage() {
    console.log('\n📖 LSP Usage Guide:');
    console.log('─'.repeat(50));
    console.log('');
    console.log('Available LSP tools for AI agents:');
    console.log('');
    console.log('  getDiagnostics  - Check errors after editing files');
    console.log('  goToDefinition  - Navigate to symbol definition');
    console.log('  findReferences  - Find all usages of a symbol');
    console.log('  hover           - Get type info and documentation');
    console.log('  documentSymbol  - Get file structure overview');
    console.log('');
    console.log('Environment variables:');
    console.log('  export ENABLE_LSP_TOOL=1  # Enable LSP in Claude Code');
    console.log('');
    console.log('Config location:');
    console.log(`  ${this.configPath}`);
  }

  async status() {
    console.log('🔧 LSP Status\n');
    
    try {
      const config = JSON.parse(await fs.readFile(this.configPath, 'utf8'));
      
      console.log('Configured servers:');
      for (const [name, server] of Object.entries(config.servers)) {
        const status = server.enabled ? '✅ enabled' : '⏸️  disabled';
        const installed = this.checkCommand(`${server.command} --version`) ? '(installed)' : '(not installed)';
        console.log(`  ${name}: ${status} ${installed}`);
      }
      
      console.log('\nEnabled tools:');
      for (const [name, tool] of Object.entries(config.tools)) {
        const auto = tool.autoRun ? '🔄 auto' : '📌 manual';
        console.log(`  ${name}: ${auto}`);
      }
    } catch (e) {
      console.log('❌ LSP not configured. Run: node scripts/lsp-init.js');
    }
  }
}

// CLI - only run when called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0] || 'init';
  const options = {
    install: args.includes('--install') || args.includes('-i'),
    all: args.includes('--all') || args.includes('-a')
  };

  const lsp = new LSPInitializer();

  switch (command) {
    case 'init':
      lsp.initialize(options);
      break;
    case 'status':
      lsp.status();
      break;
    case 'help':
      console.log('LSP Initialization Script');
      console.log('');
      console.log('Usage: node scripts/lsp-init.js [command] [options]');
      console.log('');
      console.log('Commands:');
      console.log('  init     Initialize LSP configuration (default)');
      console.log('  status   Show current LSP status');
      console.log('  help     Show this help');
      console.log('');
      console.log('Options:');
      console.log('  --install, -i   Auto-install missing LSP servers');
      console.log('  --all, -a       Setup all servers, not just detected');
      break;
    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
}

module.exports = { LSPInitializer };
