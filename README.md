# 8 Puzzle Game — React + Vite + GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Test and build

```bash
npm test
npm run build
```

## CI/CD workflow

The workflow at `.github/workflows/ci-cd.yml` has four jobs:

1. **Install** — installs dependencies.
2. **Test** — runs the Vitest test suite.
3. **Build** — creates the production build in `dist/` and uploads it as an artifact.
4. **Deploy Placeholder** — downloads the build artifact on pushes to `main`. Replace the placeholder step with your hosting provider's deployment commands to enable actual deployment.

The jobs run on separate GitHub-hosted runners, so each job checks out the code and installs dependencies independently.
