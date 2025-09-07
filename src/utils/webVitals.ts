// Web Vitals monitoring e otimizações
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Função para reportar Web Vitals
function sendToAnalytics(metric: { name: string; value: number; id: string }) {
  // Enviar para Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
  
  // Log para debug
  console.log('Web Vital:', metric.name, metric.value);
}

// Inicializar Web Vitals monitoring
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Otimizações específicas para Web Vitals
export const webVitalsOptimizations = {
  // Otimizações para LCP (Largest Contentful Paint)
  lcp: {
    // Preload de recursos críticos
    preloadCriticalResources: () => {
      const criticalResources = [
        '/hmob.png',
        '/hdesk.png',
        '/_next/static/css/app/layout.css'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'image';
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    },
    
    // Otimizar imagens críticas
    optimizeCriticalImages: () => {
      const criticalImages = document.querySelectorAll('.hero-image img');
      criticalImages.forEach(img => {
        (img as HTMLImageElement).loading = 'eager';
        (img as HTMLImageElement).fetchPriority = 'high';
      });
    }
  },
  
  // Otimizações para CLS (Cumulative Layout Shift)
  cls: {
    // Reservar espaço para imagens
    reserveImageSpace: () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const imgElement = img as HTMLImageElement;
        if (!imgElement.style.aspectRatio && imgElement.naturalWidth && imgElement.naturalHeight) {
          imgElement.style.aspectRatio = `${imgElement.naturalWidth} / ${imgElement.naturalHeight}`;
        }
      });
    },
    
    // Prevenir layout shift em fontes
    preventFontLayoutShift: () => {
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    }
  },
  
  // Otimizações para FID/INP (First Input Delay / Interaction to Next Paint)
  fid: {
    // Defer scripts não críticos
    deferNonCriticalScripts: () => {
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('data-critical')) {
          (script as HTMLScriptElement).defer = true;
        }
      });
    },
    
    // Otimizar event listeners
    optimizeEventListeners: () => {
      // Usar passive listeners para scroll/touch
      const passiveEvents = ['scroll', 'touchstart', 'touchmove'];
      passiveEvents.forEach(eventType => {
        document.addEventListener(eventType, () => {}, { passive: true });
      });
    }
  }
};

// Aplicar todas as otimizações
export function applyWebVitalsOptimizations() {
  if (typeof window === 'undefined') return;
  
  // Aguardar DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      webVitalsOptimizations.lcp.preloadCriticalResources();
      webVitalsOptimizations.lcp.optimizeCriticalImages();
      webVitalsOptimizations.cls.reserveImageSpace();
      webVitalsOptimizations.cls.preventFontLayoutShift();
      webVitalsOptimizations.fid.deferNonCriticalScripts();
      webVitalsOptimizations.fid.optimizeEventListeners();
    });
  } else {
    webVitalsOptimizations.lcp.preloadCriticalResources();
    webVitalsOptimizations.lcp.optimizeCriticalImages();
    webVitalsOptimizations.cls.reserveImageSpace();
    webVitalsOptimizations.cls.preventFontLayoutShift();
    webVitalsOptimizations.fid.deferNonCriticalScripts();
    webVitalsOptimizations.fid.optimizeEventListeners();
  }
}
