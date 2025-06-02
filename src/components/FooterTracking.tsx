'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-RTEPB48RDY';

const FooterTracking = () => {
  return (
    <Script id="footer-tracking">
      {`
        // Track when user reaches footer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const clientId = localStorage.getItem('ga_client_id');
              if (!clientId) return;

              const payload = {
                client_id: clientId,
                measurement_id: '${GA_MEASUREMENT_ID}',
                events: [{
                  name: 'scroll_to_footer',
                  params: {
                    event_category: 'Engagement',
                    event_label: 'User reached footer',
                    page_location: window.location.href,
                    page_path: window.location.pathname,
                    page_title: document.title
                  }
                }]
              };

              const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
              navigator.sendBeacon('/api/track', blob);
              
              observer.disconnect(); // Only track once
            }
          });
        });
        
        // Start observing the footer
        observer.observe(document.querySelector('footer'));
      `}
    </Script>
  );
};

export default FooterTracking; 