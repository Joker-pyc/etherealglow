# Deployment Guide

This guide explains how to deploy your Next.js application using GitHub Actions to various platforms.

## Prerequisites

1. **GitHub Repository**: Your code should be pushed to a GitHub repository
2. **GitHub Actions**: Enabled in your repository settings
3. **Platform Account**: Account on your chosen deployment platform

## Deployment Options

### 1. Vercel Deployment (Recommended)

Vercel is the easiest option for Next.js applications.

#### Setup Steps:

1. **Create Vercel Account**:

   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Get Required Secrets**:

   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token and copy it
   - Go to your project → Settings → General
   - Copy your Project ID and Organization ID

3. **Add GitHub Secrets**:

   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

4. **Enable Workflow**:
   - The workflow file `.github/workflows/deploy-vercel.yml` is already created
   - Push to main/master branch to trigger deployment

### 2. Netlify Deployment

#### Setup Steps:

1. **Create Netlify Account**:

   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Get Required Secrets**:

   - Go to Netlify Dashboard → User Settings → Applications → Personal access tokens
   - Create a new token
   - Go to your site → Site settings → General → Site details
   - Copy your Site ID

3. **Add GitHub Secrets**:

   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

4. **Enable Workflow**:
   - The workflow file `.github/workflows/deploy-netlify.yml` is already created
   - Push to main/master branch to trigger deployment

### 3. GitHub Pages Deployment

#### Setup Steps:

1. **Enable GitHub Pages**:

   - Go to your GitHub repository → Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Enable Workflow**:
   - The workflow file `.github/workflows/deploy-github-pages.yml` is already created
   - Push to main/master branch to trigger deployment

## Workflow Files Created

The following GitHub Actions workflow files have been created:

- `.github/workflows/deploy-vercel.yml` - Deploys to Vercel
- `.github/workflows/deploy-netlify.yml` - Deploys to Netlify
- `.github/workflows/deploy-github-pages.yml` - Deploys to GitHub Pages

## Configuration Changes Made

- Updated `next.config.mjs` to support static export
- Added `output: 'export'` for static site generation
- Added `trailingSlash: true` for better compatibility
- Set `distDir: 'out'` for the build output directory

## Manual Deployment Commands

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# The built files will be in the 'out' directory
# Upload the 'out' directory to your hosting provider
```

## Troubleshooting

### Common Issues:

1. **Build Failures**: Check that all dependencies are properly installed
2. **Secret Issues**: Ensure all required secrets are added to GitHub repository
3. **Permission Issues**: Make sure GitHub Actions has the necessary permissions

### Getting Help:

- Check the Actions tab in your GitHub repository for detailed logs
- Review the specific platform documentation for additional setup steps
- Ensure your Next.js application builds successfully locally with `npm run build`

## Next Steps

1. Choose your preferred deployment platform
2. Set up the required secrets
3. Push your code to trigger the deployment
4. Monitor the Actions tab for deployment status

Your application will be automatically deployed whenever you push changes to the main/master branch!


