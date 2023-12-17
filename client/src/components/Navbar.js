"use client"
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase(); 
  
  function isActive(path) {
    return currentPath === path.toLowerCase(); // Convert to lowercase
  }

  return (
    <>
    <div className='navbar'>
      <div className="navItem">
    <Link className='link' to='/' style={{ color: isActive('/') ? '#0093FF' : '#89CDFF' }} >
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/') ? '/home_s.png' : '/home.png'})`
    }}></span>
        <span className="nav__name">Home</span>
    </Link>
    </div>
    <div className="navItem">
    <Link className='link' to="/invite" style={{ color: isActive('/invite') ? '#0093FF' : '#89CDFF' }}>
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/invite') ? '/group_s.png' : '/group.png'})`
    }}></span>
        <span className="nav__name">Invite</span>
    </Link>
    </div>
    <div className="navItem">
    <Link className='link' to="/recharge" style={{ color: isActive('/recharge') ? '#0093FF' : '#89CDFF' }}>
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/recharge') ? '/wallet_s.png' : '/wallet.png'})`
    }}></span>
        <span className="nav__name"> Recharge</span>
    </Link>
    </div>
    <div className="navItem">
    <Link className='link' to="/my" style={{ color: isActive('/my') ? '#0093FF' : '#89CDFF' }}>
    <span className="nav__icon" style={{
      backgroundImage: `url(${isActive('/my') ? '/my_s.png' : '/my.png'})`
    }}></span>
        <span className="nav__name">My</span> 
    </Link>
    </div>
  </div>
  </>
  )
}

export default Navbar