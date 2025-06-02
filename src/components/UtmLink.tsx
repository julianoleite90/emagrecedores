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

  return (
    <a 
      href={utmHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-ga-event={eventId}
      data-ga-category="CTA"
      data-ga-label={eventId}
    >
      {children}
    </a>
  );
};

export default UtmLink; 