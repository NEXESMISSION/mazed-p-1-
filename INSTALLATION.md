# ARDHI Property Website - Installation Guide

This guide will help you set up and run the ARDHI Property website on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation Steps

1. **Install Dependencies**

   Open a command prompt or terminal in the project directory and run:

   ```
   npm install
   ```

   Or if you're using Yarn:

   ```
   yarn install
   ```

   This will install all the necessary dependencies defined in the `package.json` file.

2. **Configure Google Sheets Integration**

   Follow the instructions in the `GOOGLE_SHEETS_SETUP.md` file to set up the Google Sheets integration.

   After completing the Google Sheets setup, update the Google Script URL in the `src/components/ClientForm.tsx` file:

   ```javascript
   const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL'; // Replace with your actual URL
   ```

3. **Start the Development Server**

   Run the following command to start the development server:

   ```
   npm start
   ```

   Or with Yarn:

   ```
   yarn start
   ```

   This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build of the website:

```
npm run build
```

Or with Yarn:

```
yarn build
```

This will create an optimized production build in the `build` folder that you can deploy to a web server.

## Deployment

After building the project, you can deploy it to various hosting platforms:

### Option 1: Deploy to Netlify

1. Create an account on [Netlify](https://www.netlify.com/) if you don't have one
2. From the Netlify dashboard, click "New site from Git"
3. Connect to your Git repository or drag and drop the `build` folder
4. Configure your deployment settings and click "Deploy site"

### Option 2: Deploy to Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Install Vercel CLI: `npm install -g vercel`
3. Run `vercel` in the project directory and follow the prompts

### Option 3: Deploy to GitHub Pages

1. Install the GitHub Pages package: `npm install --save gh-pages`
2. Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run `npm run deploy`

## Troubleshooting

### Common Issues:

1. **Node.js Version Mismatch**
   
   If you encounter errors related to Node.js versions, make sure you're using a compatible version (14.x or higher).

2. **Port Already in Use**

   If port 3000 is already in use, you can:
   - Close the application using that port
   - Use a different port: `PORT=3001 npm start`

3. **CORS Issues with Google Sheets Integration**

   If you're having CORS issues with the Google Sheets integration:
   - Make sure your Google Apps Script deployment settings are correct
   - Consider using a CORS proxy for development
   - See the GOOGLE_SHEETS_SETUP.md file for detailed guidance

For any other issues, please refer to the React documentation or create an issue in the project repository.
