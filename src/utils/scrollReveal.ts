/**
 * Global Onload & Scroll-Reveal Animation System
 * -------------------------------------------------------
 * Handles staggered onload reveal for all visible sections on page load / route change,
 * and smooth scroll entrance for all subsequent sections across all pages.
 */

let activeObserver: IntersectionObserver | null = null;
let activeTimers: ReturnType<typeof setTimeout>[] = [];
let activeMutationObserver: MutationObserver | null = null;

export function clearRevealTimers() {
  activeTimers.forEach((timer) => clearTimeout(timer));
  activeTimers = [];
}

export function triggerPageOnloadReveal() {
  if (typeof window === 'undefined') return;

  // Clear any pending timers
  clearRevealTimers();

  // Disconnect previous observer
  if (activeObserver) {
    activeObserver.disconnect();
    activeObserver = null;
  }

  // Find all sections and data-reveal elements on the current page
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      'section:not([data-no-reveal]), [data-reveal]:not([data-no-reveal])'
    )
  );

  if (elements.length === 0) return;

  // Helper function to animate an element to visible state
  const revealElement = (el: HTMLElement) => {
    requestAnimationFrame(() => {
      el.classList.add('reveal-visible');
      el.classList.remove('reveal-hidden');
    });
  };

  // Fallback: If IntersectionObserver is not supported, reveal everything immediately
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => {
      el.classList.add('reveal-visible');
      el.classList.remove('reveal-hidden');
    });
    return;
  }

  // Setup observer for scroll-triggered elements
  activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          activeObserver?.unobserve(el);
          revealElement(el);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
  );

  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  let visibleIndex = 0;

  elements.forEach((el) => {
    // Reset to hidden transition state
    el.classList.remove('reveal-visible');
    el.classList.add('reveal-initialised', 'reveal-hidden');

    const rect = el.getBoundingClientRect();
    // Element is visible above-the-fold or partially in viewport on load
    const isInViewport = rect.top < windowHeight - 40 && rect.bottom > 20;

    if (isInViewport) {
      // Stagger initial onload entrance
      const delay = visibleIndex * 140 + 50;
      visibleIndex++;
      const timer = setTimeout(() => {
        revealElement(el);
      }, delay);
      activeTimers.push(timer);
    } else {
      // Element is below the fold: observe for scroll reveal
      activeObserver?.observe(el);
    }
  });
}

export function setupMutationWatcher() {
  if (typeof window === 'undefined' || activeMutationObserver) return;

  activeMutationObserver = new MutationObserver(() => {
    // Check if new uninitialised sections appeared in DOM
    const uninitialised = document.querySelectorAll(
      'section:not(.reveal-initialised):not([data-no-reveal])'
    );
    if (uninitialised.length > 0) {
      triggerPageOnloadReveal();
    }
  });

  activeMutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export function initScrollReveal() {
  triggerPageOnloadReveal();
  setupMutationWatcher();
}
