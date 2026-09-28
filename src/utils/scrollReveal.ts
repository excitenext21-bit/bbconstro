/**
 * Global Onload & Scroll-Reveal Animation System (Zero Forced-Reflow)
 * -------------------------------------------------------------------
 * Uses pure IntersectionObserver without synchronous getBoundingClientRect calls,
 * eliminating layout thrashing and forced reflow on initial page navigation.
 */

let activeObserver: IntersectionObserver | null = null;

export function clearRevealTimers() {
  // Maintained for backward compatibility
}

export function triggerPageOnloadReveal() {
  if (typeof window === 'undefined') return;

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

  // Fallback: If IntersectionObserver is not supported, reveal everything immediately
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => {
      el.classList.add('reveal-visible');
      el.classList.remove('reveal-hidden');
    });
    return;
  }

  // Setup non-blocking observer for scroll and viewport entrance
  activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          activeObserver?.unobserve(el);
          el.classList.add('reveal-visible');
          el.classList.remove('reveal-hidden');
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
  );

  // Pure write-phase without any layout-reading geometry queries (prevents forced reflow)
  elements.forEach((el) => {
    if (!el.classList.contains('reveal-initialised')) {
      el.classList.add('reveal-initialised', 'reveal-hidden');
    }
    activeObserver?.observe(el);
  });
}

export function setupMutationWatcher() {
  // Handled cleanly on route changes in App.tsx without subtree polling
}

export function initScrollReveal() {
  triggerPageOnloadReveal();
}
