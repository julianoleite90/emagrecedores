'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-RTEPB48RDY';

const AnalyticsScript = () => {
  return (
    <Script
      src={`/analytics.js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  );
};

export default AnalyticsScript; 