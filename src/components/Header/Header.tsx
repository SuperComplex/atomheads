// import React from 'react';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Socitem from 'components/Socitem/Socitem';
import NewSection from 'components/NewSection/NewSection';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Logo/>
      <Nav/>
      <NewSection/>
      <Socitem/>
      
    </header>
  );
}

export default Header;
