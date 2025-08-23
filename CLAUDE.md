# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build production bundle
- `pnpm test` - Run Vitest tests once
- `pnpm test:watch` - Run Vitest in watch mode
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript compiler check
- `pnpm validate` - Run test, lint:fix, typecheck, and build concurrently
- `pnpm prettier` - Format files with Prettier
- `pnpm serve` - Serve production build locally

## Architecture Overview

This is a React dashboard application built with modern tooling:

### Tech Stack
- **React 19** with TypeScript
- **Vite** as build tool and dev server
- **Redux Toolkit** for state management with RTK Query for API calls
- **React Router v7** for routing
- **Tailwind CSS** for styling
- **Vitest** with React Testing Library for testing
- **MSW** for API mocking

### Project Structure
- `src/pages/` - Page components organized by feature area (dashboard, ecommerce, community, auth, etc.)
- `src/components/` - Reusable UI components 
- `src/partials/` - Feature-specific components organized by page area
- `src/charts/` - Chart.js chart components
- `src/features/` - Redux slices and feature logic
- `src/services/` - RTK Query API definitions
- `src/hooks/` - Custom React hooks including Redux hooks
- `src/utils/` - Utility functions and theme context
- `src/css/` - Global styles and Tailwind CSS

### State Management
- Redux store configured in `src/store.ts`
- Features use Redux Toolkit slices (see `src/features/Counter/`)
- API calls handled via RTK Query (see `src/services/docs.ts`)

### Routing
- All routes defined in `src/App.tsx`
- Nested auth routes under `/auth`
- Wildcard route for 404 handling

### Testing
- Vitest configuration in `vitest.config.ts`
- Tests use React Testing Library
- MSW for API mocking (configured in `mocks/`)

### Key Configuration Files
- `vite.config.ts` - Vite configuration with React SWC plugin
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration (if present)
- `scripts/validate` - Runs all quality checks concurrently

## Development Notes

- Uses pnpm as package manager
- Node.js version pinned to 22.16.0 via Volta
- ESLint configured with TypeScript and React rules
- Prettier integrated for code formatting
- Husky git hooks for pre-commit validation