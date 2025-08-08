import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center px-6 py-4 border-b">
      <img src={assets.logo} alt="Tomato Logo" className="h-10" />
      <img
        src={assets.profile_image}
        alt="Profile"
        className="h-10 w-10 rounded-full object-cover"
      />
    </div>
  );
};

export default Navbar;
