'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-RTEPB48RDY';

const AnalyticsScript = () => {
  const handleLoad = () => {
    console.log('Analytics script loaded successfully');
  };

  const handleError = () => {
    console.error('Failed to load analytics script');
  };

  return (
    <Script
      src={`/analytics.js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default AnalyticsScript; 