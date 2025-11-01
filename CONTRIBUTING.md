# Contributing to shadcn-classless

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated releases and changelog generation.

### Format

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature (triggers MINOR version bump)
- **fix**: A bug fix (triggers PATCH version bump)
- **perf**: Performance improvement (triggers PATCH version bump)
- **refactor**: Code refactoring (triggers PATCH version bump)
- **docs**: Documentation changes only (NO release)
- **style**: Code formatting, missing semicolons, etc. (NO release)
- **test**: Adding or updating tests (NO release)
- **chore**: Maintenance tasks, dependency updates (NO release)
- **ci**: CI/CD configuration changes (NO release)

### Breaking Changes

To indicate a breaking change, add `BREAKING CHANGE:` in the commit body or footer:

```bash
feat: redesign button API

BREAKING CHANGE: removed .btn class, now uses semantic <button> element
```

This triggers a MAJOR version bump (1.0.0 → 2.0.0).

### Examples

```bash
# Good commits
feat: add tooltip component
fix: correct dark mode colors for buttons
perf: optimize CSS selector specificity
docs: update installation instructions
refactor: simplify form input styles

# Bad commits (avoid these)
Updated stuff
Fixed things
WIP
asdf
```

## Development Workflow

### 1. Make Changes

Edit `css/shadcn-classless.css` (the source file).

### 2. Test Locally

Open `index.html` in your browser to see changes. The demo loads the unminified CSS directly.

### 3. Commit with Conventional Format

```bash
git add css/shadcn-classless.css
git commit -m "feat: add new card variant"
```

### 4. Push to Main

```bash
git push origin main
```

### 5. Automated Process

After pushing:

1. **Minification** (`.github/workflows/minify.yml`):
   - Detects changes to `css/shadcn-classless.css`
   - Minifies and outputs to `dist/shadcn-classless.css`
   - Bot commits with message "bot: Update minified CSS [skip ci]"

2. **Release** (`.github/workflows/release.yml`):
   - Analyzes commit messages since last release
   - If releasable commits found (feat, fix, perf, refactor):
     - Determines version bump based on commit types
     - Generates `CHANGELOG.md`
     - Creates Git tag (e.g., `v1.2.0`)
     - Creates GitHub Release with CSS files attached
   - Bot commits include `[skip ci]` to prevent loops

## What Gets Released?

| Commit Type | Version Bump | Example |
|-------------|--------------|---------|
| `feat:` | MINOR | 1.0.0 → 1.1.0 |
| `fix:` | PATCH | 1.0.0 → 1.0.1 |
| `perf:` | PATCH | 1.0.0 → 1.0.1 |
| `refactor:` | PATCH | 1.0.0 → 1.0.1 |
| `BREAKING CHANGE:` | MAJOR | 1.0.0 → 2.0.0 |
| `docs:`, `style:`, `chore:`, etc. | NONE | No release |

## CDN Usage

After a release is created, users can reference specific versions:

```html
<!-- Always latest (main branch) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fordus/shadcn-classless@main/dist/shadcn-classless.css">

<!-- Specific version (recommended) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fordus/shadcn-classless@v1.2.0/dist/shadcn-classless.css">

<!-- Latest v1.x.x -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fordus/shadcn-classless@v1/dist/shadcn-classless.css">
```

## Questions?

Open an issue or discussion on GitHub!
