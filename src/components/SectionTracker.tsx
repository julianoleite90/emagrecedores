'use client';

import { useEffect, useRef } from 'react';

interface SectionTrackerProps {
  sectionId: string;
  children: React.ReactNode;
}

declare global {
  interface Window {
    trackSectionView?: (sectionId: string) => void;
  }
}

const SectionTracker = ({ sectionId, children }: SectionTrackerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current && window.trackSectionView) {
            console.log('Section in view, tracking:', sectionId);
            window.trackSectionView(sectionId);
            hasTracked.current = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // Track when 50% of the section is visible
        rootMargin: '0px' // Trigger when section enters viewport
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [sectionId]);

  return (
    <div ref={sectionRef} id={sectionId}>
      {children}
    </div>
  );
};

export default SectionTracker; 