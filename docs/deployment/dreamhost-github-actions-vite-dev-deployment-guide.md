# Deploying a Vite Website to a DreamHost Dev Subdomain with GitHub Actions

This guide explains how to automatically deploy the following Vite project to a DreamHost development subdomain:

- Repository: <https://github.com/msendracr87/villas-playa-samara>
- Example dev URL: `https://dev.villasplayasamara.com`
- Hosting: DreamHost VPS with Apache
- Deployment: GitHub Actions over SSH using `rsync`

> Replace every example username, hostname, and directory path in this guide with the real values from your DreamHost account.

## 1. Recommended architecture

```text
GitHub repository
        │
        │ Push to main
        ▼
GitHub Actions
├── npm ci
├── npm run build
└── creates dist/
        │
        │ SSH + rsync
        ▼
DreamHost VPS
/home/YOUR_USER/dev.villasplayasamara.com/
        │
        ▼
https://dev.villasplayasamara.com
```

The project is a client-side React/Vite website. Its production build is a set of static HTML, CSS, JavaScript, and asset files in `dist/`.

DreamHost's Apache server can serve those files directly. You do **not** need to run Node.js, PM2, Express, Passenger, or `vite preview` on DreamHost.

Node.js is only needed in GitHub Actions to build the project.

## 2. Information you will need

Before configuring GitHub, establish these five DreamHost details:

```text
Subdomain:    dev.villasplayasamara.com
SSH user:     YOUR_DREAMHOST_USER
SSH host:     YOUR_DREAMHOST_HOST
Web path:     YOUR_DREAMHOST_PATH
SSH login:    Confirmed working
```

Example values used throughout this guide:

```text
DREAMHOST_USER = vpsamara_dev
DREAMHOST_HOST = ps123456.dreamhostps.com
DREAMHOST_PATH = /home/vpsamara_dev/dev.villasplayasamara.com
```

These are examples only.

## 3. Create the development subdomain in DreamHost

In DreamHost, open **Manage Websites** and add the development subdomain as a hosted website.

Recommended settings:

| Setting | Recommended value |
|---|---|
| Domain | `dev.villasplayasamara.com` |
| Hosting | Custom Setup |
| Web server | Apache/default |
| User | New dedicated user |
| PHP | Not relevant for this Vite website |
| Web directory | `dev.villasplayasamara.com` |

Choose **Custom Setup**, not WordPress.

A dedicated user such as the following is strongly recommended:

```text
vpsamara_dev
```

This limits the GitHub deployment credentials to the dev website instead of exposing the user that owns your other WordPress installations.

The resulting directory will probably resemble:

```text
/home/vpsamara_dev/dev.villasplayasamara.com/
```

Do not assume the path. Confirm it through SSH in a later step.

