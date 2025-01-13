import {
  Navbar,
  Nav
  
  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import React from 'react';

const NavbarMenu = () => {
  return (
    <div>
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand href="/">PRODUCTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
            <Nav className="mr-auto">
              <NavLink className='show-products-nav' to='/'>Products</NavLink>
              <NavLink className='add-product-nav' to='/addproduct'>Add Products</NavLink>
            </Nav>
    </Navbar>
    </div>
  );
};
export default NavbarMenu;