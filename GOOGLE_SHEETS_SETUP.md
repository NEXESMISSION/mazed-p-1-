# Google Sheets Integration Guide

This guide will walk you through setting up the Google Sheets integration for the ARDHI Property website form.

## Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet (e.g., "ARDHI Property Form Responses")
3. Rename the first sheet to "Form Responses"

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. This will open the Apps Script editor in a new tab
3. Delete any code in the editor and paste the entire content from the `google-apps-script.js` file
4. Update the `SPREADSHEET_ID` variable with your Google Sheet ID:
   - Your Sheet ID can be found in the URL of your Google Sheet:
   - `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit`
5. Save the project (Ctrl+S or File > Save) and give it a name (e.g., "ARDHI Form Handler")

## Step 3: Deploy the Web App

1. Click on "Deploy" > "New deployment"
2. For "Select type", choose "Web app"
3. Configure the deployment:
   - Description: "ARDHI Form Handler v1"
   - Execute as: "Me" (your Google account)
   - Who has access: "Anyone" (for testing) or "Anyone with Google Account" (for production)
4. Click "Deploy"
5. Authorize the application when prompted
6. Copy the "Web app URL" that is provided after deployment

## Step 4: Update Your React Application

1. Open the file: `src/components/ClientForm.tsx`
2. Find this line: `const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';`
3. Replace `'YOUR_GOOGLE_SCRIPT_URL'` with the Web app URL you copied, for example:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec';
   ```

## Step 5: Test the Integration

1. Start your React application using `npm start`
2. Fill out the form and submit it
3. Check your Google Sheet to verify that the data was received

## Troubleshooting

### CORS Issues

If you encounter CORS errors, you have a few options:

1. **For Development**: Use a CORS proxy or browser extension that disables CORS
2. **For Production**: Consider using a serverless function (e.g., AWS Lambda, Vercel Functions) as a proxy

### Authorization Issues

If the form submission fails due to authorization:

1. Make sure the Apps Script is deployed as "Anyone" or "Anyone with Google Account"
2. Check if you need to re-authorize the Apps Script

## Advanced Setup (Optional)

### Add Data Validation

You can add data validation in the Google Sheet:

1. In your sheet, select columns where you want validation
2. Go to Data > Data Validation
3. Set up rules (e.g., email format for the email column)

### Set Up Email Notifications

To receive email notifications for new submissions:

1. Add this code to your Google Apps Script:

```javascript
function sendEmailNotification(data) {
  const recipientEmail = 'your-email@example.com';
  const subject = 'New ARDHI Property Form Submission';
  const body = 
    `New form submission received:\n\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `Address: ${data.address}\n\n` +
    `Timestamp: ${new Date().toString()}`;
  
  MailApp.sendEmail(recipientEmail, subject, body);
}
```

2. Call this function in your `doPost` function before returning the success response:

```javascript
// Add this after appending the row
sendEmailNotification(data);
```
