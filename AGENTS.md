# AGENTS.md

## Project identity
AI OS Launchpad is a premium startup-grade AI systems interface. Every change must improve operational clarity, visual quality, and deployment readiness.

## Coding standards
- Use TypeScript strict mode patterns.
- Keep components single-responsibility and composable.
- Avoid unnecessary dependencies.
- Preserve clean import paths and remove dead code immediately.

## Architecture discipline
- Respect layered structure: layout, pages, modules, terminal, components, hooks, lib, data, styles.
- Keep domain content in `src/data`, reusable behavior in `src/hooks`/`src/lib`.
- No backend or database logic in this repository.

## Mobile-first rules
- Implement mobile behavior first, then enhance for desktop.
- Prevent horizontal overflow at all breakpoints.
- Navigation must collapse and reopen reliably on mobile screens.

## Deployment rules
- Vercel compatibility is mandatory.
- Keep build deterministic (`npm run build` must pass).
- Do not introduce APIs requiring server runtime.

## Forbidden behaviors
- No fake API integrations.
- No placeholder garbage sections.
- No random file sprawl or duplicate components.
- No breaking changes to existing deploy pipeline.
