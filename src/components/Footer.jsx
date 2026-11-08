import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <Link className="wordmark" to="/">Zura</Link>
        <nav className="foot-cols" aria-label="Footer">
          <Link to="/register">Join the waitlist</Link>
          <Link to="/tracks">Tracks and rules</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/code-of-conduct">Code of conduct</Link>
          <a href="https://x.com/zura_hack" target="_blank" rel="noopener">X: @zura_hack</a>
        </nav>
        <div className="foot-meta"><span>hack@zura.com.ng</span><span>&copy; 2026 Zura</span></div>
      </div>
    </footer>
  );
}
