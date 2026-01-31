# orval template repo

Template repository for Orval generation (repro-friendly).

## Quick start

```bash
npm install
npm run generate
```

## Scripts

- `generate`: run Orval using `orval.config.ts`
- `lint`: run ESLint
- `clean`: remove `node_modules`

## Project layout

- `orval.config.ts`: Orval configuration (input/output/hooks)
- `openapi.yaml`: OpenAPI spec source (edit this to change output)
- `src/`: generated output (ignored, always regenerated)

## Notes

- Keep output paths under `src/` since it is regenerated on each run.
- Use hooks like `afterAllFilesWrite` if you need formatting steps.
- When reporting issues, include versions (orval, Bun/Node) and exact steps.
