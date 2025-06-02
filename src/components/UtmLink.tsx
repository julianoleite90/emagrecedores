'use client';

import { appendUtmToUrl } from '@/utils/utm';
import { useEffect, useState } from 'react';

interface UtmLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventId: string;
}

const UtmLink = ({ href, className, children, eventId }: UtmLinkProps) => {
  const [utmHref, setUtmHref] = useState(href);

  useEffect(() => {
    setUtmHref(appendUtmToUrl(href));
  }, [href]);

  const trackClick = async () => {
    const clientId = `${Math.floor(Math.random() * 1e10)}.${Date.now()}`;
    
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: clientId,
          measurement_id: 'G-RTEPB48RDY',
          events: [{
            name: 'click_cta',
            params: {
              event_category: 'CTA',
              event_label: eventId,
              event_value: href
            }
          }]
        })
      });
    } catch (error) {
      console.error('Error tracking click:', error);
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