# Deployment Guide - Darcy Aviation Website

## 🌐 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend)

#### Frontend on Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set build settings:
   - Framework: Create React App
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Deploy

#### Backend on Railway
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Set root directory to `backend`
4. Add environment variables:
   ```
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://your-vercel-url.vercel.app
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   BUSINESS_EMAIL=brent@darcyaviation.com
   ```
5. Deploy

#### Update Frontend API URL
In `frontend/src/components/Contact.js`, update the API URL:
```javascript
const response = await axios.post('https://your-railway-url.railway.app/api/contact', formData);
```

---

### Option 2: Netlify (Frontend) + Heroku (Backend)

#### Frontend on Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
5. Deploy

#### Backend on Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create darcyaviation-api`
4. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=https://your-netlify-url.netlify.app
   heroku config:set EMAIL_SERVICE=gmail
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASSWORD=your-app-password
   heroku config:set BUSINESS_EMAIL=brent@darcyaviation.com
   ```
5. Deploy:
   ```bash
   cd backend
   git init
   heroku git:remote -a darcyaviation-api
   git add .
   git commit -m "Initial deploy"
   git push heroku main
   ```

---

### Option 3: DigitalOcean (Full Stack)

#### Setup Droplet
1. Create Ubuntu droplet
2. SSH into server
3. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

#### Deploy Backend
```bash
cd /var/www
git clone your-repo
cd darcyaviation-website/backend
npm install
```

Create `.env` file with production values

Setup PM2:
```bash
sudo npm install -g pm2
pm2 start server.js --name darcyaviation-api
pm2 startup
pm2 save
```

#### Deploy Frontend
```bash
cd ../frontend
npm install
npm run build
```

Setup Nginx:
```bash
sudo apt install nginx
sudo nano /etc/nginx/sites-available/darcyaviation
```

Nginx config:
```nginx
server {
    listen 80;
    server_name darcyaviation.com www.darcyaviation.com;

    root /var/www/darcyaviation-website/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/darcyaviation /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d darcyaviation.com -d www.darcyaviation.com
```

---

## 🔒 Security Checklist

- [ ] Change all default passwords
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS/SSL
- [ ] Set up firewall rules
- [ ] Configure rate limiting
- [ ] Regular security updates
- [ ] Monitor logs for suspicious activity
- [ ] Use strong email app passwords
- [ ] Enable CORS only for your domain
- [ ] Set secure HTTP headers (Helmet.js)

---

## 📊 Monitoring

### Backend Monitoring
- Use PM2 for process management
- Set up error logging (Winston, Sentry)
- Monitor API response times
- Track email delivery success rate

### Frontend Monitoring
- Google Analytics
- Error tracking (Sentry)
- Performance monitoring (Lighthouse)
- User behavior analytics

---

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@main
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: backend
```

---

## 🧪 Pre-Deployment Testing

1. **Test contact form**
   - Submit test messages
   - Verify emails are received
   - Check auto-reply works

2. **Test all pages**
   - Navigation works
   - All links functional
   - Forms validate properly
   - Mobile responsive

3. **Performance**
   - Run Lighthouse audit
   - Check load times
   - Optimize images
   - Minify assets

4. **Cross-browser testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

---

## 📝 Post-Deployment

1. Update DNS records to point to your server
2. Test production site thoroughly
3. Set up monitoring and alerts
4. Configure backups
5. Document any custom configurations
6. Train staff on content updates

---

## 🆘 Troubleshooting

### Email not sending in production
- Verify environment variables are set correctly
- Check email service allows connections from your server IP
- Review backend logs for specific errors
- Test SMTP connection manually

### CORS errors
- Ensure FRONTEND_URL in backend matches actual frontend URL
- Check CORS middleware configuration
- Verify API endpoints are accessible

### Build failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review build logs for specific errors
- Clear node_modules and reinstall

---

## 📞 Support

For deployment assistance:
- Check README.md for setup instructions
- Review server logs for errors
- Contact hosting provider support
- Consult framework documentation

---

**Good luck with your deployment! 🚀**
