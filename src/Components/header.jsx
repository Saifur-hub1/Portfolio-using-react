import React from "react";
import '../style/header.css';
// import helloSvg from '/images/logo/codecave.svg';
const Header = ()=>{
  return (
    <header>
      <a href="#" className="logo">The Code Cave</a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    </header>
  );
}

export default Header;