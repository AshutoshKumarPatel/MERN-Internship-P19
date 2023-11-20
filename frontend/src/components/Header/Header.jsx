import React from 'react';
import './styles.css';

const Header = ({ isLoggedIn, onGetStartedClick, onProfileClick }) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <span className="text-3xl font-bold font-pacifico text-red-500">aayojan</span>
      </div>

      <div>
        <nav className="space-x-4 font-poppins text-xl">
          <a href="/">Weddings</a>
          <a href="/about">Birthdays</a>
          <a href="/contact">Concerts</a>
          <a href="/contact">Educational</a>
          <a href="/contact">Corporate</a>
        </nav>
      </div>

      {/* Right section with "Get Started" button and conditional profile icon */}
      <div className="flex items-center space-x-4">
        <button 
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition"
          onClick={onGetStartedClick}
        >
          Get Started
        </button>
        {isLoggedIn && (
          <span 
            className="cursor-pointer text-xl"
            onClick={onProfileClick}
          >
            {/* Add your profile icon here */}
            🌟
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
