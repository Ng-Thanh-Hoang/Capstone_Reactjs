import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../sass/index.scss';
import { useSelector } from 'react-redux';

const Index = () => {
  const cartStore = useSelector(state => state.cartSliceReducer.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedToken = localStorage.getItem('accessToken');
    return !!storedToken;
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }


  return (
    <>
      <header className='container'>
        <header className='d-flex justify-content-between py-2 bg-black'>
          <a href="/">
            <img src="../../public/img/Logo.png" alt="" className='' />
          </a>
          <div className="menu">
            <div className="form-group text-white d-inline">
              <i className="fa fa-search"></i>
              <NavLink to='/search' className='text-decoration-none ms-2'>Search</NavLink>
            </div>
            <NavLink to='/carts' className="form-group text-white d-inline ms-2">
              <i className="fa fa-shopping-cart text-secondary"></i>
              ({cartStore.length})
            </NavLink>
            {
              isLoggedIn ? (
                <NavLink to="/login" className="ms-2 text-decoration-none text-white" onClick={handleLogout} >
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login" className="ms-2 text-decoration-none text-white" onClick={handleLogin}>
                  Login
                </NavLink>
              )}
            <NavLink to='/register' className='ms-2 text-decoration-none text-white'>Register</NavLink>
          </div>
        </header>
        <header className='header-nav pt-2'>
          <nav className='menu'>
            <NavLink to='' className='text-black text-decoration-none active'>Home</NavLink>
            <a href="#" className='mx-4' style={{ color: '#636363', fontWeight: 400 }}>Men</a>
            <a href="#" style={{ color: '#636363', fontWeight: 300 }}>Women</a>
            <a href="#" className='mx-4 text-black'>Kid</a>
            <a href="#" className='text-black'>Sport</a>
          </nav>
        </header>
      </header >
      <Outlet />
      <footer className='footer container'>
        <div className="row">
          <div className="col-3 end">
            <h6>GET HELP</h6>
            <a href="#">Home</a>
            <a href="#">Nike</a>
            <a href="#">Adidas</a>
            <a href="#">Contact</a>
          </div>
          <div className="col-4 end">
            <h6>SUPPORT</h6>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
            <a href="#">Phone</a>
          </div>
          <div className="col-4 add">
            <h6>REGISTER</h6>
            <a href="#">Register</a>
            <a href="#">Login</a>
          </div>
        </div>
      </footer>
      <footer className='footer-end text-center container' style={{ background: '#d9d9d9' }}>
        <p className='py-3'> © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</p>
      </footer>
    </>
  );
}

export default Index
