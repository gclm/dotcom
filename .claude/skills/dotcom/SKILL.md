```markdown
# dotcom Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches you how to contribute effectively to the `dotcom` TypeScript/Next.js codebase. You'll learn the project's coding conventions, commit patterns, and the main development workflows—from feature planning and implementation to dependency upgrades and documentation updates. This guide also covers how to structure code, write tests, and use suggested commands for common tasks.

## Coding Conventions

### File Naming

- Use **camelCase** for file and directory names.
  - Example: `editorialIndex.tsx`, `changelogListItem.tsx`

### Import Style

- Use **alias-based imports** for internal modules.
  - Example:
    ```typescript
    import { EditorialIndex } from '@/components/editorialIndex'
    ```

### Export Style

- Both **named** and **default exports** are used, depending on context.
  - Named export example:
    ```typescript
    export function ChangelogListItem(props: Props) { ... }
    ```
  - Default export example:
    ```typescript
    export default EditorialIndex
    ```

### Commit Messages

- Use **Conventional Commits** with these prefixes: `feat`, `chore`, `fix`, `refactor`, `perf`, `docs`.
- Keep commit messages concise (average ~45 characters).
  - Example: `feat: add editorial index component`

## Workflows

### Feature Development with Specs and Plans

**Trigger:** When adding a new feature or major capability, ensuring it is well-documented and planned.  
**Command:** `/new-feature-with-spec`

1. Create or update a plan in `docs/superpowers/plans/{date}-{feature}.md`.
2. Create or update a design/spec in `docs/superpowers/specs/{date}-{feature}-design.md`.
3. Implement the feature in relevant files under `src/`.
4. Update configuration or supporting files as needed (`package.json`, `wrangler.jsonc`, `.gitignore`).

**Example:**
```bash
# 1. Write a plan
touch docs/superpowers/plans/2024-06-10-editorial-index.md

# 2. Write a design/spec
touch docs/superpowers/specs/2024-06-10-editorial-index-design.md

# 3. Implement feature
vim src/components/editorialIndex.tsx

# 4. Update configs
vim package.json
```

---

### Dependency Upgrade and Editorial/Index Polish

**Trigger:** When upgrading dependencies and improving editorial or index UI/content.  
**Command:** `/upgrade-dependencies`

1. Update `package.json` and `pnpm-lock.yaml`.
2. Modify editorial or index-related components (e.g., `src/components/editorialIndex.tsx`, `src/components/changelogListItem.tsx`).
3. Document the changes in `docs/superpowers/plans/` and `docs/superpowers/specs/`.

**Example:**
```bash
# 1. Upgrade dependencies
pnpm up

# 2. Polish components
vim src/components/editorialIndex.tsx

# 3. Document the upgrade
touch docs/superpowers/plans/2024-06-10-dependency-upgrade.md
```

---

### Documentation Consolidation or Update

**Trigger:** When updating or merging documentation for agents or features.  
**Command:** `/update-docs`

1. Edit or merge relevant markdown documentation files (e.g., `AGENTS.md`, `CLAUDE.md`).
2. Remove or update outdated instructions.

**Example:**
```bash
vim AGENTS.md
vim CLAUDE.md
```

## Testing Patterns

- Test files use the pattern `*.test.*` (e.g., `editorialIndex.test.tsx`).
- The specific testing framework is not specified, but typical Next.js/TypeScript projects use Jest or Vitest.
- Place tests alongside implementation or in a dedicated `__tests__` directory.

**Example:**
```typescript
// editorialIndex.test.tsx
import { render } from '@testing-library/react'
import EditorialIndex from './editorialIndex'

test('renders editorial index', () => {
  render(<EditorialIndex />)
  // assertions here
})
```

## Commands

| Command                    | Purpose                                               |
|----------------------------|-------------------------------------------------------|
| /new-feature-with-spec     | Start a new feature with planning and design docs     |
| /upgrade-dependencies      | Upgrade dependencies and polish editorial/index UI    |
| /update-docs               | Consolidate or update documentation files             |
```
