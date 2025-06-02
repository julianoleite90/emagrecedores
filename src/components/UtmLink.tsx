'use client';

import { appendUtmToUrl } from '@/utils/utm';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useEffect, useState } from 'react';

interface UtmLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventId: string;
}

const UtmLink = ({ href, className, children, eventId }: UtmLinkProps) => {
  const [utmHref, setUtmHref] = useState(href);
  const { trackCTAClick } = useAnalytics();

  useEffect(() => {
    setUtmHref(appendUtmToUrl(href));
  }, [href]);

  const handleClick = () => {
    const [productId, ctaType] = eventId.split('-');
    trackCTAClick(productId, ctaType);
  };

  return (
    <a 
      href={utmHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default UtmLink; 