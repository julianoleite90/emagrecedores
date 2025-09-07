// Utilitários de performance para otimização do site

/**
 * Debounce function para otimizar eventos
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function para otimizar eventos
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Intersection Observer para lazy loading
 */
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  if (typeof window === 'undefined') {
    return {} as IntersectionObserver;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
}

/**
 * Preload de recursos críticos
 */
export function preloadResource(href: string, as: string, type?: string) {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  
  document.head.appendChild(link);
}

/**
 * Prefetch de recursos não críticos
 */
export function prefetchResource(href: string) {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  
  document.head.appendChild(link);
}

/**
 * Otimização de scroll para melhor INP
 */
export function optimizeScroll() {
  if (typeof window === 'undefined') return;

  let ticking = false;

  function updateScrollPosition() {
    // Lógica de scroll otimizada
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Otimização de resize para melhor INP
 */
export function optimizeResize() {
  if (typeof window === 'undefined') return;

  const debouncedResize = debounce(() => {
    // Lógica de resize otimizada
  }, 100);

  window.addEventListener('resize', debouncedResize, { passive: true });
}

/**
 * Inicializar otimizações de performance
 */
export function initPerformanceOptimizations() {
  if (typeof window === 'undefined') return;

  // Otimizações de scroll e resize
  optimizeScroll();
  optimizeResize();

  // Preload de recursos críticos após carregamento inicial
  setTimeout(() => {
    // Prefetch de imagens do ranking (não críticas)
    prefetchResource('/phynamax-mockup.png');
    prefetchResource('/ozenvitta-400.webp');
    prefetchResource('/definamax-400.webp');
    prefetchResource('/sb2-400.webp');
    prefetchResource('/newdetox-400.webp');
  }, 2000);
}

/**
 * Otimização de animações para melhor performance
 */
export function optimizeAnimations() {
  if (typeof window === 'undefined') return;

  // Reduzir animações em dispositivos de baixa performance
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;

  if (prefersReducedMotion || isLowEndDevice) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
  }
}
