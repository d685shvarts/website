import React, { Component } from 'react';
import './App.css';
import Main from "./components/main";
import NavBar from "./components/navbar";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Landing from './components/landingpage'
import About from './components/aboutme';
import Experience from './components/experience';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



 
class App extends Component {
  render() {
    return (
      <div className="main-page">
        
        <NavBar />
        
        <Element name="landing-scroll"> 
                  <Landing />
          </Element>
      
                

                  <Element name="about-scroll">
                    <About />
                  </Element>
                  <Element name="experience-scroll">
                    <Experience />
                  </Element>
                  
                  <Element name="projects-scroll"> 

                  <Projects />
                  </Element>
                  <Element name="contact-scroll"> 

                  <Contact />
                  </Element>

            </div>  
              
                    

    );
  }
}

export default App;
