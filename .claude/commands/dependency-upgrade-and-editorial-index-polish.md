---
name: dependency-upgrade-and-editorial-index-polish
description: Workflow command scaffold for dependency-upgrade-and-editorial-index-polish in dotcom.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /dependency-upgrade-and-editorial-index-polish

Use this workflow when working on **dependency-upgrade-and-editorial-index-polish** in `dotcom`.

## Goal

Upgrades dependencies and polishes editorial or index components, with accompanying documentation.

## Common Files

- `package.json`
- `pnpm-lock.yaml`
- `src/components/editorial-index.tsx`
- `src/components/changelog-list-item.tsx`
- `docs/superpowers/plans/*dependency-upgrade*.md`
- `docs/superpowers/specs/*dependency-upgrade*-design.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update package.json and pnpm-lock.yaml.
- Modify editorial or index-related components under src/components/ or similar.
- Document the changes in docs/superpowers/plans/ and docs/superpowers/specs/.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.