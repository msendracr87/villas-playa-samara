# Villas Playa Sámara
## DreamHost + GitHub Actions Deployment Brief

**Project:** Villas Playa Sámara website  
**Repository:** [msendracr87/villas-playa-samara](https://github.com/msendracr87/villas-playa-samara)  
**Development URL:** `https://dev.villasplayasamara.com`  
**Prepared:** September 2026

## 1. Purpose

This document explains the proposed deployment approach and identifies the actions required in the DreamHost dashboard before GitHub Actions can automatically publish the website to the development subdomain.

It is intended to give stakeholders a clear view of:

- What the deployment system does
- What must be configured in DreamHost
- What access the primary DreamHost account owner must provide
- What information is still required before automation can be completed
- How the development website will be updated and tested

## 2. Proposed approach

The website is a standalone React + TypeScript + Vite frontend. GitHub Actions will build the website whenever approved code is pushed to GitHub and then upload the resulting static files to DreamHost over a secure SSH connection.

```text
Developer changes code
        ↓
GitHub repository
        ↓ push to main
GitHub Actions
  npm ci
  npm run build
        ↓
Generated dist/ files
        ↓ SSH + rsync
DreamHost development directory
        ↓
dev.villasplayasamara.com
```

The deployed website is static after it is built. DreamHost only needs to serve the generated HTML, CSS, JavaScript, images, and related assets through Apache.

## 3. Technologies involved

| Component | Responsibility |
|---|---|
| React | User interface and page components |
| TypeScript | Type-safe application code |
| Vite | Local development server and production build tool |
| GitHub | Source-code repository and version history |
| GitHub Actions | Automated build and deployment workflow |
| SSH | Secure authentication between GitHub Actions and DreamHost |
| `rsync` | Transfers the generated website files |
| DreamHost Apache | Serves the website publicly |
| `.htaccess` | Allows direct navigation to React routes |

PHP, MySQL, Laravel, WordPress, Node.js, PM2, Express, Passenger, and `vite preview` are not required for the current public-facing frontend deployment.

DreamHost supporting PHP and MySQL does not mean those technologies must be added to this website. They would become relevant later if the project needs a database-backed administration system, custom booking functionality, user accounts, forms processed securely on the server, or a Laravel API.

## 4. Current DreamHost situation

The development subdomain and its website user have already been created:

```text
Subdomain:       dev.villasplayasamara.com
SSH/Shell user:  vpsamara_dev
Hosting target:  DreamHost VPS
```

The current blockage is delegated panel access. The `vpsamara_dev` user exists and is associated with the development subdomain, but it does not appear in the delegated DreamHost panel account used for administration.

This means the primary DreamHost account owner must update the delegated permissions assigned to the developer’s panel email. Panel access and SSH access are separate:

```text
DreamHost panel account
→ controls what is visible in the dashboard

vpsamara_dev Shell user
→ authenticates SSH and owns the website files
```

The owner does not need to recreate the subdomain or SSH user.

## 5. Actions required from the primary DreamHost account owner

### 5.1 Update delegated access

Log in to the primary DreamHost account and open:

```text
Billing & Account
→ Account Access
```

Find the delegated account associated with the developer’s email address and update its permissions so the developer can manage:

```text
Domain:          dev.villasplayasamara.com
Website user:    vpsamara_dev
Relevant access: Users, if shown as a general privilege
```

DreamHost may present permissions by domain, website user, or a broader `Users` privilege depending on the current panel interface. The objective is for the delegated account to see and manage the already-created `vpsamara_dev` user without granting unnecessary access to unrelated domains, billing, email, or databases.

Official references:

- [DreamHost account privileges overview](https://help.dreamhost.com/hc/en-us/articles/215413677-Account-privileges-overview)
- [DreamHost: Add or remove account privileges](https://help.dreamhost.com/hc/en-us/articles/214694248-Add-or-remove-account-privileges)
- [DreamHost: Allowing developer access](https://help.dreamhost.com/hc/en-us/articles/360021977271-Allowing-developer-access-to-your-site)

If the existing delegated account cannot be edited, the owner should record its current permissions before revoking and re-adding the delegated access with the required domain and user permissions. Revoking delegated panel access does not delete the website, SSH user, or website files, but the existing permissions should still be documented first.

### 5.2 Confirm the website-user configuration

Open:

```text
Websites
→ SFTP Users & Files
```

Confirm that `vpsamara_dev` has:

```text
Secure Shell Access: Enabled
Shell:              Bash
Server:             The VPS hosting the website
Website ownership:  dev.villasplayasamara.com
```

Only a Shell user can run the Unix commands required for SSH-based deployment. SFTP-only access is not sufficient for the planned workflow.

Official reference:

- [DreamHost: Creating a user with Shell/SSH access](https://help.dreamhost.com/hc/en-us/articles/216385837-Creating-a-user-with-Shell-SSH-access)

### 5.3 Confirm the web-directory path

Open the website’s management or login information and confirm the web directory assigned to the subdomain. The exact path must be recorded for the GitHub Actions secret named `DREAMHOST_PATH`.

The expected structure will be similar to:

```text
/home/vpsamara_dev/dev.villasplayasamara.com/
```

This is an example format, not a value to assume. The final path must be confirmed through DreamHost or an SSH session.

### 5.4 Confirm the DreamHost SSH hostname

The owner or developer must identify the hostname used to connect to the VPS. It may resemble:

```text
ps123456.dreamhostps.com
```

This is also an example. The actual hostname must be copied from DreamHost’s server information or verified by a successful SSH connection.

The final hostname becomes the GitHub Actions secret:

```text
DREAMHOST_HOST
```

Official reference:

- [DreamHost: SSH overview](https://help.dreamhost.com/hc/en-us/articles/216041267-SSH-overview)

### 5.5 Confirm DNS and add SSL

The subdomain must resolve to DreamHost before it can be tested publicly. Once DNS resolves correctly, open:

```text
Secure Certificates
→ dev.villasplayasamara.com
→ Add a free Let’s Encrypt certificate
```

The development site should ultimately be tested at:

```text
https://dev.villasplayasamara.com
```

DNS propagation can take time. A temporary DNS or certificate delay should not be confused with a GitHub Actions deployment failure.

Official references:

- [DreamHost: Adding a subdomain](https://help.dreamhost.com/hc/en-us/articles/215457827-Adding-a-subdomain)
- [DreamHost: Adding a website and hosting](https://help.dreamhost.com/hc/en-us/articles/360049378932-Adding-a-website-and-hosting)

## 6. Required information before GitHub Actions is configured

The following values must be confirmed. Placeholder values must not be used in production configuration.

| Item | Example format | Status |
|---|---|---|
| DreamHost SSH username | `vpsamara_dev` | Created; visibility/access must be confirmed |
| DreamHost SSH hostname | `ps123456.dreamhostps.com` | Must be confirmed |
| Website directory | `/home/vpsamara_dev/dev.villasplayasamara.com/` | Must be confirmed |
| SSH authentication | Dedicated deployment key | Must be created and installed |
| Public HTTPS URL | `https://dev.villasplayasamara.com` | Requires DNS and SSL confirmation |

The deployment cannot be safely finalized until the username, hostname, and exact web-directory path are verified.

## 7. SSH key and security arrangement

GitHub Actions should use a dedicated SSH key created only for this project. The private key is stored as an encrypted GitHub secret. The public key is installed for the `vpsamara_dev` Shell user on DreamHost.

```text
Private key
→ GitHub Actions secret

Public key
→ /home/vpsamara_dev/.ssh/authorized_keys
```

The normal DreamHost account password should not be placed in GitHub. The primary account password and unrelated personal SSH keys should not be used for this deployment.

The deployment key should be limited by:

- A dedicated DreamHost website/Shell user
- Access to the development website directory only
- GitHub repository secrets
- Repository permissions limited to what the workflow requires

The private key must never be committed to the repository, placed in the website directory, or shared in email or chat.

GitHub’s documentation explains how encrypted repository and environment secrets work:

- [GitHub: Using secrets in GitHub Actions](https://docs.github.com/actions/security-guides/using-secrets-in-github-actions)

## 8. GitHub Actions configuration after DreamHost approval

After DreamHost access is corrected and SSH is tested manually, the repository will contain a workflow similar to:

```text
.github/
└── workflows/
    └── deploy-dreamhost-dev.yml
```

The workflow will:

1. Check out the repository.
2. Install the Node.js dependencies with `npm ci`.
3. Build the production website with `npm run build`.
4. Confirm that `dist/index.html` exists.
5. Authenticate to DreamHost over SSH.
6. Upload the contents of `dist/` to the development website directory.

The GitHub repository will need these encrypted repository secrets:

```text
DREAMHOST_USER
DREAMHOST_HOST
DREAMHOST_PATH
DREAMHOST_SSH_KEY
DREAMHOST_KNOWN_HOSTS
```

The secrets contain deployment configuration and authentication material. They should not be written directly into the workflow file.

## 9. React routing requirement

The Vite project already uses a Netlify `_redirects` file for SPA routing. DreamHost Apache does not read that file. The repository must also include:

```text
public/.htaccess
```

Recommended contents:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On

    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    RewriteRule ^ index.html [L]
</IfModule>
```

Vite copies this file into `dist/` during the build. It allows direct visits to routes such as:

```text
/rooms-and-villas
/restaurants
/contact
```

without Apache returning a false 404 when the page is refreshed or opened directly.

## 10. Testing sequence

The implementation should be tested in this order.

### DreamHost access test

Confirm that the developer can access the relevant user in:

```text
Websites → SFTP Users & Files
```

### Manual SSH test

From the developer’s computer:

```bash
ssh vpsamara_dev@DREAMHOST_HOST
```

After logging in:

```bash
pwd
ls -la
cd dev.villasplayasamara.com
pwd
```

The final `pwd` result is used to confirm `DREAMHOST_PATH`.

### Local build test

From the project directory:

```bash
npm ci
npm run build
```

Confirm that the generated `dist/` directory includes:

```text
dist/index.html
dist/.htaccess
dist/assets/
```

### Manual file-transfer test

Before enabling automated deployment, upload the build manually:

```bash
rsync -avz \
  -e "ssh -i ./dreamhost-villas-dev" \
  dist/ \
  vpsamara_dev@DREAMHOST_HOST:/home/vpsamara_dev/dev.villasplayasamara.com/
```

The final command must use the confirmed directory path. The trailing slash after `dist/` is important because it uploads the contents of `dist/` directly into the website directory.

### Browser test

Verify:

```text
https://dev.villasplayasamara.com
```

Then test the homepage, major navigation links, images, responsive layouts, and direct loading or refreshing of internal routes.

### Automated deployment test

After the manual transfer succeeds:

1. Add the GitHub secrets.
2. Add or enable the workflow.
3. Push a test change to the configured branch.
4. Open GitHub → Actions.
5. Confirm that the build and deployment steps complete successfully.
6. Verify that the development subdomain shows the latest commit.

## 11. Important safety note about `rsync --delete`

The automated workflow may use `rsync --delete` so obsolete files are removed from the development website. This option is safe only when `DREAMHOST_PATH` is correct.

The destination must be the dedicated website directory:

```text
/home/vpsamara_dev/dev.villasplayasamara.com/
```

It must not be the entire user home directory:

```text
/home/vpsamara_dev/
```

For the first automated deployment, the `--delete` option can remain disabled until the destination is verified. Once the correct directory is confirmed, it can be enabled to keep the deployment clean.

## 12. What stakeholders should expect

Once configured, the ongoing process is simple:

```text
Code change
→ Push to GitHub
→ GitHub Actions builds the website
→ DreamHost receives the new static files
→ Development URL updates
```

This provides:

- A consistent deployment process
- A visible development URL for stakeholder feedback
- Version history through GitHub
- Reduced manual file-upload work
- Easy rollback by redeploying a previous commit
- No requirement to modify the existing WordPress websites

The development subdomain is intended to show the complete website for review. It should be protected from search indexing until it is ready for public launch, using appropriate `noindex`, `nofollow`, and `noarchive` metadata or an equivalent access-control strategy.

## 13. Future production setup

The development deployment should remain separate from the production website. When the website is approved, the preferred next step is to create a separate production deployment target:

```text
Development branch or environment
→ dev.villasplayasamara.com

Production branch or environment
→ villasplayasamara.com
```

Production should use:

- A separate DreamHost directory
- Separate SSH credentials or GitHub environment secrets
- A separate approval step
- A production-specific workflow or protected environment

This prevents an experimental development push from replacing the live website accidentally.

## 14. Responsibility checklist

### Primary DreamHost account owner

- [ ] Update delegated access for the developer’s panel email.
- [ ] Grant access to `dev.villasplayasamara.com` and `vpsamara_dev`.
- [ ] Confirm `vpsamara_dev` is a Shell user with Bash enabled.
- [ ] Confirm the subdomain is assigned to `vpsamara_dev`.
- [ ] Confirm the DreamHost SSH hostname.
- [ ] Confirm the exact web-directory path.
- [ ] Confirm DNS points the subdomain to DreamHost.
- [ ] Add or approve the Let’s Encrypt certificate after DNS resolves.

### Developer / implementation owner

- [ ] Generate a dedicated deployment SSH key.
- [ ] Install the public key for `vpsamara_dev`.
- [ ] Test SSH without using the primary DreamHost password.
- [ ] Add `public/.htaccess` to the repository.
- [ ] Run and verify the local production build.
- [ ] Test one manual `rsync` deployment.
- [ ] Add the GitHub Actions secrets.
- [ ] Add and test the workflow.
- [ ] Verify the development website and internal routes.

### Stakeholders

- [ ] Review the website at `https://dev.villasplayasamara.com`.
- [ ] Report content, design, and functionality feedback.
- [ ] Approve the development version before production deployment.

## 15. Immediate next step

The immediate blocker is not the React application or GitHub Actions. It is the delegated DreamHost panel access.

The primary account owner should update the developer’s Account Access permissions so `vpsamara_dev` and `dev.villasplayasamara.com` become visible and manageable. After that, the developer can confirm the SSH hostname and exact web-directory path, perform the manual SSH/`rsync` test, and complete the GitHub Actions configuration.

## Official documentation

- [DreamHost: Adding a subdomain](https://help.dreamhost.com/hc/en-us/articles/215457827-Adding-a-subdomain)
- [DreamHost: Adding a website and hosting](https://help.dreamhost.com/hc/en-us/articles/360049378932-Adding-a-website-and-hosting)
- [DreamHost: Creating a user with Shell/SSH access](https://help.dreamhost.com/hc/en-us/articles/216385837-Creating-a-user-with-Shell-SSH-access)
- [DreamHost: SSH overview](https://help.dreamhost.com/hc/en-us/articles/216041267-SSH-overview)
- [DreamHost: Account privileges overview](https://help.dreamhost.com/hc/en-us/articles/215413677-Account-privileges-overview)
- [DreamHost: Add or remove account privileges](https://help.dreamhost.com/hc/en-us/articles/214694248-Add-or-remove-account-privileges)
- [DreamHost: Allowing developer access](https://help.dreamhost.com/hc/en-us/articles/360021977271-Allowing-developer-access-to-your-site)
- [GitHub: Using secrets in GitHub Actions](https://docs.github.com/actions/security-guides/using-secrets-in-github-actions)

