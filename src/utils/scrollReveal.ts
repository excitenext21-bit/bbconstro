/**
 * Global Scroll-Reveal Auto-Initializer
 * -------------------------------------------------------
 * Automatically observes every <section> and any element
 * with [data-reveal] attribute across the entire app.
 *
 * CSS classes (defined in index.css):
 *   .reveal-hidden  → start state  (opacity:0, translateY)
 *   .reveal-visible → end state    (opacity:1, translateY:0)
 *
 * Usage in components (optional targeted control):
 *   <div data-reveal="fade-up" data-reveal-delay="200">...</div>
 *
 * Supported data-reveal values:
 *   fade-up | fade-down | fade-left | fade-right | fade-in | zoom-in
 */

const THRESHOLD = 0.1;
const ROOT_MARGIN = '0px 0px -50px 0px';

function initReveal(el: Element) {
  if (el.classList.contains('reveal-initialised')) return;
  el.classList.add('reveal-initialised');

  const variant = el.getAttribute('data-reveal') || 'fade-up';
  const delay = el.getAttribute('data-reveal-delay') || '0';

  el.classList.add('reveal-hidden', `reveal-${variant}`);
  (el as HTMLElement).style.transitionDelay = `${delay}ms`;
}

function observeAll(observer: IntersectionObserver) {
  // Observe all sections
  document.querySelectorAll('section:not(.reveal-initialised)').forEach((el) => {
    initReveal(el);
    observer.observe(el);
  });

  // Observe explicit data-reveal elements (cards, headings, etc.)
  document.querySelectorAll('[data-reveal]:not(.reveal-initialised)').forEach((el) => {
    initReveal(el);
    observer.observe(el);
  });
}

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          entry.target.classList.remove('reveal-hidden');
          observer.unobserve(entry.target); // once only
        }
      });
    },
    { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
  );

  // Initial pass
  observeAll(observer);

  // Watch for new DOM nodes (route changes render new sections)
  const mutationObserver = new MutationObserver(() => {
    observeAll(observer);
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
