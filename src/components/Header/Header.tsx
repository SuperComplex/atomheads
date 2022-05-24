// import React from 'react';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Logo/>
      {/* <Nav/>
      About
      Mint
      Traits
      Details
      FAQ */}
    </header>
  );
}

export default Header;
