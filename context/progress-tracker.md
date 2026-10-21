# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Auth (03 Auth)

## Current Goal

- 03 Auth: Clerk wiring (`context/feature-specs/03-auth.md`) — implemented; pending manual sign-in verification.

## Completed

- 01 Design System: shadcn/ui (radix-nova, `components.json`) configured; added Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea in `components/ui/` (unmodified); installed `lucide-react`; `lib/utils.ts` exports `cn()`; `globals.css` defines dark-only palette tokens from `ui-context.md` and maps shadcn semantic variables onto them. Typecheck, lint and build pass.
- Removed create-next-app boilerplate: `globals.css` reduced to `@import "tailwindcss";`, default SVGs removed from `public/`, `page.tsx` replaced with a centered "Ghost Project" placeholder.
- 02 Editor: `components/editor/editor-navbar.tsx` (fixed-height navbar, sidebar toggle with PanelLeftOpen/Close), `project-sidebar.tsx` (floating overlay, slide-in, My Projects/Shared tabs with empty states, New Project button), `editor-dialog.tsx` (token-styled dialog pattern with title/description/footer; no concrete dialogs). Not yet mounted in a page. Typecheck and lint pass.
- 03 Auth: installed `@clerk/ui`; `ClerkProvider` (Clerk `dark` theme + CSS-variable overrides in `lib/clerk-appearance.ts`) wraps root layout inside `<Suspense>` (Cache Components); `proxy.ts` protects all routes except sign-in/sign-up paths; `app/(auth)/` two-panel sign-in/sign-up pages; `/` redirects by auth state; `UserButton` in editor navbar; minimal `/editor` page (`editor-shell.tsx`) mounts navbar + sidebar. Typecheck, lint and build pass.

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- `.env.local` has no `NEXT_PUBLIC_CLERK_SIGN_IN_URL` / `SIGN_UP_URL`; `proxy.ts` reads them with `/sign-in` and `/sign-up` fallbacks. Add them if custom paths are wanted.

## Architecture Decisions

- Generated shadcn components import `cn` from the `cn` npm package (shadcn's own, registry-declared); `lib/utils.ts` provides the project `cn()` (clsx + tailwind-merge) for app code.

## Session Notes

- Add context needed to resume work in the next session.
