# T3 Stack Template

## Overview
Full-stack TypeScript template with tRPC, Prisma, and NextAuth. Perfect for rapid development of type-safe applications with real-time features and database integration.

## Tech Stack
- **Next.js 15** - App Router with Server Components
- **tRPC** - End-to-end type safety for APIs
- **Prisma** - Type-safe database ORM
- **NextAuth.js** - Complete authentication solution
- **TypeScript** - Full type safety across the stack
- **Tailwind CSS** - Utility-first styling
- **PostgreSQL** - Robust relational database
- **Vercel** - Optimized deployment platform

## Features
- 🔥 Full-stack type safety with tRPC
- 🗄️ Database ORM with Prisma
- 🔐 Authentication with NextAuth.js
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design patterns
- 🧪 Testing setup included
- 🚀 Optimized for deployment
- ⚡ Hot reload development
- 🛡️ Security best practices
- 📊 Database migrations

## 🚀 Getting Started: The Automated Way

This T3 Stack template is designed for a fully automated setup process managed by your AI agent team. Follow these two steps to get your full-stack, type-safe application running.

### Step 1: Create Your Project

Use the AI-Vibe-Prompts CLI to create a new project from this template.

```bash
npx ai-vibe-prompts create my-t3-app --template=t3-stack
cd my-t3-app
```

### Step 2: Let the `Onboarder` Agent Handle Setup

Instead of a manual setup process, invoke the `Onboarder` agent. It will handle everything for you: install dependencies, guide you through creating your `.env` file, and run the initial database migrations.

```bash
@agents/helpers/onboarder.md
"Onboard this new T3 Stack project. Install dependencies, help me configure the environment variables for the database and authentication, and run `prisma db push` to set up the database."
```

Once the `Onboarder` is finished, your project is fully configured and ready for development.

## Project Structure
```
src/
├── app/              # Next.js 15 app directory
│   ├── api/          # API routes
│   └── (pages)/      # Application pages
├── components/       # React components
├── lib/              # Utility libraries
├── server/           # Server-side code
│   ├── api/          # tRPC routers
│   └── db.ts         # Database configuration
├── styles/           # Global styles
└── types/            # TypeScript definitions

prisma/
├── schema.prisma     # Database schema
└── migrations/       # Database migrations
```

## Environment Configuration
Create `.env.local` with:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers (optional)
DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with sample data

## Key Features

### Type-Safe API with tRPC
```typescript
// Define your API in server/api/routers/posts.ts
export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany();
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          authorId: ctx.session.user.id,
        },
      });
    }),
});

// Use in your components with full type safety
function PostList() {
  const { data: posts } = api.post.getAll.useQuery();
  const createPost = api.post.create.useMutation();

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### Database Schema with Prisma
```prisma
// prisma/schema.prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String

  @@map("posts")
}

model User {
  id       String    @id @default(cuid())
  name     String?
  email    String    @unique
  image    String?
  posts    Post[]
  accounts Account[]
  sessions Session[]

  @@map("users")
}
```

### Authentication with NextAuth
```typescript
// Automatic authentication setup
export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
};

// Use in components
function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  
  return <button onClick={() => signIn()}>Sign in</button>;
}
```

## Development Workflow

### 1. Database Schema Changes
```bash
# Edit prisma/schema.prisma
# Then apply changes
npm run db:push

# Or create a migration
npx prisma migrate dev --name add-user-profile
```

### 2. API Development
```bash
# Add new routes in server/api/routers/
# Import in server/api/root.ts
# Use with full type safety in components
```

### 3. Component Development
```bash
# Create components in src/components/
# Use tRPC hooks for data fetching
# Leverage TypeScript for type safety
```

## Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npm run deploy

# Set environment variables in Vercel dashboard
# Configure database connection
```

### Docker
```bash
# Build Docker image
docker build -t my-t3-app .

# Run container
docker run -p 3000:3000 my-t3-app
```

## Performance Optimizations
- Server-side rendering with Next.js
- Automatic code splitting
- Image optimization
- Database query optimization with Prisma
- Edge functions support

## Security Features
- CSRF protection
- SQL injection prevention (Prisma)
- Environment variable validation
- Secure authentication flows
- Input validation with Zod

## Testing
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Database tests
npm run test:db
```

## Use Cases
- SaaS applications
- Social platforms
- E-commerce sites
- Content management
- Real-time dashboards
- API-first applications

## 🤖 Start Building with the `Workflow Composer`

Now that your project is set up, the `Workflow Composer` is your primary tool for development. Give it a high-level goal, and it will orchestrate the entire agent team to build your feature, from database schema changes to frontend components.

**Example:**
```bash
@agents/helpers/workflow-composer.md
"My goal is to add a blogging feature. This requires creating a 'Post' model in the database, building API endpoints for creating and reading posts, and developing the UI to display and create posts."
``` 