# Deploying to Cloudflare Pages

This guide will walk you through deploying the MAZED Apartments website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Access to the GitHub repository: https://github.com/NEXESMISSION/mazed-p-1-.git

## Deployment Steps

### 1. Log in to Cloudflare Dashboard

- Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
- Log in with your credentials

### 2. Navigate to Pages

- From the sidebar, click on **Pages**
- Click **Create a project** > **Connect to Git**

### 3. Connect to GitHub Repository

- Select GitHub as your Git provider and authenticate if necessary
- Find and select the repository: `NEXESMISSION/mazed-p-1-`
- Click **Begin setup**

### 4. Configure Build Settings

- **Project name**: `mazed-apartments` (or your preferred name)
- **Production branch**: `master`
- **Framework preset**: Select `Create React App`
- **Build command**: `npm run build`
- **Build output directory**: `build`
- **Environment variables**: (Leave empty for now, add any if needed later)

### 5. Advanced Settings

- Expand **Advanced build settings**
- **Node.js version**: Set to `16.x` or latest LTS

### 6. Deploy

- Click **Save and Deploy**
- Wait for the build and deployment to complete

### 7. Verify Deployment

- Once deployment is successful, Cloudflare will provide a URL to access your site
- The URL will be in the format: `https://your-project-name.pages.dev`

## Custom Domain (Optional)

If you want to use a custom domain:

1. From your Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name and follow the instructions

## Troubleshooting

If you encounter any issues during deployment:

- Check the build logs for errors
- Ensure all environment variables are correctly set
- Verify that your repository has the necessary files (`wrangler.toml`, `_redirects`, etc.)

## Important Notes

- The site is configured to use Cloudflare Pages, not Workers
- The `wrangler.toml` file specifies the build settings
- The `_redirects` file ensures proper routing for the single-page application
- Any changes pushed to the `master` branch will trigger automatic redeployment

For more information, refer to the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages).
