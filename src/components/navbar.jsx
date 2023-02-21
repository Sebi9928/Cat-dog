import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
  
    <ul>
      <li><Link to="/my-images">My images</Link></li>
      <li><Link to="/upload">Upload images</Link></li>
      <li><Link to="/public-images">Public images</Link></li>
    </ul>
 
  );
};

export default Navbar;
