# Vite + React + Tailwind + shadcn/ui Template

## Overview
Lightweight starter template for React applications with modern tooling. Ideal for marketing sites, landing pages, and fast-loading web applications.

## Tech Stack
- **React 18** - Latest React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Strict typing for better developer experience
- **Tailwind CSS** - Utility-first styling framework
- **shadcn/ui** - High-quality, accessible component library
- **React Router** - Client-side routing
- **Vitest** - Fast unit testing framework
- **Playwright** - E2E testing

## Features
- ⚡ Fast development with Vite hot reload
- 🎨 Beautiful UI components with shadcn/ui
- 📱 Responsive design with Tailwind CSS
- ♿ Accessibility built-in (WCAG 2.2 AA)
- 🔧 TypeScript strict mode
- 🧪 Testing setup with Vitest + Playwright
- 📦 Optimized build with code splitting

## Quick Start

### Using AI-Vibe-Prompts CLI
```bash
npx ai-vibe-prompts create my-app --template=shadcn-vite
cd my-app
npm run dev
```

### Manual Setup
```bash
git clone <this-template> my-app
cd my-app
npm install
npm run dev
```

## Project Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── custom/       # Custom components
├── lib/
│   ├── utils.ts      # Utility functions
│   └── constants.ts  # App constants
├── pages/            # Route components
├── hooks/            # Custom React hooks
├── types/            # TypeScript definitions
└── styles/           # Global styles
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript type checking

## Component Library
Pre-configured with shadcn/ui components:
- Button, Input, Card, Dialog
- Form components with validation
- Navigation and layout components
- Dark mode support

## Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB gzipped

## Use Cases
- Marketing websites
- Landing pages
- Documentation sites
- Small to medium SPAs
- MVP prototypes

## AI-Vibe-Prompts Integration
This template includes AI-Vibe-Prompts agents configuration:
- `agents/` folder with specialized development agents
- Pre-configured workflows for common tasks
- Quality gates for performance and accessibility

## Next Steps
After setup, use AI-Vibe-Prompts agents:
```bash
# Analyze project structure
@agents/helpers/rag-assistant.md

# Create new components  
@agents/design/design-system.md

# Add new features
@agents/core/developer.md
``` 