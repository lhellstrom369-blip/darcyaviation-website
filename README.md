# Darcy Aviation Website

A premium, modern website for Darcy Aviation featuring heavy glassmorphism design, built with React frontend and Node.js backend.

## 🚀 Features

- **Modern Glassmorphism Design**: Heavy use of backdrop-filter blur effects and semi-transparent elements
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **React Frontend**: Component-based architecture with React Router
- **Node.js Backend**: Express API with email integration
- **Contact Form**: Functional contact form with email notifications
- **Services Showcase**: Flight training, aircraft maintenance, rentals, and drone services
- **Transparent Pricing**: Clear pricing information for all services
- **Smooth Animations**: Framer Motion animations throughout

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account (for email service) or other SMTP service

## 🛠️ Installation

### 1. Clone or navigate to the project

```bash
cd ~/projects/darcyaviation-website
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` and add your email credentials:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
BUSINESS_EMAIL=brent@darcyaviation.com
```

**For Gmail:**
1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password: https://myaccount.google.com/apppasswords
3. Use that password in EMAIL_PASSWORD (not your regular Gmail password)

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend will run on http://localhost:3000

### Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Run Backend:**
```bash
cd backend
npm start
```

## 📁 Project Structure

```
darcyaviation-website/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js/css
│   │   │   ├── Hero.js/css
│   │   │   ├── Services.js/css
│   │   │   ├── About.js/css
│   │   │   ├── Pricing.js/css
│   │   │   ├── Contact.js/css
│   │   │   └── Footer.js/css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── backend/
    ├── server.js
    ├── .env.example
    ├── .env (create this)
    └── package.json
```

## 🎨 Design Features

### Glassmorphism Elements
- Backdrop blur effects (20-30px)
- Semi-transparent backgrounds (rgba with 0.1-0.2 opacity)
- Subtle borders with low opacity
- Layered depth with box shadows
- Smooth hover transitions

### Color Scheme
- Animated gradient background
- White text with varying opacity
- Accent colors: Blues (#0066cc, #003366)
- Glass effects throughout

## 🔌 API Endpoints

### Contact Form
```
POST /api/contact
Body: {
  name: string,
  email: string,
  phone: string (optional),
  service: string,
  message: string
}
```

### Booking Request
```
POST /api/booking
Body: {
  name: string,
  email: string,
  phone: string (optional),
  service: string,
  date: string,
  time: string (optional),
  message: string (optional)
}
```

### Health Check
```
GET /api/health
```

## 📧 Email Configuration

The backend uses Nodemailer to send emails. When a contact form is submitted:
1. An email is sent to the business owner (BUSINESS_EMAIL)
2. An auto-reply is sent to the customer

Supported email services:
- Gmail (default)
- Outlook
- Yahoo
- Custom SMTP

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Contact form rate limiting (5 submissions per hour per IP)
- Input validation
- Email format validation

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `build` folder
3. Update FRONTEND_URL in backend .env

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables
2. Deploy backend code
3. Update API URL in frontend Contact.js

## 📝 Customization

### Update Content
- Edit component files in `frontend/src/components/`
- Update services, pricing, and contact info
- Modify colors in `App.css` CSS variables

### Change Email Provider
- Update EMAIL_SERVICE in .env
- Configure SMTP settings if using custom provider

### Add More Pages
- Create new component in `components/`
- Add route in `App.js`
- Update navigation in `Header.js`

## 🐛 Troubleshooting

### Email not sending
- Check EMAIL_USER and EMAIL_PASSWORD in .env
- Verify Gmail app-specific password is correct
- Check backend console for error messages

### CORS errors
- Verify FRONTEND_URL in backend .env matches frontend URL
- Check backend is running on correct port

### Styling issues
- Clear browser cache
- Check browser supports backdrop-filter (Safari needs -webkit- prefix)

## 📄 License

MIT License - feel free to use for your projects

## 👨‍💻 Built With

- React 18
- React Router 6
- React Icons
- Framer Motion
- Express.js
- Nodemailer
- Helmet.js
- CORS

## 📞 Support

For issues or questions about Darcy Aviation services:
- Phone: (203) 617-0645
- Email: brent@darcyaviation.com
- Location: Danbury Municipal Airport (KDXR), CT

---

**Built with ❤️ for aviation excellence**
