# 🚂 Railway Deployment Guide - Darcy Aviation

## Quick Deploy to Railway

Your code is on GitHub: https://github.com/lhellstrom369-blip/darcyaviation-website

Follow these steps to deploy both frontend and backend to Railway.

---

## Step 1: Deploy Backend First

### 1.1 Go to Railway
1. Visit https://railway.app
2. Click "Login" and sign in with GitHub
3. Authorize Railway to access your repositories

### 1.2 Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose `lhellstrom369-blip/darcyaviation-website`
4. Railway will detect it's a monorepo

### 1.3 Configure Backend Service
1. Click "Add Service" or it may auto-detect
2. Name it: `darcyaviation-backend`
3. Click on the service to configure it

### 1.4 Set Root Directory
1. Go to "Settings" tab
2. Find "Root Directory"
3. Set to: `backend`
4. Save changes

### 1.5 Add Environment Variables
Click "Variables" tab and add these:

```
NODE_ENV=production
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
BUSINESS_EMAIL=brent@darcyaviation.com
```

**Important:** 
- Use a Gmail app-specific password (not your regular password)
- Generate one at: https://myaccount.google.com/apppasswords

### 1.6 Deploy Backend
1. Railway will auto-deploy
2. Wait for deployment to complete (2-3 minutes)
3. Copy the backend URL (looks like: `https://darcyaviation-backend-production.up.railway.app`)

---

## Step 2: Deploy Frontend

### 2.1 Add Frontend Service
1. In the same project, click "New Service"
2. Select "GitHub Repo" again
3. Choose the same repo: `lhellstrom369-blip/darcyaviation-website`

### 2.2 Configure Frontend Service
1. Name it: `darcyaviation-frontend`
2. Go to "Settings" tab
3. Set "Root Directory" to: `frontend`

### 2.3 Add Environment Variables
Click "Variables" tab and add:

```
REACT_APP_API_URL=https://your-backend-url.up.railway.app
```

**Replace** `your-backend-url.up.railway.app` with the actual backend URL from Step 1.6

### 2.4 Configure Build Settings
In "Settings" tab:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npx serve -s build -p $PORT`

### 2.5 Add serve Package
Railway needs the `serve` package to host the React build. 

**Option A: Update package.json (Recommended)**
Add to `frontend/package.json` dependencies:
```json
"serve": "^14.2.0"
```

**Option B: Use Railway's Nixpacks**
Railway will auto-detect and install serve.

### 2.6 Deploy Frontend
1. Click "Deploy"
2. Wait for build and deployment (3-5 minutes)
3. Copy the frontend URL (looks like: `https://darcyaviation-frontend-production.up.railway.app`)

---

## Step 3: Update Backend CORS

### 3.1 Add Frontend URL to Backend
1. Go back to backend service
2. Click "Variables" tab
3. Add new variable:
```
FRONTEND_URL=https://your-frontend-url.up.railway.app
```

**Replace** with your actual frontend URL from Step 2.6

### 3.2 Redeploy Backend
1. Backend will auto-redeploy with new CORS settings
2. Wait for redeployment (1-2 minutes)

---

## Step 4: Test Your Site

### 4.1 Visit Frontend
Open your frontend URL: `https://your-frontend-url.up.railway.app`

### 4.2 Test Contact Form
1. Fill out the contact form
2. Submit it
3. Check if you receive the email at `brent@darcyaviation.com`
4. Check if the customer receives an auto-reply

### 4.3 Check All Pages
- ✅ Navigation works
- ✅ All sections load
- ✅ Glassmorphism effects display correctly
- ✅ Mobile responsive
- ✅ Contact form submits successfully

---

## Step 5: Custom Domain (Optional)

### 5.1 Add Domain to Frontend
1. Go to frontend service settings
2. Click "Domains" tab
3. Click "Add Domain"
4. Enter: `darcyaviation.com`

### 5.2 Configure DNS
Add these records to your domain registrar:

**For root domain (darcyaviation.com):**
```
Type: A
Name: @
Value: [Railway provides this IP]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [Railway provides this]
```

### 5.3 Update Environment Variables
After domain is active, update:
- Backend `FRONTEND_URL` to `https://darcyaviation.com`
- Frontend `REACT_APP_API_URL` stays the same (backend Railway URL)

---

## Troubleshooting

### Contact Form Not Working
**Issue:** Form submits but no email received

**Solutions:**
1. Check backend logs in Railway dashboard
2. Verify EMAIL_USER and EMAIL_PASSWORD are correct
3. Ensure Gmail app-specific password is used (not regular password)
4. Check BUSINESS_EMAIL is correct

### CORS Errors
**Issue:** Frontend can't connect to backend

**Solutions:**
1. Verify FRONTEND_URL in backend matches actual frontend URL
2. Check backend logs for CORS errors
3. Ensure both services are deployed and running

### Build Failures
**Issue:** Frontend or backend fails to build

**Solutions:**
1. Check Railway build logs for specific errors
2. Verify package.json has all dependencies
3. Ensure Node.js version compatibility
4. Check root directory is set correctly

### Styling Issues
**Issue:** Glassmorphism effects not showing

**Solutions:**
1. Clear browser cache
2. Check browser supports backdrop-filter
3. Verify CSS files are being served
4. Check for console errors in browser dev tools

---

## Environment Variables Summary

### Backend Variables
```
NODE_ENV=production
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
BUSINESS_EMAIL=brent@darcyaviation.com
FRONTEND_URL=https://your-frontend-url.up.railway.app
```

### Frontend Variables
```
REACT_APP_API_URL=https://your-backend-url.up.railway.app
```

---

## Cost Estimate

Railway offers:
- **Free Tier**: $5 credit/month (enough for small sites)
- **Hobby Plan**: $5/month per service
- **Estimated Cost**: $10-15/month for both services

---

## Monitoring

### Railway Dashboard
- View logs in real-time
- Monitor resource usage
- Check deployment status
- View metrics and analytics

### Set Up Alerts
1. Go to project settings
2. Enable deployment notifications
3. Add email or Slack webhook

---

## Next Steps After Deployment

1. ✅ Test all functionality thoroughly
2. ✅ Set up custom domain
3. ✅ Configure SSL (Railway does this automatically)
4. ✅ Add Google Analytics
5. ✅ Set up monitoring/alerts
6. ✅ Create backups of environment variables
7. ✅ Document any custom configurations

---

## Quick Commands

### View Logs
```bash
# In Railway dashboard, click on service > "Logs" tab
```

### Redeploy
```bash
# Push to GitHub master branch:
git push origin master

# Or in Railway dashboard:
# Click service > "Deployments" > "Redeploy"
```

### Rollback
```bash
# In Railway dashboard:
# Click service > "Deployments" > Select previous deployment > "Redeploy"
```

---

## Support

**Railway Support:**
- Docs: https://docs.railway.app
- Discord: https://discord.gg/railway
- Status: https://status.railway.app

**Project Support:**
- GitHub: https://github.com/lhellstrom369-blip/darcyaviation-website
- Issues: Create an issue on GitHub

---

## 🎉 You're Live!

Once deployed, your site will be live at:
- **Frontend**: https://your-frontend-url.up.railway.app
- **Backend API**: https://your-backend-url.up.railway.app

Share your site and start getting customers! ✈️

---

**Deployment Time:** ~10-15 minutes total
**Difficulty:** Easy (just follow the steps)
**Cost:** $10-15/month (or free tier if low traffic)
