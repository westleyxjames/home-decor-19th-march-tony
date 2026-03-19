# PrimeNest Decor - HTML/CSS/JS Website

## Overview
This is a complete conversion of the PrimeNest Decor website from React/TypeScript to plain HTML, CSS, and JavaScript.

## ✅ All Pages Completed

```
/
├── index.html              # Home page ✅
├── about.html              # About page ✅
├── services.html           # Services page ✅
├── pricing.html            # Pricing page ✅
├── contact.html            # Contact page ✅
├── privacy-policy.html     # Privacy Policy ✅
├── terms-conditions.html   # Terms & Conditions ✅
├── disclaimer.html         # Disclaimer ✅
├── cookie-policy.html      # Cookie Policy ✅
├── thank-you.html          # Thank You page ✅
├── styles.css              # All CSS styles ✅
├── script.js               # Main JavaScript functionality ✅
└── README.md               # This file
```

## Features

### ✅ Completed Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Navigation**: Fixed header with mobile menu
- **Contact Forms**: Modal-based contact form on all pages
- **Cookie Banner**: GDPR-compliant cookie consent
- **Exit Intent Popup**: Special offer when user attempts to leave
- **WhatsApp Integration**: Floating WhatsApp button
- **Smooth Animations**: CSS and JavaScript animations
- **All Legal Pages**: Privacy Policy, Terms, Disclaimer, Cookie Policy

### 🎨 Design
- Modern, premium feel with neutral colors (beige, white, gold accents)
- Gradient buttons and backgrounds
- Shadow effects and hover states
- Professional typography
- Optimized images from Unsplash

### 📱 Responsive
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## How to Create Remaining Pages

Since all pages follow the same structure, here's the template for creating additional pages:

### Template Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - PrimeNest Decor</title>
    <meta name="description" content="Page description">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header id="header"></header>
    
    <main>
        <!-- Page-specific content goes here -->
    </main>
    
    <footer id="footer"></footer>
    
    <!-- Contact Form Modal (copy from index.html) -->
    <!-- Cookie Banner (copy from index.html) -->
    <!-- WhatsApp Button (copy from index.html) -->
    
    <script src="script.js"></script>
</body>
</html>
```

## Page Content Templates

### Services Page Content:
```html
<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive home decor solutions tailored to your needs
            </p>
        </div>
        
        <!-- Service cards grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service Card Example -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <img src="IMAGE_URL" alt="Service name" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-3">Service Name</h3>
                    <p class="text-gray-600 mb-4">Description of the service...</p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-start gap-2">
                            <i data-lucide="check" class="w-5 h-5 text-amber-600 mt-0.5"></i>
                            <span>Feature 1</span>
                        </li>
                        <!-- More features -->
                    </ul>
                    <button onclick="openModal('contact-modal')" class="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Pricing Page Content:
```html
<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect package for your home transformation
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Pricing cards (copy from home page pricing section) -->
        </div>
    </div>
</section>
```

### Contact Page Content:
```html
<section class="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
    <div class="container mx-auto px-4 max-w-4xl">
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p class="text-xl text-gray-600">
                Get in touch with our team for a free consultation
            </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form (copy from modal) -->
            <!-- Contact Information -->
        </div>
    </div>
</section>
```

### Legal Pages Content (Privacy, Terms, etc.):
```html
<section class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Page Title</h1>
        <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 mb-6">Last updated: March 18, 2026</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Section Title</h2>
            <p class="text-gray-600 mb-4">Content...</p>
            
            <!-- More sections -->
        </div>
    </div>
</section>
```

## JavaScript Functions

### Key Functions Available:
- `openModal(modalId)` - Opens a modal
- `closeModal(modalId)` - Closes a modal
- `toggleMobileMenu()` - Toggles mobile navigation
- `acceptCookies()` - Accepts cookies
- `rejectCookies()` - Rejects cookies
- `createStars(rating)` - Creates star rating HTML
- `initIcons()` - Initializes Lucide icons

## Styling

All styles are defined in `styles.css` with Tailwind CSS classes used inline in HTML.

### Custom CSS Classes:
- `.modal` - Modal container
- `.modal-overlay` - Modal background overlay
- `.modal-content` - Modal content box
- `.cookie-banner` - Cookie consent banner
- `.whatsapp-button` - WhatsApp floating button
- `.mobile-menu` - Mobile navigation menu

## CDN Dependencies

- **Tailwind CSS**: https://cdn.tailwindcss.com
- **Lucide Icons**: https://unpkg.com/lucide@latest

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images from Unsplash with query parameters
- Minimal JavaScript dependencies
- CSS animations for smooth interactions
- Lazy loading for images (browser native)

## SEO

- Semantic HTML5 elements
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text for all images
- Clean URL structure

## Accessibility

- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Sufficient color contrast
- Responsive text sizing

## How to Deploy

1. Upload all files to your web server
2. Ensure all files are in the root directory
3. Test all links and forms
4. Configure form submission endpoint (currently console.log)
5. Update Google Analytics or tracking code if needed

## Form Integration

The contact form currently logs to console. To integrate with a backend:

### Option 1: FormSubmit.co
```javascript
// In script.js, update form submission:
document.getElementById('contact-form').action = 'https://formsubmit.co/YOUR_EMAIL';
```

### Option 2: Custom Backend
```javascript
// Update the form submission handler in script.js:
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## Customization

### Colors
Update Tailwind classes throughout HTML:
- `amber-600` → Your primary color
- `amber-700` → Your primary dark color
- `gray-900` → Your text color

### Fonts
Add to `<head>` in all HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Images
Replace Unsplash URLs with your own images throughout the HTML files.

## Support

For issues or questions, contact: help@primenestdecor.site

---

**PrimeNest Decor** - Transform Your Space Into a Stylish Sanctuary