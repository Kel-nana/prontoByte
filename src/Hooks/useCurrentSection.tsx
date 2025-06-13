// src/Hooks/useCurrentSection.ts
import { useEffect, useState } from 'react';

export const useCurrentSection = (ids: string[]): string | null => {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    // 1) Callback that picks the most‐visible intersecting section
    const callback: IntersectionObserverCallback = (entries) => {
      // Filter only those currently intersecting
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length === 0) return;

      // Pick the one with largest intersection ratio
      const top = visible.reduce((a, b) =>
        a.intersectionRatio > b.intersectionRatio ? a : b
      );

      const id = top.target.id;
      if (id !== current) {
        console.log('ENTER:', id);
        setCurrent(id);
      }
    };

    // 2) Create observer centered on viewport midline
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',  // shrink viewport by 50% top & bottom
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // report at these ratios
    });

    // 3) Observe each section element
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, current]);

  return current;
};
