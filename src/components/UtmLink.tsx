'use client';

import { appendUtmToUrl } from '@/utils/utm';
import { useEffect, useState } from 'react';

interface UtmLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventId: string;
}

interface WindowWithGtag extends Window {
  gtag?: (command: string, action: string, params: {
    event_category: string;
    event_label: string;
    event_value: string;
    transport_type: string;
  }) => void;
}

const UtmLink = ({ href, className, children, eventId }: UtmLinkProps) => {
  const [utmHref, setUtmHref] = useState(href);

  useEffect(() => {
    setUtmHref(appendUtmToUrl(href));
  }, [href]);

  return (
    <a 
      href={utmHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        // Track click event in Google Analytics with specific event ID
        if (typeof window !== 'undefined') {
          const windowWithGtag = window as WindowWithGtag;
          if (windowWithGtag.gtag) {
            windowWithGtag.gtag('event', 'click_cta', {
              event_category: 'CTA',
              event_label: eventId,
              event_value: href,
              transport_type: 'beacon'
            });
          }
        }
      }}
    >
      {children}
    </a>
  );
};

export default UtmLink; 