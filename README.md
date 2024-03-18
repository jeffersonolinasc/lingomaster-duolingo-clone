This is LingoMaster, the duolingo clone project build using Nextjs, Tailwindcss, Stripe, Drizzle, and more.

## Shadcn UI

```text
- npx shadcn-ui@latest init
- will adding `clsx`, `tailwind-merge`, `tailwindcss-animate`, `class-variance-authority`, `lucide-react`
- will adding new code in tailwind.config.ts

- npx shadcn-ui@latest add button (add button component) - @radix-ui/react-slot
- and customize the button component based your need

- npx shadcn-ui@latest add sheet (add sheet component) - @radix-ui/react-dialog
```

## General Packages

-   [x] Nextjs - pnpm create next-app
-   [x] Tailwindcss - pnpm add tailwindcss postcss autoprefixer
-   [x] Dotenv - pnpm add dotenv

## Clerk Packages

-   [x] Clerk - pnpm add @clerk/nextjs

```text
- Wrapping root layout with ClerkProvider
- add middleware to protect routes in middleware.ts
```

## Drizzle/Neon Packages

-   [drizzle-orm] - pnpm add drizzle-orm @neondatabase/serverless (https://orm.drizzle.team/docs/get-started-postgresql#neon)
-   [drizzle-kit] - pnpm add -D drizzle-kit (https://orm.drizzle.team/kit-docs/overview#overview)
-   [pg] - pnpm add -D pg (require for drizzle-kit studio)

```text
- "db:studio": "npx drizzle-kit studio",
- "db:push" : "npx drizzle-kit push:pg",
```
