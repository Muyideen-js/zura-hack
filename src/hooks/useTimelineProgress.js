import { useEffect } from 'react';

export default function useTimelineProgress(timelineRef) {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tl = timelineRef.current;
    if (!tl) return;
    const items = tl.querySelectorAll('li');

    function onScroll() {
      const r = tl.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      tl.style.setProperty('--progress', reduce ? 1 : p.toFixed(3));
      items.forEach((li) => {
        const lr = li.getBoundingClientRect();
        li.classList.toggle('lit', reduce || lr.top < mid);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [timelineRef]);
}
