---
name: documentation-consolidation-or-update
description: Workflow command scaffold for documentation-consolidation-or-update in dotcom.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /documentation-consolidation-or-update

Use this workflow when working on **documentation-consolidation-or-update** in `dotcom`.

## Goal

Consolidates or updates documentation files, typically for agent or feature instructions.

## Common Files

- `AGENTS.md`
- `CLAUDE.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit or merge relevant markdown documentation files (e.g., AGENTS.md, CLAUDE.md).
- Remove or update outdated instructions.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.