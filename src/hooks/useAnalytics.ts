import { useCallback } from 'react';

interface TrackEventProps {
  name: string;
  params?: Record<string, string | number | boolean>;
}

const getClientId = () => {
  let clientId = localStorage.getItem('ga_client_id');
  if (!clientId) {
    clientId = `${Math.random().toString(36).substring(2)}.${Date.now()}`;
    localStorage.setItem('ga_client_id', clientId);
  }
  return clientId;
};

const getUtmParams = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || '(direct)',
    utm_medium: urlParams.get('utm_medium') || '(none)',
    utm_campaign: urlParams.get('utm_campaign') || '(not set)',
    utm_term: urlParams.get('utm_term') || '(not set)',
    utm_content: urlParams.get('utm_content') || '(not set)'
  };
};

export const useAnalytics = () => {
  const trackEvent = useCallback(async ({ name, params = {} }: TrackEventProps) => {
    try {
      const clientId = getClientId();
      const utmParams = getUtmParams();
      
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: clientId,
          events: [{
            name,
            params: {
              ...params,
              ...utmParams,
              page_location: window.location.href,
              page_title: document.title
            }
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`Analytics API responded with status ${response.status}`);
      }

      console.log('Analytics:', { name, params: { ...params, ...utmParams } });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }, []);

  const trackSectionView = useCallback((sectionId: string) => {
    trackEvent({
      name: 'section_view',
      params: {
        section_id: sectionId
      }
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((productId: string, ctaType: string) => {
    trackEvent({
      name: 'click_cta',
      params: {
        product_id: productId,
        cta_type: ctaType
      }
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackSectionView,
    trackCTAClick
  };
}; 