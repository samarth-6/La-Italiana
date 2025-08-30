import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../../store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl" onClick={closeMenu}>
            <span className="italic text-3xl text-red-400">
              La Italiana
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-400 transition-colors duration-200">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-red-400 transition-colors duration-200">
              Catalogue
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-400 transition-colors duration-200">
              About
            </Link>
            <Link to="/call" className="text-gray-700 hover:text-red-400 transition-colors duration-200">
              Customer Service
            </Link>
            <Link to="/onlineordering" className="text-gray-700 hover:text-red-400 transition-colors duration-200">
              Order Online
            </Link>
            <Link to="/service" className="text-gray-700 hover:text-red-400 transition-colors duration-200">
              Customer Reviews
            </Link>
            
            {!isLoggedIn ? (
              <>
                <Link to="/signup" className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-200">
                  Sign Up
                </Link>
                <Link to="/signin" className="border border-red-400 text-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-200">
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <button onClick={logout} className="text-gray-700 hover:text-red-500 transition-colors duration-200">
                  Log Out
                </button>
                <Link to="#" className="ml-2">
                  <img 
                    alt="user profile" 
                    className="h-10 w-10 rounded-full border-2 border-gray-200 hover:border-red-400 transition-colors duration-200" 
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                  />
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} onClick={closeMenu}></div>

        <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <span className="italic text-2xl text-red-400 font-bold">La Italiana</span>
            <button
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-lg text-gray-700 hover:text-red-400 transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="block text-lg text-gray-700 hover:text-red-400 transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-lg text-gray-700 hover:text-red-400 transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/call" 
                  className="block text-lg text-gray-700 hover:text-red-400 transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/onlineordering" 
                  className="block text-lg text-gray-700 hover:text-red-400 transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link 
                  to="/service" 
                  className="block text-lg text-gray-700 hover:text-red-400 transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  Customer Reviews
                </Link>
              </li>
              
              <li className="pt-4 border-t border-gray-200">
                {!isLoggedIn ? (
                  <div className="space-y-3">
                    <Link 
                      to="/signup" 
                      className="block w-full bg-red-400 text-white text-center px-4 py-3 rounded-lg hover:bg-red-500 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Link>
                    <Link 
                      to="/signin" 
                      className="block w-full border border-red-400 text-red-400 text-center px-4 py-3 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Sign In
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 py-2">
                      <img 
                        alt="user profile" 
                        className="h-12 w-12 rounded-full border-2 border-gray-200" 
                        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                      />
                      <span className="text-gray-700 font-medium">My Profile</span>
                    </div>
                    <button 
                      onClick={logout} 
                      className="block w-full bg-red-500 text-white text-center px-4 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;