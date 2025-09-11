# How to Use Your ARDHI Property Website

## Website Overview

Your ARDHI Property website is now complete and connected to your Google Sheet for form submissions! Here's a quick guide on how to use and maintain your website.

## Running Your Website

### Development Mode

To run the website in development mode for testing:

1. Open your terminal/command prompt
2. Navigate to your project directory: `cd C:\Users\saif\Desktop\ardi`
3. Run: `npm start`
4. Your website will open automatically in your browser at [http://localhost:3000](http://localhost:3000)

### Production Build

When you're ready to deploy your website:

1. Run: `npm run build`
2. The production files will be in the `build` directory

## Google Sheets Integration Status

✅ **Connected to Google Sheet**
- Script URL: https://script.google.com/macros/s/AKfycbwoGTigOp6NDSwYhnNvLA9aO5b_VFYXNVp_uosD3YRpNCmcNDvMyL9zrvoghs7vRE_TFg/exec
- Deployment ID: AKfycbwoGTigOp6NDSwYhnNvLA9aO5b_VFYXNVp_uosD3YRpNCmcNDvMyL9zrvoghs7vRE_TFg

## Form Submission Process

When a visitor submits the form:

1. They fill in their name, email, phone number, and address
2. When they click "Acheter Maintenant", the form data is sent to your Google Sheet
3. The data appears as a new row in your Google Sheet
4. The visitor sees a success message

## Customizing Your Website

### Changing Content

To change text, images, or other content:

1. Open the relevant file in the `src/components` directory
2. Make your changes (text is mostly in French as per the original design)
3. Save the file
4. If the development server is running, changes will appear automatically

### Key Files for Customization

- `src/components/ProductDetails.tsx` - Property details, price, features
- `src/components/ProductDescription.tsx` - Property description, benefits
- `src/components/ClientForm.tsx` - The form component
- `src/App.tsx` - Main layout and image URLs

### Changing Images

To change the property images:

1. Upload your images to an image hosting service
2. Get the URLs of the uploaded images
3. Update the image URLs in `src/App.tsx`

## Managing Form Submissions

### Viewing Submissions

1. Open your Google Sheet
2. All form submissions will appear as new rows
3. Each submission includes:
   - Timestamp
   - Name
   - Email
   - Phone
   - Address

### Setting Up Email Notifications (Optional)

To receive email notifications for new submissions:

1. Open your Google Apps Script (Extensions > Apps Script in your Google Sheet)
2. Add the email notification function from the `GOOGLE_SHEETS_SETUP.md` file
3. Save and redeploy your script

## Troubleshooting

### Form Submission Issues

If form submissions aren't working:

1. Check your browser console for errors
2. Verify that your Google Apps Script URL is correct in `ClientForm.tsx`
3. Ensure your Google Sheet and Apps Script permissions are set correctly
4. Try using the troubleshooting steps in `GOOGLE_SHEETS_SETUP.md`

### Website Display Issues

For display issues:

1. Test on different browsers and devices
2. Check the browser console for errors
3. Ensure all dependencies are installed correctly

## Need More Help?

Refer to these files for more detailed information:

- `INSTALLATION.md` - Complete installation instructions
- `GOOGLE_SHEETS_SETUP.md` - Detailed Google Sheets integration guide
- `README.md` - Project overview and basic setup
