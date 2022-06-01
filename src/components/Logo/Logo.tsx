import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo() {
  return (
    <Link className="Logo" to='/'>
      <div className="logo-container">
      </div>
    </Link>
  );
}

export default Logo;