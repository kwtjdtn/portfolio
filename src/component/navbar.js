import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className="main-nav">
      {/* <ul className="nav-ul"> */}
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      {/* </ul> */}
    </div>
  );
};

export default Navbar;