DreamHost reference: [Adding a website and hosting](https://help.dreamhost.com/hc/en-us/articles/360049378932-Adding-a-website-and-hosting)

## 4. Enable SSH/Shell access

GitHub Actions will use SSH and `rsync` to transfer the built website.

In DreamHost, open **SFTP Users & Files**, locate the dedicated user, and make sure the following is enabled:

```text
Secure Shell Access (SSH): ON
Shell: bash
```

An SFTP-only user is insufficient for this workflow. The account needs Shell/SSH access.

DreamHost reference: [Creating a user with Shell access](https://help.dreamhost.com/hc/en-us/articles/216385837-Creating-a-user-with-Shell-SSH-access)

## 5. Find the DreamHost SSH hostname

A DreamHost VPS hostname commonly resembles:

```text
ps123456.dreamhostps.com
```

You can find the exact server hostname in the DreamHost panel. Although the subdomain may eventually work as the SSH hostname, using the actual DreamHost server hostname is more reliable for deployments.

DreamHost reference: [SSH overview](https://help.dreamhost.com/hc/en-us/articles/216041267-SSH-overview)

## 6. Test SSH manually

Before involving GitHub Actions, verify that you can log in from your computer.

```bash
ssh vpsamara_dev@ps123456.dreamhostps.com
```

The first connection may ask you to confirm the server fingerprint. Enter the password assigned to the DreamHost user.

Once connected, inspect the account:

```bash
pwd
ls -la
```

You should see a home path and the subdomain directory, for example:

```text
/home/vpsamara_dev
dev.villasplayasamara.com
```

Enter the web directory and confirm its absolute path:

```bash
cd dev.villasplayasamara.com
pwd
```

Example result:

```text
/home/vpsamara_dev/dev.villasplayasamara.com
```

Save this exact value. It will become `DREAMHOST_PATH` in GitHub.

## 7. Create a dedicated SSH deployment key

Do not give GitHub Actions your normal personal SSH key. Create a key dedicated to this repository and environment.

On your computer, run:

```bash
ssh-keygen -t ed25519 -C "github-actions-villas-playa-samara-dev"
```

When asked where to save the key, choose a recognizable local filename:

```text
dreamhost-villas-dev
```

For a CI-only deployment key, leave the passphrase empty. The key is protected by storing the private half in GitHub Secrets and limiting the DreamHost account to this site.

The command creates two files:

| File | Purpose | Destination |
|---|---|---|
| `dreamhost-villas-dev` | Private key | GitHub Actions secret |
| `dreamhost-villas-dev.pub` | Public key | DreamHost `authorized_keys` |

Never commit either key to the repository. In particular, never share or upload the private key anywhere except the corresponding encrypted GitHub secret.

## 8. Install the public key on DreamHost

Open the public key file:

```text
dreamhost-villas-dev.pub
```

It will look similar to this:

```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... github-actions-villas-playa-samara-dev
```

Copy the entire line.

Log in to DreamHost:

```bash
ssh vpsamara_dev@ps123456.dreamhostps.com
```

Create and secure the SSH directory:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Open the authorized keys file:

```bash
nano ~/.ssh/authorized_keys
```

Paste the complete public-key line. In Nano, save and exit with:

```text
Ctrl + O
Enter
Ctrl + X
```

Secure the file:

```bash
chmod 600 ~/.ssh/authorized_keys
```

Required permissions:

```text
~/.ssh                  700
~/.ssh/authorized_keys  600
```

DreamHost reference: [Configuring passwordless SSH login](https://help.dreamhost.com/hc/en-us/articles/216499537-How-to-configure-passwordless-login-in-Mac-OS-X-and-Linux)

## 9. Test passwordless authentication

From the directory containing the private key on your computer, run:

```bash
ssh -i ./dreamhost-villas-dev \
  vpsamara_dev@ps123456.dreamhostps.com
```

You should connect without being asked for the DreamHost account password.

Do not continue to GitHub Actions until this works.

## 10. Add Apache SPA routing support to the Vite project

The repository currently includes Netlify's routing file:

```text
public/_redirects
```

with:

```text
/* /index.html 200
```

Keep that file if the Netlify review environment is still useful. DreamHost's Apache server ignores it, so the project also needs:

```text
public/.htaccess
```

Add the following content:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Serve real files and directories normally.
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Send application routes to the React entry point.
    RewriteRule ^ index.html [L]
</IfModule>
```

The `public` directory should then include:

```text
public/
├── _redirects
└── .htaccess
```

Vite copies files from `public/` into `dist/` during the production build.

This fallback is necessary because a direct visit to a route such as:

```text
https://dev.villasplayasamara.com/rooms-and-villas
```

would otherwise cause Apache to look for a physical file or directory at that path and return a 404 before React loads.

DreamHost reference: [Using `.htaccess` redirects and rewrites](https://help.dreamhost.com/hc/en-us/articles/215747748-How-can-I-redirect-and-rewrite-my-URLs-with-an-htaccess-file)

## 11. Test the production build locally

From the project root, run:

```bash
npm ci
npm run build
```

The build should produce something similar to:

```text
dist/
├── assets/
├── index.html
├── .htaccess
├── _redirects
└── ...
```

Confirm that `.htaccess` was copied into `dist/`.

### Windows PowerShell

```powershell
Get-ChildItem -Force dist
```

### Linux or macOS

```bash
ls -la dist
```

## 12. Perform one manual deployment

Test the complete build and transfer process from your computer before automating it.

```bash
rsync -avz \
  -e "ssh -i ./dreamhost-villas-dev" \
  dist/ \
  vpsamara_dev@ps123456.dreamhostps.com:/home/vpsamara_dev/dev.villasplayasamara.com/
```

The trailing slash in `dist/` is important. It means that `rsync` uploads the **contents** of `dist`, producing:

```text
dev.villasplayasamara.com/index.html
```

It should not produce:

```text
dev.villasplayasamara.com/dist/index.html
```

Visit the development subdomain and test:

- The homepage
- A direct visit to `/rooms-and-villas`
- A nested room route
- Refreshing the browser while on an internal route
- CSS, JavaScript, images, and fonts

At this stage, use HTTP if the SSL certificate has not been installed yet.

## 13. Add HTTPS to the subdomain

After the subdomain's DNS resolves to DreamHost, open **Secure Certificates** in the DreamHost panel.

Find:

```text
dev.villasplayasamara.com
```

Add a free Let's Encrypt certificate. Each subdomain needs its own certificate.

Then test:

```text
https://dev.villasplayasamara.com
```

Get HTTPS working before adding any custom forced-HTTPS rewrite rules.

DreamHost reference: [Adding a free Let's Encrypt certificate](https://help.dreamhost.com/hc/en-us/articles/216539548-Adding-a-free-Let-s-Encrypt-certificate)

## 14. Create the GitHub Actions secrets

Open the repository:

<https://github.com/msendracr87/villas-playa-samara>

Then go to:

```text
Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

Create these five secrets:

```text
DREAMHOST_USER
DREAMHOST_HOST
DREAMHOST_PATH
DREAMHOST_SSH_KEY
DREAMHOST_KNOWN_HOSTS
```

### `DREAMHOST_USER`

The dedicated DreamHost Shell user:

```text
vpsamara_dev
```

### `DREAMHOST_HOST`

The DreamHost VPS hostname:

```text
ps123456.dreamhostps.com
```

### `DREAMHOST_PATH`

The absolute path confirmed using `pwd`:

```text
/home/vpsamara_dev/dev.villasplayasamara.com
```

Do not add a filename. This must be the dedicated web directory.

### `DREAMHOST_SSH_KEY`

Open the private key file:

```text
dreamhost-villas-dev
```

Do **not** use the `.pub` file.

Copy the complete private key, including these lines:

```text
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

### `DREAMHOST_KNOWN_HOSTS`

Generate the host-key entries from your computer:

```bash
ssh-keyscan -H ps123456.dreamhostps.com
```

The output will contain one or more lines similar to:

```text
|1|... ssh-ed25519 AAAAC3...
|1|... ssh-rsa AAAAB3...
```

Copy the entire output into `DREAMHOST_KNOWN_HOSTS`.

This allows GitHub Actions to verify the identity of the SSH server instead of disabling host verification.

GitHub reference: [Using secrets in GitHub Actions](https://docs.github.com/en/actions/reference/security/secrets)

## 15. Create the GitHub Actions workflow

Create this file inside the repository:

```text
.github/workflows/deploy-dreamhost-dev.yml
```

Use the following workflow:

```yaml
name: Deploy DreamHost Dev

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: dreamhost-dev
  cancel-in-progress: true

jobs:
  deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v7

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build Vite website
        run: npm run build

      - name: Verify build
        run: |
          test -f dist/index.html
          test -f dist/.htaccess
          echo "Vite build completed successfully."

      - name: Configure SSH
        env:
          DREAMHOST_SSH_KEY: ${{ secrets.DREAMHOST_SSH_KEY }}
          DREAMHOST_KNOWN_HOSTS: ${{ secrets.DREAMHOST_KNOWN_HOSTS }}
        run: |
          mkdir -p ~/.ssh
          chmod 700 ~/.ssh

          printf '%s\n' "$DREAMHOST_SSH_KEY" > ~/.ssh/dreamhost
          chmod 600 ~/.ssh/dreamhost

          printf '%s\n' "$DREAMHOST_KNOWN_HOSTS" > ~/.ssh/known_hosts
          chmod 600 ~/.ssh/known_hosts

      - name: Deploy to DreamHost
        env:
          DREAMHOST_USER: ${{ secrets.DREAMHOST_USER }}
          DREAMHOST_HOST: ${{ secrets.DREAMHOST_HOST }}
          DREAMHOST_PATH: ${{ secrets.DREAMHOST_PATH }}
        run: |
          rsync -avz \
            --delete \
            -e "ssh -i ~/.ssh/dreamhost" \
            dist/ \
            "$DREAMHOST_USER@$DREAMHOST_HOST:$DREAMHOST_PATH/"
```

### Why the workflow includes these controls

- `permissions: contents: read` gives the workflow only the repository permission it needs.
- `workflow_dispatch` allows you to run the deployment manually from GitHub.
- `concurrency` prevents two overlapping deployments from writing to the server simultaneously.
- `npm ci` installs the exact versions from the lockfile.
- The verification step stops deployment if the expected Vite output is missing.
- SSH host verification remains enabled through `known_hosts`.
- Only `dist/` is transferred to DreamHost.

## 16. Critical warning about `rsync --delete`

The following option removes files from DreamHost that no longer exist in the new Vite build:

```text
--delete
```

This keeps the deployment directory clean and prevents obsolete hashed assets from accumulating. However, it makes the accuracy of `DREAMHOST_PATH` critical.

A safe path looks like:

```text
/home/vpsamara_dev/dev.villasplayasamara.com
```

An unsafe path would be the user's entire home directory:

```text
/home/vpsamara_dev
```

With the wrong destination, `--delete` could remove unrelated files.

For the first GitHub Actions deployment, temporarily remove this line from the workflow:

```yaml
--delete \
```

Run the deployment, inspect the destination, and only restore `--delete` after confirming that `DREAMHOST_PATH` points exclusively to the dev website directory.

## 17. Commit and trigger the first deployment

Add the Apache routing file and GitHub workflow:

```bash
git add public/.htaccess
git add .github/workflows/deploy-dreamhost-dev.yml

git commit -m "Add DreamHost dev deployment"
git push origin main
```

The push should automatically start the workflow.

Open:

```text
GitHub
→ villas-playa-samara
→ Actions
→ Deploy DreamHost Dev
```

The completed workflow should show:

```text
✓ Checkout repository
✓ Setup Node.js
✓ Install dependencies
✓ Build Vite website
✓ Verify build
✓ Configure SSH
✓ Deploy to DreamHost
```

Visit:

```text
https://dev.villasplayasamara.com
```

Confirm that it reflects the latest commit.

## 18. Normal development workflow

After setup, development remains simple:

```bash
git add .
git commit -m "Update rooms page"
git push origin main
```

The automated flow becomes:

```text
Local development
        ↓
GitHub main branch
        ↓
GitHub Actions
        ↓
DreamHost dev subdomain
```

The DreamHost server does not need:

- A Git clone of the repository
- `npm install`
- A running Node process
- PM2
- `vite preview`
- A WordPress installation for this subdomain

## 19. First-deployment checklist

### DreamHost

- [ ] Create `dev.villasplayasamara.com` with Custom Setup.
- [ ] Assign a dedicated DreamHost user.
- [ ] Enable Shell/SSH access for that user.
- [ ] Confirm the VPS SSH hostname.
- [ ] Log in using the DreamHost password.
- [ ] Confirm the exact web path with `pwd`.
- [ ] Add the public deployment key to `~/.ssh/authorized_keys`.
- [ ] Confirm passwordless login using the private deployment key.
- [ ] Add a Let's Encrypt certificate after DNS resolves.

### Repository

- [ ] Add `public/.htaccess`.
- [ ] Run `npm ci` successfully.
- [ ] Run `npm run build` successfully.
- [ ] Confirm `dist/index.html` exists.
- [ ] Confirm `dist/.htaccess` exists.
- [ ] Perform one manual `rsync` deployment without `--delete`.
- [ ] Test direct and nested application routes.

### GitHub

- [ ] Add `DREAMHOST_USER`.
- [ ] Add `DREAMHOST_HOST`.
- [ ] Add `DREAMHOST_PATH`.
- [ ] Add `DREAMHOST_SSH_KEY`.
- [ ] Add `DREAMHOST_KNOWN_HOSTS`.
- [ ] Add `.github/workflows/deploy-dreamhost-dev.yml`.
- [ ] Run the first workflow without `--delete`.
- [ ] Confirm the exact deployment destination.
- [ ] Restore `--delete` once the path is verified.

## 20. Troubleshooting

### `Permission denied (publickey)`

Check:

- The private key in `DREAMHOST_SSH_KEY` matches the public key installed on DreamHost.
- The public key is one complete line in `~/.ssh/authorized_keys`.
- `~/.ssh` has permission `700`.
- `~/.ssh/authorized_keys` has permission `600`.
- The GitHub secret contains the complete private key, including its begin and end lines.
- The DreamHost user has Shell/SSH access.

### `Host key verification failed`

Regenerate the host entries using the same hostname stored in `DREAMHOST_HOST`:

```bash
ssh-keyscan -H ps123456.dreamhostps.com
```

Replace `DREAMHOST_KNOWN_HOSTS` with the complete output. Do not disable strict host-key checking as a workaround.

### The homepage works, but direct routes return 404

Confirm:

- `public/.htaccess` exists in the repository.
- `dist/.htaccess` exists after building.
- The deployed web directory contains `.htaccess` beside `index.html`.
- DreamHost Apache is serving the directory configured in `DREAMHOST_PATH`.

### The site loads without CSS or assets

Check that:

- The **contents** of `dist/` were uploaded to the web root.
- `index.html` is directly inside the subdomain directory.
- The Vite base path remains `/` when deploying at the root of a dedicated subdomain.
- The site was not accidentally deployed under `dev.villasplayasamara.com/dist/`.

### `npm ci` fails in GitHub Actions

Check that:

- `package-lock.json` is committed.
- `package.json` and `package-lock.json` agree.
- The project builds locally with `npm ci && npm run build`.
- Required build-time environment variables are configured in GitHub.

### `rsync` reports a missing destination

Check the exact `DREAMHOST_PATH` value using `pwd` while logged in as the same deployment user. The dedicated user must also have permission to write to that directory.

### HTTPS certificate cannot be installed yet

Wait for DNS propagation and confirm that the subdomain resolves to DreamHost. A temporary DNS delay is not a GitHub Actions failure.

## 21. Recommended production evolution

For the current review stage, this is reasonable:

```text
main
  ↓
dev.villasplayasamara.com
```

Near launch, move to separate branches and environments:

```text
develop
  ↓
dev.villasplayasamara.com

main
  ↓
villasplayasamara.com
```

Recommended GitHub environments:

```text
development
production
```

Each environment should use:

- A separate DreamHost directory
- Separate deployment credentials when possible
- Environment-specific GitHub secrets
- Optional approval protection for production

The production website can also be placed in a separate DreamHost directory from the existing WordPress installation. At launch, change the main domain's assigned web directory to the new Vite directory. This preserves the WordPress directory for a quick rollback.

## 22. Security and operational notes

- Never store private API keys in `VITE_*` variables. Vite bundles those values into browser-accessible JavaScript.
- Use a backend or serverless function for email credentials, private booking API keys, payment secrets, and administrative tokens.
- Do not deploy the Git repository, source files, SSH keys, or `.env` files to the public web directory.
- Keep the dev site out of production search results if it becomes publicly accessible. Consider HTTP authentication or at least a `noindex` directive while it is a review environment.
- Review the deployment logs after changes to the workflow or server directory.
- Keep the current WordPress website intact until the Vite version is approved and tested.

## Final recommended setup

```text
Standalone Vite frontend
+ DreamHost Apache static hosting
+ Dedicated dev subdomain
+ Dedicated DreamHost Shell user
+ Dedicated SSH deployment key
+ Apache .htaccess SPA fallback
+ GitHub Actions build
+ SSH/rsync deployment
+ Verified destination before enabling --delete
```

This provides a Vercel-like automatic deployment flow while keeping the site on the existing DreamHost VPS and isolated from the WordPress installations.

