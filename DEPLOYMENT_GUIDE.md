# KAAI Website - Deployment Guide

Quick guide to deploy your modernized KAAI website to various hosting platforms.

---

## 🚀 Option 1: GitHub Pages (✨ RECOMMENDED - Easiest & Free)

### Prerequisites
- GitHub account
- Git installed locally
- Repository already pushed to GitHub

### Quick Setup (2 Minutes!)

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (left sidebar)
   - Under "Build and deployment" → **Source**: Select **"GitHub Actions"**
   - That's it! (Auto-saves)

2. **Push Latest Changes**
   ```bash
   git add -A
   git commit -m "Deploy with GitHub Pages"
   git push origin main
   ```

3. **Watch It Deploy**
   - Go to **Actions** tab
   - See "Deploy to GitHub Pages" running
   - Wait ~30 seconds
   - ✅ Done!

4. **Your Site is Live!**
   - Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

4. **Add Custom Domain** (Optional)
   - In GitHub Pages settings, add your domain: `www.keralaaiacademy.com`
   - Add DNS records at your domain registrar:
     ```
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```
   - Wait for DNS propagation (5-30 minutes)

### ✅ That's it! Your site is live.

---

## 🌐 Option 2: Netlify (Free with extras)

### Via Netlify Dashboard (Easiest)

1. **Go to [Netlify](https://netlify.com)**
2. Sign up/login
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub and select your repository
5. **Build settings**:
   - Build command: *(leave empty)*
   - Publish directory: `/`
6. Click **"Deploy site"**

### Custom Domain
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `www.keralaaiacademy.com`
4. Follow DNS instructions provided by Netlify

### Benefits
- ✅ Automatic HTTPS
- ✅ Continuous deployment (updates automatically on git push)
- ✅ Form handling (if you add forms later)
- ✅ Free CDN
- ✅ Branch previews

---

## ☁️ Option 3: Azure Static Web Apps

### Prerequisites
- Azure account (free tier available)
- GitHub repository

### Steps

1. **Create Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click **"Create a resource"**
   - Search for **"Static Web Apps"**
   - Click **"Create"**

2. **Configure**
   - Subscription: Choose your subscription
   - Resource Group: Create new or select existing
   - Name: `kaai-website`
   - Region: Choose closest to Kerala (e.g., Southeast Asia)
   - Source: **GitHub**
   - Sign in and authorize Azure

3. **Repository Details**
   - Organization: Your GitHub username
   - Repository: `kaai-website`
   - Branch: `main`

4. **Build Details**
   - Build Presets: **Custom**
   - App location: `/`
   - Api location: *(leave empty)*
   - Output location: *(leave empty)*

5. **Review + Create**
   - Click **"Create"**
   - Azure will add a GitHub Action to your repo
   - Deployment happens automatically

### Custom Domain
1. In Azure Portal, go to your Static Web App
2. Click **"Custom domains"**
3. Click **"+ Add"**
4. Enter your domain and follow DNS instructions

### Benefits
- ✅ Global CDN
- ✅ Free SSL
- ✅ Integration with Azure services
- ✅ Staging environments
- ✅ Authentication support

---

## 🔥 Option 4: Vercel (Very Fast)

### Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd path/to/kaai-website
   vercel
   ```

3. **Follow prompts**
   - Login/signup when prompted
   - Confirm project settings
   - Your site will be live instantly!

### Via Dashboard
1. Go to [Vercel](https://vercel.com)
2. Sign up/login
3. Click **"Import Project"**
4. Connect GitHub and select repository
5. Click **"Deploy"**

### Custom Domain
1. Go to project **Settings** → **Domains**
2. Add `www.keralaaiacademy.com`
3. Follow DNS instructions

---

## 📱 Option 5: Cloudflare Pages (Free + Fast)

1. **Go to [Cloudflare Pages](https://pages.cloudflare.com)**
2. Sign up/login
3. Click **"Create a project"**
4. Connect GitHub repository
5. **Build settings**:
   - Framework preset: None
   - Build command: *(empty)*
   - Build output directory: `/`
6. Click **"Save and Deploy"**

### Benefits
- ✅ Cloudflare's global network
- ✅ Unlimited bandwidth
- ✅ Web analytics included
- ✅ Very fast

---

## 🔧 Post-Deployment Checklist

After deploying to any platform:

### 1. Test the Site
- ✅ Visit your live URL
- ✅ Test all links (navigation, WhatsApp, email, social)
- ✅ Test on mobile device
- ✅ Test smooth scrolling
- ✅ Verify all images load

### 2. Verify SEO
- ✅ Google Search Console: Add property and submit sitemap
- ✅ Check meta tags with [OpenGraph Debugger](https://www.opengraph.xyz/)
- ✅ Verify robots.txt: `yourdomain.com/robots.txt`
- ✅ Verify sitemap: `yourdomain.com/sitemap.xml`

### 3. Performance Check
- ✅ Run [Google Lighthouse](https://pagespeed.web.dev/)
- ✅ Aim for 90+ scores in all categories
- ✅ Test load speed on slow 3G

### 4. Analytics Setup (Optional)
- ✅ Set up Google Analytics
- ✅ Or use privacy-friendly alternatives (Plausible, Fathom)
- ✅ Uncomment tracking code in `js/main.js`

### 5. Social Media
- ✅ Share on KAAI social media accounts
- ✅ Test how it looks when shared (preview)
- ✅ Update bio links to new website

---

## 🆘 Troubleshooting

### Issue: Custom domain not working
**Solution**: 
- Wait 24-48 hours for DNS propagation
- Check DNS records with [DNS Checker](https://dnschecker.org)
- Ensure CNAME file contains correct domain

### Issue: Images not loading
**Solution**:
- Check file paths are correct
- Ensure images are committed to git
- Check file names match (case-sensitive on some servers)

### Issue: CSS/JS not loading
**Solution**:
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check file paths in HTML
- Verify files are in correct directories

### Issue: 404 errors
**Solution**:
- For single-page apps, ensure platform is configured for client-side routing
- Check that index.html is in root directory

---

## 📊 Recommended Platform Comparison

| Platform | Speed | Ease | Free Tier | Best For |
|----------|-------|------|-----------|----------|
| **GitHub Pages** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Unlimited | Simple static sites |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 100GB/month | Feature-rich projects |
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 100GB/month | Fast global delivery |
| **Azure** | ⭐⭐⭐⭐ | ⭐⭐⭐ | 100GB/month | Enterprise/Azure stack |
| **Cloudflare** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Unlimited | Maximum performance |

**Recommendation for KAAI**: Start with **GitHub Pages** (simplest) or **Netlify** (best features). Both are free and perfect for this site.

---

## 🎯 Quick Deploy Commands

### GitHub Pages
```bash
git add .
git commit -m "Deploy KAAI website"
git push origin main
```

### Netlify (with CLI)
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel (with CLI)
```bash
npm install -g vercel
vercel --prod
```

---

## 📞 Need Help?

If you encounter issues:
1. Check platform documentation
2. Review error messages in deployment logs
3. Search platform's community forums
4. Contact support (all platforms have great support)

---

**Happy Deploying! 🚀**

Your modern KAAI website is ready to make an impact online!

