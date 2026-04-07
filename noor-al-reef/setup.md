# Netlify Deployment & Zoho Email Safety Guide

This repository is optimized for hosting on **Netlify**. This modern approach ensures your professional React website is automatically built and deployed, while your **Zoho Email remains safe at GoDaddy**.

---

## 🛡️ Step 1: The "Email Safety" Guard (GoDaddy DNS)
To ensure your emails never stop, do **NOT** change your "Name Servers" at GoDaddy. We will only update the **A Record**.

1. Log into your **GoDaddy DNS Management** for `nooralreef.com`.
2. **Leave these records EXACTLY as they are:**
   - **MX Records**: `mx.zoho.in`, `mx2.zoho.in`, `mx3.zoho.in` (This is your email).
   - **TXT Records**: Any record starting with `v=spf1` or `zoho-verification`.
   - **CNAME Records**: `zb47457448` pointing to `zmverify.zoho.in`.
3. **Change only the A Record:**
   - Locate the **A Record** (Name: `@`).
   - Once you have your **Netlify IP Address** (from Step 3), replace `WebsiteBuilder Site` with that IP.

---

## 🚀 Step 2: Connect to Netlify
Netlify will automatically build your site whenever you push to GitHub.

1. Log into your [Netlify Dashboard](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize access to your repository: `duggirala-max/Vishnu`.
4. **Site Settings (CRITICAL):**
   - **Base directory**: `noor-al-reef`
   - **Build command**: `npm run build`
   - **Publish directory**: `noor-al-reef/dist`
5. Click **Deploy site**.

---

## 🌐 Step 3: Connect Your Domain
1. In Netlify, go to **Site configuration** > **Domain management**.
2. Click **Add custom domain** and enter `nooralreef.com`.
3. Netlify will ask if you want to use "Netlify DNS". **Choose "No, I will use my existing DNS provider"** (to keep GoDaddy as the email boss).
4. Netlify will provide an **IP Address** (usually `75.2.60.5` or similar).
5. Copy this IP and paste it into the **GoDaddy A Record** (from Step 1).

---

## 🔄 How to Update Your Website
It’s now fully automated! 
Whenever you want to update your live website, simply push your changes to GitHub:

```bash
git add .
git commit -m "Update website content"
git push origin main
```
Netlify will immediately see the push, build the new code, and update your site in about 1 minute. **Your emails will continue to work perfectly at GoDaddy throughout this process.**
