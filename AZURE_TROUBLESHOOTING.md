# Azure Static Web Apps - Troubleshooting Guide

## 🔴 Issue: Build Fails at 0s with No Logs

This typically indicates a **configuration or authentication problem**, not a build problem.

---

## ✅ **Solution 1: Verify & Fix GitHub Secret**

### Step 1: Check if Secret Exists

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Look for: `AZURE_STATIC_WEB_APPS_API_TOKEN_KIND_MUSHROOM_0199D3F0F`

### Step 2: Get Fresh Token from Azure

1. Open **Azure Portal** (portal.azure.com)
2. Navigate to your Static Web App resource
3. Click **Overview** in left sidebar
4. Click **"Manage deployment token"** button
5. **Copy** the token that appears

### Step 3: Update GitHub Secret

1. Back in GitHub → **Settings** → **Secrets and variables** → **Actions**
2. If secret exists:
   - Click the secret name
   - Click **"Update"**
   - Paste new token
   - Click **"Update secret"**
3. If secret doesn't exist:
   - Click **"New repository secret"**
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN_KIND_MUSHROOM_0199D3F0F`
   - Secret: *paste token*
   - Click **"Add secret"**

### Step 4: Re-run Workflow

1. Go to **Actions** tab in GitHub
2. Click the failed workflow run
3. Click **"Re-run all jobs"**

---

## ✅ **Solution 2: Check Repository Permissions**

### Fix Workflow Permissions

1. GitHub repository → **Settings** → **Actions** → **General**
2. Scroll to **"Workflow permissions"**
3. Select: ✅ **"Read and write permissions"**
4. Check: ✅ **"Allow GitHub Actions to create and approve pull requests"**
5. Click **"Save"**

### Re-run the workflow after saving

---

## ✅ **Solution 3: Manual Deployment (Bypass GitHub Actions)**

If GitHub Actions continues to fail, deploy manually:

### Using Azure CLI:

1. **Install Azure Static Web Apps CLI:**
   ```powershell
   npm install -g @azure/static-web-apps-cli
   ```

2. **Get deployment token** from Azure Portal (see Solution 1, Step 2)

3. **Deploy:**
   ```powershell
   swa deploy ./ --deployment-token=YOUR_TOKEN_HERE
   ```
   *(Replace YOUR_TOKEN_HERE with actual token)*

---

## ✅ **Solution 4: Recreate Azure Static Web App**

If all else fails, recreate the Static Web App:

### In Azure Portal:

1. **Delete** current Static Web App (or keep it)
2. Click **"Create a resource"** → **"Static Web App"**
3. Fill in details:
   - **Resource Group**: Choose existing or create new
   - **Name**: `kaai-website`
   - **Region**: Southeast Asia (or closest to Kerala)
   - **Source**: GitHub
   - **Sign in to GitHub**
4. Repository details:
   - **Organization**: Your GitHub username
   - **Repository**: Select your repo
   - **Branch**: main
5. Build details (IMPORTANT):
   - **Build presets**: Custom
   - **App location**: `/`
   - **Api location**: *(leave empty)*
   - **Output location**: *(leave empty)*
6. Click **"Review + create"** → **"Create"**

Azure will automatically:
- Create new deployment token
- Add it as GitHub secret
- Create new workflow file (or update existing)
- Deploy your site

---

## 🔍 **Verify Deployment is Working**

### Check Azure Portal:

1. Go to your Static Web App in Azure
2. Click **"Overview"**
3. Look at **"Status"**: Should show "Ready"
4. Click the **URL** to view your site

### Check GitHub Actions:

1. Go to **Actions** tab in your repo
2. Latest workflow should show ✅ green checkmark
3. Click on it to see deployment logs

---

## 📋 **Common Error Messages & Fixes**

| Error | Cause | Fix |
|-------|-------|-----|
| "Build failed (0s)" | Invalid/missing token | Regenerate token (Solution 1) |
| "Authentication failed" | Wrong secret name | Verify secret name matches workflow |
| "Permission denied" | Workflow permissions | Enable write permissions (Solution 2) |
| "App location not found" | Wrong path config | Use `/` for app_location |

---

## 🆘 **Still Not Working?**

### Debug Checklist:

- [ ] GitHub secret exists with correct name
- [ ] Deployment token is fresh (regenerated today)
- [ ] Workflow permissions are "Read and write"
- [ ] Branch name in workflow matches your branch (should be `main`)
- [ ] Azure Static Web App status is "Ready"
- [ ] You've tried re-running the workflow
- [ ] Files exist in repository root: index.html, css/, js/, assets/

### Alternative Hosting:

If Azure continues to be problematic, consider:

1. **GitHub Pages** (Easiest, free)
   - Settings → Pages → Select main branch → Save
   - Done in 30 seconds!

2. **Netlify** (Feature-rich, free)
   - Drag and drop your folder
   - Or connect GitHub repo
   - Works instantly

3. **Vercel** (Very fast, free)
   - Import GitHub repo
   - One-click deploy

All three options work perfectly with your static HTML site and are actually simpler than Azure for static content.

---

## 📞 **Need More Help?**

1. Check **Azure Static Web Apps documentation**: https://docs.microsoft.com/azure/static-web-apps/
2. GitHub Actions logs: Click on failed action → View logs
3. Azure support: Open support ticket in Azure Portal

---

**Pro Tip**: For pure static HTML sites, GitHub Pages or Netlify are often simpler than Azure Static Web Apps. Consider switching if Azure deployment continues to be problematic.

