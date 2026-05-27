# System Architecture - GitHub Pages Deployment

## 1. Overview
The system utilizes GitHub Actions as the CI/CD engine to build and deploy static content to GitHub Pages.

## 2. Component Diagram
- **GitHub Repository**: Stores source code and workflow definitions.
- **GitHub Actions Runner**: Executes the deployment workflow.
- **GitHub Pages API**: Managed service for hosting static sites.
- **OIDC Provider**: Used for secure authentication between the runner and GitHub Pages.

## 3. Data Flow
1. **Trigger**: A developer pushes code to the `main` branch.
2. **Authentication**: The workflow requests an OIDC token (`id-token: write`).
3. **Configuration**: `actions/configure-pages` sets up the Pages environment.
4. **Upload**: `actions/upload-pages-artifact` packages the static files.
5. **Deployment**: `actions/deploy-pages` calls the GitHub Pages API to publish the artifact.

## 4. Security Model
- **Least Privilege**: The `GITHUB_TOKEN` is restricted to `pages: write` and `id-token: write` to prevent unauthorized access to other repository resources.
