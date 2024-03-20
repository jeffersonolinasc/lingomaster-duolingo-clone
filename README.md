This is LingoMaster, the duolingo clone project build using Nextjs, Tailwindcss, Stripe, Drizzle, and more.
timestamp: 07:15 (seed script)

## Shadcn UI

```text
- npx shadcn-ui@latest init
- will adding `clsx`, `tailwind-merge`, `tailwindcss-animate`, `class-variance-authority`, `lucide-react`
- will adding new code in tailwind.config.ts

- npx shadcn-ui@latest add button (add button component) - @radix-ui/react-slot
- and customize the button component based your need

- npx shadcn-ui@latest add sheet (add sheet component) - @radix-ui/react-dialog

- npx shadcn-ui@latest add sooner (add sooner component) - sooner, next-themes
```

## General Packages

-   [x] Nextjs - pnpm create next-app
-   [x] Tailwindcss - pnpm add tailwindcss postcss autoprefixer
-   [x] Dotenv - pnpm add dotenv
-   [x] Tsx - pnpm add -D tsx
-   [x] React-Circular-Progressbar - pnpm add react-circular-progressbar (https://www.npmjs.com/package/react-circular-progressbar)

```text
# script package.json
- "db:seed" : "tsx ./scripts/seed.ts"
```

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
# script package.json
- "db:studio": "npx drizzle-kit studio",
- "db:push" : "npx drizzle-kit push:pg",
```
