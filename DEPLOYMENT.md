# Deployment Guide: Github Pages (Next.js)

Since your portfolio is built with Next.js, the most reliable way to host it on GitHub for free is using **GitHub Pages** with a **Static Export**.

---

## Step 1: Prepare your Code

1.  **Open `next.config.ts`** in your editor.
2.  Add `output: 'export'` to your configuration. It should look like this:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Add this line
  transpilePackages: ["three"],
  turbopack: {},
};

export default nextConfig;
```

3.  **Note on Images:** GitHub Pages hosted at `username.github.io/repo-name/` requires careful handling of paths. If you are deploying to a non-root domain, you may need to add `basePath: '/your-repo-name'` to `next.config.ts`.

---

## Step 2: Initialize Git and Push to GitHub

If you haven't already:

1.  **Create a new public repository** on GitHub named `portfolio`.
2.  Open your terminal in the `portfolio` folder:
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Futuristic 3D Portfolio"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git push -u origin main
    ```

---

## Step 3: Configure GitHub Pages

1.  Go to your repository on GitHub.
2.  Click on **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.

---

## Step 4: Add the Deployment Workflow

1.  Create a folder named `.github/workflows` in your project root.
2.  Create a file named `deploy.yml` inside that folder and paste the following:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: next
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 5: Final Push

Commit and push the new workflow file:
```bash
git add .
git commit -m "Add deployment workflow"
git push
```

GitHub will now automatically build and deploy your site. You can monitor the progress in the **Actions** tab of your repository.
