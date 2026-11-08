import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <header className="site-header" id="header" ref={headerRef}>
      <div className="wrap nav">
        <Link className="wordmark" to="/">Zura</Link>
        <nav className="nav-links" aria-label="Main">
          <Link to="/#about">About</Link>
          <NavLink to="/tracks" className={navClass}>Tracks</NavLink>
          <NavLink to="/sponsors" className={navClass}>Sponsors</NavLink>
          <Link to="/#faq">FAQ</Link>
          <NavLink to="/code-of-conduct" className={navClass}>Code of conduct</NavLink>
          <Link className="btn btn-solid btn-sm" to="/register">Join the waitlist</Link>
        </nav>
      </div>
    </header>
  );
}
