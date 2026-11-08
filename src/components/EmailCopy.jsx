import { useRef, useState } from 'react';

export default function EmailCopy({ email, subject, className = '', style }) {
  const emailRef = useRef(null);
  const [label, setLabel] = useState('Copy');

  function handleCopy() {
    const done = () => {
      setLabel('Copied');
      setTimeout(() => setLabel('Copy'), 1600);
    };
    const fallback = () => {
      const el = emailRef.current;
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      setLabel('Selected');
      setTimeout(() => setLabel('Copy'), 1600);
    };
    try {
      navigator.clipboard.writeText(email).then(done, fallback);
    } catch (e) {
      fallback();
    }
  }

  const href = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

  return (
    <div className={`email-row ${className}`.trim()} style={style}>
      <a className="email" href={href} ref={emailRef}>{email}</a>
      <button className="copy" type="button" onClick={handleCopy}>{label}</button>
    </div>
  );
}
