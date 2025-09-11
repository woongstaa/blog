# Repository Guidelines

## Project Structure & Modules
- `src/app`: App Router pages, layout, sitemap/robots.
- `src/_pages`: Page-layer components used by routes.
- `src/entities`: Domain models and aggregations.
- `src/features`: Feature-level UI (e.g., TOC, navigation).
- `src/widgets`: Reusable composed UI blocks.
- `src/shared`: Cross-cutting code (MDX, hooks, utils, constants, markdown content).
- `public`: Static assets.

## Build, Test, Dev
- `npm run dev`: Start Next.js dev server.
- `npm run build`: Production build (App Router + MDX).
- `npm start`: Serve production build.
- `npm run lint`: ESLint (Next + Tailwind plugin).
- `npm test`: Run Vitest.

Example: `npm run dev` then visit `http://localhost:3000`.

## Coding Style & Naming
- TypeScript strict mode; 2-space indentation via Prettier.
- Components: PascalCase files (e.g., `PostSummary.tsx`).
- Hooks: `useX` camelCase in `src/shared/hooks`.
- Constants/config: under `src/shared` (e.g., `constants/`, `mdx-config.ts`).
- Imports: use `@/` alias (see `tsconfig.json`).
- Run formatting: `npx prettier . --write` (includes Tailwind class sorting).

## Testing Guidelines
- Framework: Vitest. Place tests near code or under `src`.
- Naming: `*.test.ts`/`*.test.tsx`.
- Run: `npm test` (add `--coverage` if needed).
- Focus: utils (`src/shared/utils.ts`), pure components; prefer small, deterministic tests.

## Commit & Pull Requests
- Use Conventional Commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`.
- Commits: concise imperative subject; scope optional (e.g., `feat(shared): add reading time`).
- PRs: clear description, linked issues, screenshots/GIFs for UI, checklist of affected areas (routes, markdown, SEO).

## Security & Configuration
- Environment: use `.env.local`; client-exposed vars must prefix `NEXT_PUBLIC_`.
- Server-only code: modules using `fs`/`path` must stay in server contexts (not Client Components).
- Content: MD files live in `src/shared/markdown`; keep frontmatter consistent.

## Architecture Notes
- App Router drives routing; page-layer components are composed from `entities` → `features` → `widgets` → `shared`.
- MDX is enabled via `next.config.mjs`; verify content paths when adding new markdown.
