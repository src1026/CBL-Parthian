import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top shadow-sm">
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
          style={{ color: "#16a34a" }} // Tailwind's green-600
          >
            Parthian Battery Solutions
          </NavLink>
        </div>

        {/* Nav Links */}
        <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
          <li className="nav-item">
            <NavLink className="nav-link text-gray-600 hover:text-green-600 transition-colors duration-200" to="/">Home</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/product">Products</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link text-gray-600 hover:text-green-600 transition-colors duration-200" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-gray-600 hover:text-green-600 transition-colors duration-200" to="/supplier">Suppliers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-gray-600 hover:text-green-600 transition-colors duration-200" to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="buttons d-flex align-items-center gap-3">
          <NavLink 
            to="/login" 
            className="btn bg-white text-green-600 border-2 border-green-600 hover:border-green-700 hover:text-green-700 transition-colors duration-200 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaSignInAlt className="text-lg" />
            <span>Login</span>
          </NavLink>
          <NavLink 
            to="/register" 
            className="btn bg-white text-green-600 border-2 border-green-600 hover:border-green-700 hover:text-green-700 transition-colors duration-200 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaUserPlus className="text-lg" />
            <span>Register</span>
          </NavLink>
          <NavLink 
            to="/cart" 
            className="btn bg-white text-green-600 border-2 border-green-600 hover:border-green-700 hover:text-green-700 transition-colors duration-200 px-4 py-2 rounded-lg flex items-center gap-2 relative"
          >
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
            {state?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {state.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;