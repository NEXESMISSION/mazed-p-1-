# ARDHI Property Website

This is a React-based website for ARDHI Premium Property with a form that submits data to Google Sheets.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. To build for production:
   ```
   npm run build
   ```

## Google Sheets Integration

This website includes integration with Google Sheets via Google Apps Script. The form data is submitted to a Google Sheet.

### Setup Google Sheets:

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

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Form submission to Google Sheets
- Client-side validation
- Success and error notifications
