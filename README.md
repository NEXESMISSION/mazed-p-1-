# Ardhi Property Landing Page

This is a React-based landing page for Ardhi Property, built with React, TypeScript, and TailwindCSS.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Form submission to Google Sheets
- Client-side validation
- Success and error notifications
- Centered alert modals with blur background
- Manual alert dismissal (no auto-dismiss)

## Setup Instructions

See [INSTALLATION.md](./INSTALLATION.md) for setup instructions.

## Google Sheets Integration

This website includes integration with Google Sheets via Google Apps Script. The form data is submitted to a Google Sheet.

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions on setting up the Google Sheets API integration.

### Quick Google Sheets Setup:

1. Create a new Google Sheet
2. Go to Extensions > Apps Script
3. Copy and paste the Google Apps Script code from the `google-apps-script.js` file
4. Deploy the script as a web app:
   - Click "Deploy" > "New deployment"
   - Select "Web app" as deployment type
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone" (for testing) or "Anyone with Google Account" (for production)
   - Click "Deploy"
5. Copy the web app URL and update the `scriptURL` in the `ClientForm.tsx` file

## Static Site Deployment

### Building the Project

To create a production build of the website:

```bash
npm run build
```

This will create a `build` directory with the compiled static assets.

### Deployment Options

You can deploy this static site to various hosting services:

1. **GitHub Pages**
   - The repository is already set up for easy deployment
   - The static build files in the `build` directory can be deployed directly

2. **Cloudflare Pages**
   - Connect your GitHub repository in the Cloudflare dashboard
   - Use `npm run build` as the build command
   - Set `build` as the output directory

3. **Netlify/Vercel**
   - Connect to the GitHub repository
   - Use the same build settings as above

## Recent Changes

### Alert System Improvements

- Alerts are now centered on both mobile and desktop screens
- Added background blur effect when alerts appear
- Alerts require manual closing (no auto-dismiss)


