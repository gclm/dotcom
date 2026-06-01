---
name: feature-development-with-specs-and-plans
description: Workflow command scaffold for feature-development-with-specs-and-plans in dotcom.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /feature-development-with-specs-and-plans

Use this workflow when working on **feature-development-with-specs-and-plans** in `dotcom`.

## Goal

Implements a new feature or significant change, accompanied by planning and design documentation.

## Common Files

- `docs/superpowers/plans/*.md`
- `docs/superpowers/specs/*-design.md`
- `src/**`
- `package.json`
- `pnpm-lock.yaml`
- `.gitignore`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update docs/superpowers/plans/{date}-{feature}.md with a plan.
- Create or update docs/superpowers/specs/{date}-{feature}-design.md with a design/spec.
- Modify or add relevant source files under src/ to implement the feature.
- Update configuration or supporting files as needed (e.g., package.json, wrangler.jsonc, .gitignore).

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.