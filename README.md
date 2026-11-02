# Angular Material Lab

A responsive component showcase built with the **official Angular Material** package (`@angular/material`), not a CSS imitation.

## GitHub Pages

GitHub Actions builds and deploys this project whenever changes are pushed to `main`.

Site: https://bradleysouciercomputer.github.io/angular-material/

The workflow builds Angular with the `/angular-material/` base path and publishes the generated `dist/angular-material-lab/browser/` folder. No manual build or upload is needed after you push changes.

## Run locally

Requirements: Node.js 22.12+ (or 20.19+ / 24.x).

Install dependencies and start the development server:

    npm install
    npm start

Open http://localhost:4200/.

Create a production build:

    npm run build

## Components demonstrated

Buttons, icon buttons, floating action button, chips, badges, form fields, select, date picker, checkboxes, slide toggles, data table, tabs, progress bar, expansion panel, dialog, snackbar, tooltips, menus, and notifications.

The visual theme uses Angular Material's official `azure-blue` prebuilt theme. Roboto and Material Symbols are loaded from Google Fonts.
