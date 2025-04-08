import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo and Brand */}
        <div className="d-flex align-items-center">
          <img
            src="https://i0.wp.com/parthianwv.com/wp-content/uploads/2023/02/cropped-cropped-Logo-Parthian-Battery-Solutions_Color-1.png?w=517&ssl=1"
            alt="Parthian Logo"
            style={{ width: '40px', height: 'auto' }}
            className="me-2"
          />
          <NavLink to="/"
          className="navbar-brand fw-bold"
          style={{ color: "#16a34a" }} // Tailwind’s green-600
          >
            Parthian Battery Solutions
          </NavLink>
        </div>

        {/* Nav Links */}
        <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/product">Products</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/supplier">Suppliers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="buttons d-flex align-items-center">
          <NavLink to="/login" className="btn btn-outline-dark me-2">
            <i className="fa fa-sign-in-alt me-1"></i> Login
          </NavLink>
          <NavLink to="/register" className="btn btn-outline-dark me-2">
            <i className="fa fa-user-plus me-1"></i> Register
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark">
            <i className="fa fa-shopping-cart me-1"></i> Cart ({state?.length || 0})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;