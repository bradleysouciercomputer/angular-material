# Angular Material Lab

A responsive component showcase built with the **official Angular Material** package (`@angular/material`), not a CSS imitation.

## GitHub Pages

This repository is configured to build and deploy to GitHub Pages automatically whenever changes are pushed to `main`.

After the first successful workflow run, the site is available at:

https://bradleysouciercomputer.github.io/angular-material/

The workflow builds Angular with the `/angular-material/` base path and publishes the generated `dist/angular-material-showcase/browser/` folder.

## Run locally

Requirements: Node.js 22.12+ (or 20.19+ / 24.x).

```bash
npm install
npm start
```

Open http://localhost:4200/.

To create a production build:

```bash
npm run build
```

## Components demonstrated

Buttons, icon buttons, FABs, chips, badges, form fields, selects, date picker, checkboxes, slide toggles, data table, tabs, progress bar, expansion panel, menus, dialog, snackbar, tooltips, sidenav, and toolbar.

The visual theme uses Angular Material's official `azure-blue` prebuilt theme. Roboto and Material Symbols are loaded from Google Fonts.