# Netlify deployment

> **Environment status:** Public owner-review deployment  
> **Public URL:** [villasplayasamara.netlify.app](https://villasplayasamara.netlify.app/)  
> **Source repository:** [msendracr87/villas-playa-samara](https://github.com/msendracr87/villas-playa-samara)  
> **Verified:** July 30, 2026

## Purpose

The Netlify deployment provides a stable public URL for presenting and reviewing the current Villas Playa Sámara homepage.

This environment is not approval to treat the website as launch-ready. The content, operational, legal, image-rights, CTA, accessibility, and policy requirements in [`TO-DO.md`](../../TO-DO.md) remain authoritative.

## Confirmed implementation

- The public URL responds successfully with HTTP 200.
- Response headers identify Netlify as the hosting platform and show that the page is served through Netlify Edge.
- The deployed HTML references the same generated JavaScript and CSS asset hashes as the current local production build.
- The project builds as a React 19, TypeScript, and Vite application.
- The repository build command is `npm run build`.
- Vite generates the deployable site in `dist/`.
- `dist/` remains excluded from Git because it is generated from the committed source.
- Local environment files, dependencies, tool caches, and scratch files also remain excluded from the repository.

## Repository build contract

For a clean deployment:

```sh
npm ci
npm run build
```

The publish directory is:

```text
dist
```

## Netlify settings pending confirmation

The public deployment is verified, but the Netlify administrative configuration has not been recorded from the Netlify dashboard. Confirm and document:

- The Netlify team and site owner.
- Whether continuous deployment is connected to the GitHub repository.
- The production branch, expected to be `main`.
- The configured build command and publish directory.
- The Node.js version used by Netlify.
- Whether any environment variables are required.
- Deploy-preview and branch-deploy settings.
- Custom-domain, DNS, HTTPS, and redirect requirements.
- Rollback and deployment-approval responsibilities.

Do not add secrets or production credentials to this document or commit them to Git. Record only environment-variable names when configuration becomes necessary.

## Launch transition

Keep the `netlify.app` URL classified as an owner-review environment until the public-launch checklist is complete. Before treating a deployment as production:

1. Resolve the applicable launch blockers in [`TO-DO.md`](../../TO-DO.md).
2. Confirm the final custom domain and DNS ownership.
3. Verify every CTA, form, policy, contact method, metadata field, and production image.
4. Confirm analytics, consent, accessibility, error handling, redirects, and rollback ownership.
5. Record the production approval date and approver in this document.
