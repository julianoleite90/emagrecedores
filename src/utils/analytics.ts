// Utility functions for Google Analytics tracking

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Generic event tracking function
export const trackEvent = (eventName: string, parameters: Record<string, string | number | boolean> = {}) => {
  if (isGtagAvailable()) {
    window.gtag('event', eventName, parameters);
    console.log('Analytics Event:', eventName, parameters);
  } else {
    console.log('Analytics Event (no gtag):', eventName, parameters);
  }
};

// Quiz tracking events
export const trackQuizStep = (step: number, answer?: string) => {
  trackEvent('quiz_step_completed', {
    step_number: step,
    answer: answer || '',
    event_category: 'Quiz',
    event_label: `Etapa ${step}`
  });
};

export const trackQuizCompleted = (answers: Record<string, string>) => {
  trackEvent('quiz_completed', {
    motivation: answers.motivation || '',
    goal: answers.goal || '',
    challenge: answers.challenge || '',
    timeframe: answers.timeframe || '',
    event_category: 'Quiz',
    event_label: 'Quiz Finalizado'
  });
};

// Product tracking events - agora incluindo nome do produto no evento
export const trackProductCTA = (productName: string, position: number) => {
  trackEvent(`cta_${productName.toLowerCase()}`, {
    product_name: productName,
    product_position: position,
    action: 'site_oficial',
    event_category: 'Product CTA',
    event_label: `CTA ${productName}`
  });
};

export const trackProductInfo = (productName: string, position: number) => {
  trackEvent(`info_${productName.toLowerCase()}`, {
    product_name: productName,
    product_position: position,
    action: 'informacoes',
    event_category: 'Product Info',
    event_label: `Informações ${productName}`
  });
};

// Hero CTA tracking
export const trackHeroCTA = () => {
  trackEvent('hero_cta_click', {
    event_category: 'Hero',
    event_label: 'Conhecer Remédios'
  });
};

// Quiz CTA tracking (after completion)
export const trackQuizCTA = () => {
  trackEvent('quiz_cta_click', {
    event_category: 'Quiz',
    event_label: 'Ver Ranking Completo'
  });
};

// Page section views
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
    event_category: 'Navigation',
    event_label: `Visualização ${sectionName}`
  });
}; 