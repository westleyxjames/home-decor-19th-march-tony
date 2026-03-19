# 🚀 Quick Start Guide - PrimeNest Decor Website

## Instant Preview

### Open in Browser
1. Navigate to your project folder
2. Double-click `index.html`
3. The website will open in your default browser

### Or use a local server (recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## 📄 All Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Main landing page |
| About | `about.html` | Company information |
| Services | `services.html` | Service offerings |
| Pricing | `pricing.html` | Pricing packages |
| Contact | `contact.html` | Contact form |
| Thank You | `thank-you.html` | Form confirmation |
| Privacy | `privacy-policy.html` | Privacy policy |
| Terms | `terms-conditions.html` | Terms & conditions |
| Disclaimer | `disclaimer.html` | Legal disclaimer |
| Cookies | `cookie-policy.html` | Cookie policy |

---

## ✨ Features to Test

### 1. Navigation
- ✅ Click through all menu items
- ✅ Test mobile menu (resize browser)
- ✅ Check active page highlighting

### 2. Contact Forms
- ✅ Click "Get Started" button → Modal opens
- ✅ Fill and submit form → Redirects to thank-you.html
- ✅ Test contact page form

### 3. Cookie Banner
- ✅ Should appear on first visit
- ✅ Click "Accept" or "Reject"
- ✅ Banner should not appear again

### 4. Exit Intent Popup
- ✅ Move mouse towards browser close/back button
- ✅ Popup should appear (only once)

### 5. WhatsApp Button
- ✅ Click green button (bottom-right)
- ✅ Should open WhatsApp chat

### 6. Responsive Design
- ✅ Resize browser window
- ✅ Test on mobile device
- ✅ Check tablet view

---

## 🎨 Customization Checklist

### 1. Update Contact Information
Edit in `script.js` (footer section):
```javascript
// Search for and update:
- Phone: +1-805-356-9285
- Email: help@primenestdecor.site
- Address: 10222 Desert Sands St Ste 204, San Antonio, TX 78116
```

### 2. Update WhatsApp Number
In all HTML files, search for:
```html
<a href="https://wa.me/18053569285"
```
Replace with your WhatsApp number.

### 3. Change Colors
Search and replace in all HTML files:
- `amber-600` → your primary color
- `amber-700` → your primary dark
- `amber-800` → your primary darker

### 4. Replace Images
Update image URLs in:
- `index.html` - Hero and service images
- `about.html` - Team photo
- `services.html` - Service images

### 5. Update Company Name
Search and replace: `PrimeNest Decor` → Your Company Name

---

## 📧 Form Setup

### Option 1: FormSubmit.co (Free, No Code)

1. In `script.js`, find the form submission code
2. Replace with:
```javascript
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    await fetch('https://formsubmit.co/YOUR_EMAIL@example.com', {
        method: 'POST',
        body: data
    });
    
    window.location.href = 'thank-you.html';
});
```

3. Replace `YOUR_EMAIL@example.com` with your email

### Option 2: FormSpree (Free)

1. Sign up at formspree.io
2. Get your form endpoint
3. Update form action in HTML files:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom Backend

Create your own API endpoint and update the fetch URL in `script.js`.

---

## 🌐 Deployment

### Deploy to Netlify (Free)

1. Create account at netlify.com
2. Drag and drop your folder
3. Done! You get a free `.netlify.app` URL

### Deploy to GitHub Pages (Free)

1. Create GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at `username.github.io/repo-name`

### Deploy to Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Done!

### Deploy to cPanel/Traditional Host

1. Upload all files via FTP
2. Make sure `index.html` is in public_html
3. Visit your domain

---

## 🐛 Troubleshooting

### Icons not showing?
- Check internet connection (icons load from CDN)
- Clear browser cache

### Styles look broken?
- Make sure `styles.css` is in the same folder as HTML files
- Check browser console for errors

### Forms not working?
- Check browser console (F12) for errors
- Verify form submission code in `script.js`

### Mobile menu not opening?
- Clear browser cache
- Check `script.js` is loaded
- Look for JavaScript errors in console

---

## 📱 Testing Checklist

Before going live, test:

- [ ] All pages load correctly
- [ ] All links work
- [ ] Forms submit properly
- [ ] Mobile view works
- [ ] Tablet view works  
- [ ] Desktop view works
- [ ] WhatsApp button works
- [ ] Cookie banner functions
- [ ] Contact modal opens/closes
- [ ] Exit intent popup appears
- [ ] Images load properly
- [ ] No console errors
- [ ] Legal pages accessible

---

## 🎯 Quick Tips

1. **Always test locally** before deploying
2. **Use browser dev tools** (F12) to debug
3. **Test on real mobile devices** when possible
4. **Check all links** after deployment
5. **Update sitemap.xml** if adding new pages
6. **Add Google Analytics** for tracking

---

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. Review `CONVERSION_COMPLETE.md` for feature list
3. Look at browser console for errors
4. Search the HTML/CSS for examples

---

## ⚡ Next Steps

1. ✅ Test all features locally
2. ✅ Customize colors and content
3. ✅ Set up form handling
4. ✅ Deploy to hosting
5. ✅ Add Google Analytics
6. ✅ Submit to search engines
7. ✅ Share with the world!

---

**Your website is ready to go! Start by opening `index.html` in your browser.** 🎉
