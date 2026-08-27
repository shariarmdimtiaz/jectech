# JEC Technologies Website

A responsive technology and managed-services company website built with React, Next.js-compatible routing, and Vinext. The site includes Home, About, Services, Projects, Team, and Contact sections.

## Live website

[View the deployed website](https://jec-technologies.h4techdev.chatgpt.site)

## Requirements

- Node.js 22.13.0 or newer
- npm

Check your installed versions:

```powershell
node --version
npm --version
```

## Install the project

Open PowerShell or a terminal, then run:

```powershell
cd D:\Projects\HM
npm install
```

If you are installing from the committed lockfile in a fresh copy of the project, you can use `npm ci` instead of `npm install`.

## Run locally

Start the development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to the source files will appear automatically while the server is running.

Press `Ctrl+C` in the terminal to stop the server.

## Create and run a production build

```powershell
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Check the code

Run the linter before publishing changes:

```powershell
npm run lint
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Page content, navigation, section data, and interactions |
| `app/globals.css` | Global styling, responsive layouts, and the hero background |
| `app/layout.tsx` | Site metadata and shared page layout |
| `public/` | Hero artwork, social preview, favicon, and team images |
| `vite.config.ts` | Vinext/Vite build configuration |
| `.openai/hosting.json` | OpenAI Sites hosting configuration |

## Common customizations

- **Navigation:** Edit `navItems` in `app/page.tsx`.
- **Hero content:** Edit the first `<section>` in `app/page.tsx`.
- **Hero background:** Replace `public/hero-orbital-v2.png` or update the `.hero` rule in `app/globals.css`.
- **Services, projects, and team members:** Edit the matching data arrays near the top of `app/page.tsx`.
- **Colors:** Update the CSS variables at the top of `app/globals.css`, especially `--accent` and `--accent-dark`.
- **Contact details:** Edit the Contact section in `app/page.tsx`.
- **SEO and social sharing:** Edit the metadata in `app/layout.tsx` and replace `public/og.png` if needed.

## Contact form note

The current contact form is a front-end demonstration. Submitting it clears the fields and displays a success message, but it does not send an email or save the message.

To receive real enquiries, connect the form to a server-side endpoint or a form service. Keep API keys and other secrets on the server—never place them directly in browser code.

## Deployment

The project is configured for OpenAI Sites through `.openai/hosting.json`. After changing website code:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Review the website locally.
4. Publish the validated version through the OpenAI Sites workflow.

Documentation-only edits, such as changes to this README, do not require a new website deployment.

## Troubleshooting

### The development server does not start

- Confirm that Node.js 22.13.0 or newer is installed.
- Run `npm install` to restore missing dependencies.
- If port 3000 is already in use, close the other development server and run `npm run dev` again.

### The contact form does not send an email

This is expected until a form backend or email service is connected. See the **Contact form note** above.
