import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo() {
  return (
    <Link to='/'>
      <div className="logo-container">
      </div>
    </Link>
  );
}

export default Logo;