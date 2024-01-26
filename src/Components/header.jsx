import {useEffect} from "react";
import React from "react";

import '../style/header.css';

const Header = ()=>{
  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector("header");
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
      <header className="header">
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