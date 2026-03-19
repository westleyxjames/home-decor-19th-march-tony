// Global State
let exitIntentShown = false;
let cookiesAccepted = localStorage.getItem('cookiesAccepted');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initFooter();
    initIcons();
    initCookieBanner();
    initExitIntent();
    initScrollEffects();
});

// Header Component
function initHeader() {
    const header = document.getElementById('header');
    const currentPath = window.location.pathname.replace('/', '').replace('.html', '') || 'home';
    
    header.innerHTML = `
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="index.html" class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xl">PN</span>
                    </div>
                    <span class="text-xl font-semibold text-gray-900">PrimeNest Decor</span>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center gap-8">
                    <a href="index.html" class="nav-link ${currentPath === 'home' ? 'active' : ''}">Home</a>
                    <a href="about.html" class="nav-link ${currentPath === 'about' ? 'active' : ''}">About</a>
                    <a href="services.html" class="nav-link ${currentPath === 'services' ? 'active' : ''}">Services</a>
                    <a href="pricing.html" class="nav-link ${currentPath === 'pricing' ? 'active' : ''}">Pricing</a>
                    <a href="contact.html" class="nav-link ${currentPath === 'contact' ? 'active' : ''}">Contact</a>
                    <button onclick="openModal('contact-modal')" class="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all font-medium">
                        Get Started
                    </button>
                </nav>

                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="md:hidden p-2">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu">
            <div class="p-6">
                <div class="flex justify-between items-center mb-8">
                    <span class="text-xl font-semibold">Menu</span>
                    <button onclick="toggleMobileMenu()" class="p-2">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>
                <nav class="flex flex-col gap-4">
                    <a href="index.html" class="text-gray-700 hover:text-amber-700 py-2">Home</a>
                    <a href="about.html" class="text-gray-700 hover:text-amber-700 py-2">About</a>
                    <a href="services.html" class="text-gray-700 hover:text-amber-700 py-2">Services</a>
                    <a href="pricing.html" class="text-gray-700 hover:text-amber-700 py-2">Pricing</a>
                    <a href="contact.html" class="text-gray-700 hover:text-amber-700 py-2">Contact</a>
                    <button onclick="openModal('contact-modal')" class="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all font-medium mt-4">
                        Get Started
                    </button>
                </nav>
            </div>
        </div>
        <div id="mobile-overlay" class="mobile-overlay" onclick="toggleMobileMenu()"></div>
    `;
    
    initIcons();
}

// Footer Component
function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- About -->
                    <div>
                        <div class="flex items-center gap-2 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold text-xl">PN</span>
                            </div>
                            <span class="text-xl font-semibold">PrimeNest Decor</span>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Transform your space into a stylish sanctuary with premium home decor solutions tailored to your lifestyle.
                        </p>
                        <div class="flex gap-4">
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-amber-600 transition-colors">
                                <i data-lucide="facebook" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-amber-600 transition-colors">
                                <i data-lucide="instagram" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-amber-600 transition-colors">
                                <i data-lucide="twitter" class="w-5 h-5"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="text-gray-300 hover:text-amber-500 transition-colors">Home</a></li>
                            <li><a href="about.html" class="text-gray-300 hover:text-amber-500 transition-colors">About Us</a></li>
                            <li><a href="services.html" class="text-gray-300 hover:text-amber-500 transition-colors">Services</a></li>
                            <li><a href="pricing.html" class="text-gray-300 hover:text-amber-500 transition-colors">Pricing</a></li>
                            <li><a href="contact.html" class="text-gray-300 hover:text-amber-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Our Services</h3>
                        <ul class="space-y-2 text-gray-300">
                            <li>Interior Styling</li>
                            <li>Home Makeover Packages</li>
                            <li>Custom Furniture & Decor</li>
                            <li>Seasonal Decoration</li>
                            <li>Office & Commercial Decor</li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3">
                                <i data-lucide="map-pin" class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"></i>
                                <span class="text-gray-300">10222 Desert Sands St Ste 204, San Antonio, TX 78116, United States</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <i data-lucide="phone" class="w-5 h-5 text-amber-500 flex-shrink-0"></i>
                                <a href="tel:+18053569285" class="text-gray-300 hover:text-amber-500 transition-colors">+1-805-356-9285</a>
                            </li>
                            <li class="flex items-center gap-3">
                                <i data-lucide="mail" class="w-5 h-5 text-amber-500 flex-shrink-0"></i>
                                <a href="mailto:help@primenestdecor.site" class="text-gray-300 hover:text-amber-500 transition-colors">help@primenestdecor.site</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-700 mt-12 pt-8">
                    <div class="flex flex-col items-center gap-4">
                        <div class="flex flex-wrap justify-center gap-4 text-sm">
                            <a href="privacy-policy.html" class="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
                            <a href="terms-conditions.html" class="text-gray-400 hover:text-amber-500 transition-colors">Terms & Conditions</a>
                            <a href="disclaimer.html" class="text-gray-400 hover:text-amber-500 transition-colors">Disclaimer</a>
                            <a href="cookie-policy.html" class="text-gray-400 hover:text-amber-500 transition-colors">Cookie Policy</a>
                        </div>
                        <p class="text-gray-400 text-sm">© 2026 PrimeNest Decor. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    initIcons();
}

// Initialize Lucide Icons
function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Contact Form Submission
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contact-form') {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Thank you! Your request has been submitted. We\'ll contact you within 24 hours.';
        e.target.appendChild(successDiv);
        
        // Reset form
        e.target.reset();
        
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
            closeModal('contact-modal');
            window.location.href = 'thank-you.html';
        }, 2000);
    }
});

// Cookie Banner
function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!cookiesAccepted && banner) {
        setTimeout(() => {
            banner.classList.add('active');
        }, 1000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiesAccepted = 'true';
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('active');
    }
}

function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    cookiesAccepted = 'false';
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('active');
    }
}

// Exit Intent Popup
function initExitIntent() {
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown && !cookiesAccepted) {
            openModal('exit-intent-modal');
            exitIntentShown = true;
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hash) {
        const target = document.querySelector(e.target.hash);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Helper function to create star rating
function createStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '<i data-lucide="star" class="w-5 h-5 fill-amber-500 text-amber-500"></i>';
    }
    return stars;
}