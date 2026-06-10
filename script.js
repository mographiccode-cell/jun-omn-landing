// Additional JavaScript for JUN landing page
// This file contains any additional JavaScript functionality not included in the HTML

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add data-src attribute to images for lazy loading
function setupLazyLoading() {
    const images = document.querySelectorAll('img:not([data-src])');
    images.forEach(img => {
        if (img.src && img.src.includes('instagram.com')) {
            img.dataset.src = img.src;
            img.src = 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="#F5E6E8"/></svg>');
        }
    });
}

// Initialize lazy loading on DOM ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);