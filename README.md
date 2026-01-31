# orval reproduction template

Minimal repo to reproduce orval generation issues.

## Requirements

- Bun (recommended) or Node.js with npm/pnpm/yarn

## Quick start

```bash
bun install
bun run generate
```

## Scripts

- `generate`: run orval from `orval.config.ts`
- `lint`: run eslint
- `clean`: remove node_modules

## Project layout

- `orval.config.ts`: orval config
- `petstore.yaml`: OpenAPI input
- `src/api/endpoint`: generated endpoints (tags-split)
- `src/api/model`: generated schemas

## Notes

- `clean: true` in the config clears output folders before generation.
- If reporting a bug, include versions (orval, bun or node) and exact steps.
