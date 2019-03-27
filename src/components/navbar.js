import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
        <div id="nav-bar">
            <div className="nav-content">
            <li className="nav-item">
            <Link onClick={this.scrollToTop}>Home</Link>
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
            <Link to="/projects">Projects</Link>
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
