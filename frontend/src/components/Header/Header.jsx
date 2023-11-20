import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ isLoggedIn, onProfileClick }) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div>
        {/* Link to the home route */}
        <Link to="/" className="text-3xl font-bold font-pacifico text-red-500">
          aayojan
        </Link>
      </div>

      <div>
        <nav className="space-x-4 font-poppins text-xl">
          <Link to="/birthday">Birthdays</Link>
        </nav>
      </div>

      {/* Right section with "Get Started" button and conditional profile icon */}
      <div className="flex items-center space-x-4">
        {/* Link to the /login route */}
        <Link to="/login" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition">
          Get Started
        </Link>
        {isLoggedIn && (
          <span className="cursor-pointer text-xl" onClick={onProfileClick}>
            {/* Add your profile icon here */}
            🌟
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
