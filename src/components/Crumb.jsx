import { Link } from 'react-router-dom';

export default function Crumb({ children }) {
  return (
    <p className="crumb"><Link to="/">Home</Link> / {children}</p>
  );
}
