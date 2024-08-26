import React from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget.jsx';
import Menu from './Menu.jsx';
import Total from './Total.jsx';
import '../../style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg flex-row">
        <div className="container-fluid justify-content-between">
          <Link to="/">
            <Logo />
          </Link>
          <Menu menu1="Home" menu2="Salado" menu3="Dulce" menu4="Bebidas" />
          <div className="d-flex align-items-center flex-column">
            <Total />
            <CartWidget />
           </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;