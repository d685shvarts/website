import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
        <div id="nav-bar">
            <div className="nav-content" data-spy='scroll"'>
            <li className="nav-item">
            <Link activeClass="active"
              to="landing-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Home</Link>
            </li>
            <li className="nav-item">
            <Link
              activeClass="active"
              to="about-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>
              About Me
            </Link>
            </li>
            <li className="nav-item">
            <Link 
              activeClass="active"
              to="experience-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Resume</Link>
              </li>
              <li className="nav-item">
            <Link activeClass="active"
              to="projects-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Projects</Link>
            </li>
            <li className="nav-item">
            <Link 
              activeClass="active"
              to="contact-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Contact</Link>
            </li>
            </div>
        </div>
      
    );
  }
}
