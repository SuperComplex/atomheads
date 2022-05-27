// import React from 'react';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Soc from 'components/Soc/Soc';
import Logo2 from 'components/Logo2/Logo2';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Logo/>
      <Nav/>
      <Logo2/>
      <Soc/>
    </header>
  );
}

export default Header;
