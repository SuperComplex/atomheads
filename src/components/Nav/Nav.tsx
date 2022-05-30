import { Link } from "react-scroll";
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
          >
              About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="mint"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            Mint
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="traits"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
          >
          Traits
        </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="details"
            spy={true}
            smooth={true}
            offset={0}
            duration={3000}
          >
            Details
          </Link>
          </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={0}
            duration={3500}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
