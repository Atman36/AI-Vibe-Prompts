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

## Quick Start

### Using AI-Vibe-Prompts CLI
```bash
npx ai-vibe-prompts create my-enterprise-app --template=next-enterprise
cd my-enterprise-app
npm install
npm run dev
```

### Manual Setup
```bash
git clone <this-template> my-enterprise-app
cd my-enterprise-app
npm install
cp .env.example .env.local
# Configure environment variables
npm run db:migrate
npm run dev
```

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

## AI-Vibe-Prompts Integration
This template includes:
- Complete agent setup for enterprise development
- Workflow templates for feature development
- Quality gates for enterprise standards
- Performance monitoring integration

## Next Steps
After setup, leverage AI-Vibe-Prompts:
```bash
# Analyze enterprise architecture
@agents/project/audit.md

# Plan new features
@agents/core/architect.md

# Implement with quality gates
@agents/helpers/workflow-composer.md
``` 