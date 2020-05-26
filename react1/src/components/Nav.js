import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <ul className='navbar'>
        <li>
          <Link className='navLinks' to="/login">Login</Link>
        </li>
        <li>
          <Link className='navLinks' to="/login">See all projects</Link>
        </li>
      </ul>
    </div>
  );
};
