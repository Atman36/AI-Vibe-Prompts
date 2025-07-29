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

## 🚀 Getting Started: The Automated Way

This template is designed for a fast, automated setup using your AI agent team. Follow these two steps to get started.

### Step 1: Create Your Project

Use the AI-Vibe-Prompts CLI to create a new project from this template.

```bash
npx ai-vibe-prompts create my-app --template=shadcn-vite
cd my-app
```

### Step 2: Let the `Onboarder` Agent Handle Setup

Instead of manual installation and configuration, invoke the `Onboarder` agent. It will install dependencies and run verification checks for you.

```bash
@agents/helpers/onboarder.md
"Onboard this new shadcn-vite project. Install all dependencies and run verification tests."
```

Once the `Onboarder` is finished, your project is ready for development.

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

## 🤖 Start Building with the `Workflow Composer`

Now that your project is set up, the `Workflow Composer` is your primary tool for development. Give it a high-level goal, and it will orchestrate the agent team to build your feature.

**Example:**
```bash
@agents/helpers/workflow-composer.md
"My goal is to build a new landing page section for customer testimonials. Design the component, add it to the main page, and make sure it's responsive."
``` 