import { useRef } from 'react';

export default function Card({ className = '', style, children }) {
  const ref = useRef(null);

  function onPointerMove(e) {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--cx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--cy', (e.clientY - r.top) + 'px');
  }

  return (
    <div className={`card ${className}`.trim()} style={style} ref={ref} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}
