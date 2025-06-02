'use client';

import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface SectionTrackerProps {
  sectionId: string;
  children: React.ReactNode;
}

const SectionTracker = ({ sectionId, children }: SectionTrackerProps) => {
  const { trackSectionView } = useAnalytics();
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionId);
            hasTracked.current = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // Track when 50% of the section is visible
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [sectionId, trackSectionView]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
};

export default SectionTracker; 