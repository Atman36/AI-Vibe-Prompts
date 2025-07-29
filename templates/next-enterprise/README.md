# Next.js 15 Enterprise Template

## Overview
Production-ready Next.js template for enterprise applications with advanced features, optimal performance, and scalable architecture.

## Tech Stack
- **Next.js 15** - App Router, Server Components, Server Actions
- **React 19** - Latest React with concurrent features
- **TypeScript** - Strict mode with advanced type safety
- **Tailwind CSS** - Utility-first styling with design tokens
- **Turbopack** - Ultra-fast bundler for development
- **NextAuth.js** - Enterprise-grade authentication
- **Prisma** - Type-safe ORM with database migrations
- **tRPC** - End-to-end type safety for APIs
- **Vercel** - Optimized deployment and edge functions

## Features
- 🚀 Next.js 15 with App Router and React Server Components
- 🔐 Enterprise authentication with multiple providers
- 📊 Database integration with Prisma ORM
- 🌐 API routes with tRPC for type safety
- 🎨 Design system with Tailwind and custom tokens
- 🧪 Comprehensive testing (Unit, Integration, E2E)
- 📈 Performance monitoring and analytics
- 🔒 Security best practices built-in
- 🌍 i18n ready for multiple languages
- 📱 Mobile-first responsive design

## 🚀 Getting Started: The Automated Way

This template is designed to be set up automatically by your AI agent team. Follow these two simple steps to get your enterprise-grade application running.

### Step 1: Create Your Project

Use the AI-Vibe-Prompts CLI to create a new project from this template.

```bash
npx ai-vibe-prompts create my-enterprise-app --template=next-enterprise
cd my-enterprise-app
```

### Step 2: Let the `Onboarder` Agent Handle Setup

Instead of manual setup, invoke the `Onboarder` agent. It will handle everything for you: install dependencies, configure environment variables, and run initial tests.

```bash
@agents/helpers/onboarder.md
"Onboard this new enterprise project. Install all dependencies, guide me through setting up the `.env` file, and run all verification tests to ensure the project is ready."
```

Once the `Onboarder` is finished, your project is fully configured and ready for development.

## Project Structure
```
src/
├── app/              # App Router pages and layouts
│   ├── (auth)/       # Authentication routes
│   ├── (dashboard)/  # Protected dashboard routes
│   └── api/          # API routes
├── components/
│   ├── ui/           # Base UI components
│   ├── forms/        # Form components
│   └── layouts/      # Layout components
├── lib/
│   ├── auth/         # Authentication logic
│   ├── db/           # Database utilities
│   ├── trpc/         # tRPC configuration
│   └── utils/        # Utility functions
├── server/           # Server-side code
│   ├── api/          # tRPC routers
│   └── db/           # Database schema
└── styles/           # Global styles and tokens
```

## Environment Setup
Required environment variables:
```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Optional: Monitoring
VERCEL_ANALYTICS_ID="..."
SENTRY_DSN="..."
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Lint and fix code
- `npm run type-check` - TypeScript type checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## Architecture Patterns

### Server Components
```tsx
// Fetch data directly in server components
async function DashboardPage() {
  const user = await getCurrentUser();
  const projects = await getProjects(user.id);
  
  return (
    <div>
      <UserProfile user={user} />
      <ProjectList projects={projects} />
    </div>
  );
}
```

### Server Actions
```tsx
// Type-safe server actions
async function createProject(formData: FormData) {
  'use server';
  
  const data = await createProjectSchema.parseAsync({
    name: formData.get('name'),
    description: formData.get('description'),
  });
  
  return await db.project.create({ data });
}
```

### tRPC API Routes
```tsx
// End-to-end type safety
export const projectRouter = router({
  getAll: publicProcedure
    .query(async () => {
      return await db.project.findMany();
    }),
    
  create: protectedProcedure
    .input(createProjectSchema)
    .mutation(async ({ input, ctx }) => {
      return await db.project.create({
        data: { ...input, userId: ctx.user.id }
      });
    }),
});
```

## Performance Targets
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Cumulative Layout Shift**: < 0.05
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: > 95

## Security Features
- Content Security Policy (CSP)
- CSRF protection
- Input validation and sanitization
- Rate limiting
- Secure headers configuration
- Environment variable validation

## Testing Strategy
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: API route testing
- **E2E Tests**: Playwright with multi-browser support
- **Visual Regression**: Storybook + Chromatic
- **Performance Tests**: Lighthouse CI

## Deployment
Optimized for Vercel deployment:
```bash
# Deploy to Vercel
npm run deploy

# Preview deployment
npm run deploy:preview
```

## Monitoring & Analytics
- Performance monitoring with Vercel Analytics
- Error tracking with Sentry
- Custom metrics dashboard
- User behavior analytics

## Use Cases
- Enterprise SaaS applications
- Customer dashboards
- Admin panels
- E-commerce platforms
- Content management systems

## 🤖 Start Building with the `Workflow Composer`

Now that your project is set up, the `Workflow Composer` is your primary tool for development. Give it a high-level goal, and it will orchestrate the entire agent team to build your feature.

**Example:**
```bash
@agents/helpers/workflow-composer.md
"My goal is to add a new dashboard page that displays user analytics. Design the page, create the necessary API endpoints, and build the frontend components."
``` 