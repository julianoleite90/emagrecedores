'use client';

import { appendUtmToUrl } from '@/utils/utm';
import { useEffect, useState } from 'react';

interface UtmLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventId: string;
  onClick?: () => void;
}

declare global {
  interface Window {
    trackCTAClick?: (productId: string, ctaType: string) => void;
  }
}

const UtmLink = ({ href, className, children, eventId, onClick }: UtmLinkProps) => {
  const [utmHref, setUtmHref] = useState(href);

  useEffect(() => {
    setUtmHref(appendUtmToUrl(href));
  }, [href]);

  const handleClick = () => {
    // Execute custom onClick first if provided
    if (onClick) {
      onClick();
    }
    
    // Then execute existing tracking
    const [productId, ctaType] = eventId.split('-');
    if (window.trackCTAClick) {
      console.log('CTA clicked, tracking:', { productId, ctaType });
      window.trackCTAClick(productId, ctaType);
    }
  };

  return (
    <a 
      href={utmHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-product-id={eventId.split('-')[0]}
      data-cta-type={eventId.split('-')[1]}
    >
      {children}
    </a>
  );
};

export default UtmLink; 