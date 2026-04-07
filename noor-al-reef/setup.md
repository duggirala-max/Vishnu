# GoDaddy Deployment Setup & Optimization Guide

This repository has been configured to automatically build and deploy your React (Vite) application directly to GoDaddy Web Hosting using **GitHub Actions**.

## Why GitHub Actions?
Your website is built using React. This modern framework requires the raw `.tsx` files to be "compiled" into standard HTML, CSS, and JS before a browser can load them. Traditional GoDaddy cPanel does not do this easily. By using GitHub Actions, GitHub’s secure servers will automatically compile the code for you and upload *only* the finished, ready-to-browse files to GoDaddy.

---

## Step 1: Update GoDaddy DNS Records
Currently, your domain (`nooralreef.com`) is pointing to a basic "WebsiteBuilder Site". We must point the domain to your actual GoDaddy cPanel web hosting.

1. Log into your GoDaddy account and go to the **DNS Management** page for `nooralreef.com`.
2. Locate the **A Record** (Name: `@`).
3. Change the **Value** from `WebsiteBuilder Site` to the **IP Address** of your GoDaddy cPanel Hosting.
   - *You can find this IP address by logging into your GoDaddy cPanel dashboard; it is usually listed on the right sidebar under "Shared IP Address".*
4. Leave your `MX` (Zoho) and `TXT` records untouched, so your professional email continues functioning correctly.

## Step 2: Create FTP Account in GoDaddy
We need an FTP credential so GitHub can upload the files to your server automatically.

1. Open your GoDaddy **cPanel**.
2. Search for and click on **FTP Accounts**.
3. Create a new account with the following:
   - **Log in**: `github`
   - **Domain**: `nooralreef.com`
   - **Password**: Create a very strong password.
   - **Directory**: Select the root folder for your website (typically `public_html`).
4. Click **Create FTP Account** and save the Username and Password securely.

## Step 3: Add Secrets to GitHub
Our automated deployment script requires these credentials. It is extremely insecure to type them directly into the code. We will use GitHub Secrets.

1. Go to this repository on GitHub: `https://github.com/duggirala-max/Vishnu`
2. Click **Settings** (Top right tab of the repository).
3. On the left sidebar, scroll down to **Secrets and variables** and click **Actions**.
4. Click **New repository secret**.
5. Add the following three secrets exactly as named:
   - Name: `FTP_SERVER`, Secret: `ftp.nooralreef.com` (or your cPanel Shared IP Address).
   - Name: `FTP_USERNAME`, Secret: `[The exact FTP username you created in Step 2, e.g., github@nooralreef.com]`
   - Name: `FTP_PASSWORD`, Secret: `[The strong password you created]`

## Step 4: How to Deploy Updates
It’s already set up! 
The deployment script is located at `.github/workflows/deploy.yml`.

From now on, whenever you execute:
```bash
git add .
git commit -m "Update website text"
git push origin main
```
GitHub will automatically run the Action, build your Vite code, and securely push it to `public_html` on GoDaddy. Your live website will automatically reflect your new updates within roughly 2 minutes.
