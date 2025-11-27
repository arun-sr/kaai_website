/**
 * KAAI Website - Main JavaScript
 * Handles animations, scroll effects, and interactivity
 */

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  initScrollEffects();
  initHeaderScroll();
  initSmoothScroll();
  initRevealOnScroll();
  updateCopyrightYear();
  initLazyLoading();
  
  // Add loaded class for animations
  document.body.classList.add('loaded');
});

// ===================================
// COPYRIGHT YEAR
// ===================================

function updateCopyrightYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===================================
// REVEAL ANIMATIONS ON SCROLL
// ===================================

function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  if (reveals.length === 0) return;
  
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Unobserve after revealing (one-time animation)
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );
  
  reveals.forEach(element => {
    revealObserver.observe(element);
  });
}

// ===================================
// SCROLL EFFECTS (PARALLAX, ETC)
// ===================================

function initScrollEffects() {
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScrollEffects();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function handleScrollEffects() {
  const scrolled = window.pageYOffset;
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero && scrolled < 800) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - (scrolled / 600);
  }
}

// ===================================
// LAZY LOADING FOR IMAGES
// ===================================

function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===================================
// FORM VALIDATION (if forms are added later)
// ===================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // ESC key to close modals (if implemented later)
  if (e.key === 'Escape') {
    // Close any open modals
    const modals = document.querySelectorAll('.modal.open');
    modals.forEach(modal => modal.classList.remove('open'));
  }
});

// Focus management for skip link
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
      target.removeAttribute('tabindex');
    }
  });
}

// ===================================
// ANALYTICS (Placeholder)
// ===================================

// Track button clicks
function trackEvent(category, action, label) {
  // Placeholder for analytics tracking
  // Implement with Google Analytics, Plausible, or other analytics service
  console.log('Event:', category, action, label);
  
  // Example for Google Analytics (if implemented):
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     'event_category': category,
  //     'event_label': label
  //   });
  // }
}

// Track CTA button clicks
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    const text = this.textContent.trim();
    trackEvent('CTA', 'click', text);
  });
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c🚀 KAAI Website', 'color: #4dd5e8; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ for Kerala Academy for Artificial Intelligence', 'color: #7ed957; font-size: 12px;');
console.log('%cInterested in AI? Visit www.keralaaiacademy.com', 'color: #b8e3f5; font-size: 12px;');

