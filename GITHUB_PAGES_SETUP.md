# GitHub Pages Deployment Guide

## 🚀 Quick Setup (2 minutes)

Follow these simple steps to deploy your KAAI website to GitHub Pages:

---

## Step 1: Enable GitHub Pages

1. **Go to your GitHub repository**
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. That's it! No need to save, it auto-saves.

---

## Step 2: Push Your Code

If you haven't already pushed the latest changes:

```powershell
git add -A
git commit -m "Switch to GitHub Pages deployment"
git push origin main
```

---

## Step 3: Watch Deployment

1. Go to **Actions** tab in your repository
2. You'll see **"Deploy to GitHub Pages"** workflow running
3. Wait ~30 seconds for it to complete (green checkmark ✅)

---

## Step 4: View Your Live Site! 🎉

Your site will be live at:
- **`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`**

Example:
- If your username is `johndoe` and repo is `kaai-website`
- Your site: `https://johndoe.github.io/kaai-website/`

---

## 🌐 Add Custom Domain (Optional)

### If you want to use www.keralaaiacademy.com:

1. **In GitHub:**
   - Settings → Pages
   - Under "Custom domain", enter: `www.keralaaiacademy.com`
   - Click **Save**
   - Check **"Enforce HTTPS"** (wait a few minutes first)

2. **In Your Domain Registrar (GoDaddy, Namecheap, etc.):**
   
   Add these DNS records:
   
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   TTL: 3600
   ```

3. **Wait 10-30 minutes** for DNS to propagate

4. **Visit:** `https://www.keralaaiacademy.com` 🎉

---

## ✅ Verify Everything Works

1. **Visit your GitHub Pages URL**
2. **Check all sections load:**
   - ✅ Hero section
   - ✅ Stats
   - ✅ Programs
   - ✅ Why KAAI
   - ✅ Testimonials
   - ✅ Contact form
3. **Test on mobile** (responsive design)
4. **Click all links:**
   - ✅ WhatsApp link
   - ✅ Email link
   - ✅ Social media links
   - ✅ Phone numbers

---

## 🔄 How to Update Your Site

Every time you push to the `main` branch, your site automatically updates:

```powershell
# Make your changes to files
git add -A
git commit -m "Update content"
git push origin main

# Wait ~30 seconds, your site is updated!
```

---

## 📊 Benefits of GitHub Pages

✅ **Free hosting** with unlimited bandwidth  
✅ **Automatic HTTPS** (secure)  
✅ **Fast CDN** (content delivery network)  
✅ **Auto-deployment** on every push  
✅ **Custom domain support**  
✅ **99.9% uptime**  
✅ **No configuration needed**  

---

## 🆘 Troubleshooting

### Issue: Workflow fails
**Solution:** 
- Go to Settings → Actions → General
- Under "Workflow permissions", select "Read and write permissions"
- Save and re-run workflow

### Issue: 404 Page Not Found
**Solution:**
- Ensure `index.html` is in the root directory ✅
- Check Settings → Pages → Source is "GitHub Actions"
- Wait a few minutes and refresh

### Issue: CSS/JS not loading
**Solution:**
- Already fixed! Your paths are correct (relative paths)
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Custom domain not working
**Solution:**
- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation
- Check DNS with: https://dnschecker.org

---

## 📱 Share Your Site

Once live, share on social media:

```
🎉 Excited to announce our new website is live!

Kerala Academy for Artificial Intelligence (KAAI)
🌐 https://YOUR_URL_HERE

Learn AI, ML, Data Science, and Generative AI with hands-on training and real-world projects.

#AI #MachineLearning #Kerala #TechEducation #KAAI
```

---

## 🎯 Next Steps

After deployment:

1. ✅ **Update Google Search Console** (submit sitemap)
2. ✅ **Share on social media** (Instagram, YouTube)
3. ✅ **Test on multiple devices**
4. ✅ **Get feedback** from students/users
5. ✅ **Monitor with analytics** (optional: add Google Analytics)

---

## ❓ Questions?

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Custom Domain Help:** https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**That's it! Your site is now live on GitHub Pages! 🚀**

