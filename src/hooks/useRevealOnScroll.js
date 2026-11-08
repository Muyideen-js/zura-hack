import { useEffect } from 'react';

export default function useRevealOnScroll() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('play');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal, .detail').forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
