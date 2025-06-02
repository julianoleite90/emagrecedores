'use client';

import { appendUtmToUrl } from '@/utils/utm';
import { useEffect, useState } from 'react';

interface UtmLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventId: string;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
}

const UtmLink = ({ href, className, children, eventId }: UtmLinkProps) => {
  const [utmHref, setUtmHref] = useState(href);

  useEffect(() => {
    setUtmHref(appendUtmToUrl(href));
  }, [href]);

  const trackClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '(direct)',
        utm_medium: urlParams.get('utm_medium') || '(none)',
        utm_campaign: urlParams.get('utm_campaign') || '(not set)',
        utm_term: urlParams.get('utm_term') || '(not set)',
        utm_content: urlParams.get('utm_content') || '(not set)'
      };

      window.gtag('event', 'click_cta', {
        event_category: 'CTA',
        event_label: eventId,
        event_value: href,
        ...utmParams,
        outbound_link: href
      });

      console.log('Analytics: CTA click tracked', {
        eventId,
        href,
        utmParams
      });
    }
  };

  return (
    <a 
      href={utmHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
    >
      {children}
    </a>
  );
};

export default UtmLink; 