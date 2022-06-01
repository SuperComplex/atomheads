import React, { useState, useEffect, Fragment } from "react";
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import Soc from 'components/Soc/Soc';
import Logo2 from 'components/Logo2/Logo2';
import Menu from 'components/Menu/Menu';
import { ReactComponent as HmbBtn } from "assets/icons/humb-btn.svg";
import './Header.scss';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobile, setmMobile] = useState(window.innerWidth<1200)
  useEffect(() => {    
    function handleResize() {
      setmMobile(window.innerWidth<1200);
    }    
    window.addEventListener("resize", handleResize);    
    handleResize();    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  
  return (
    <header className="header">
      {mobile ? (
        <Fragment>
          <Logo2/>
          <HmbBtn 
            className="Hmb"
            onClick={()=>setMenuOpen(true)}
          />
          {menuOpen&&<Menu toggleMenu = {setMenuOpen}/>}
        </Fragment>
      ):(
        <Fragment>
          <Logo/>
          <Nav/>
          <Logo2/>
          <Soc/>
          <button className="connect-wallet">
            Connect wallet
          </button>
          </Fragment>
      )}
    </header>
  );
}

export default Header;
