import React, { Component } from 'react';
import About from './aboutme.js';
import Experience from './experience.js';

class Landing extends Component {
    render() {
        return(
        <div className="home">
            <div className="landing-page">
                <img 
                src="https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"
                alt="danielPicture"
                className="danielPicture"/>
                <div className="banner-text">
                    <h1>Daniel Shvarts</h1>
                <hr />

                <p >
                    C++ | JavaScript | Loving Tina
                </p>
                
                </div>

                
                <div className="contact-home"> 
                    {/* Linkedin */}
                    <a href="https://www.linkedin.com/in/daniel-shvarts-646ba1155/" rel="noopener noreferrer" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>

                    {/* Github */}
                    <a href="https://github.com/d685shvarts" rel="noopener noreferrer" target="_blank">
                        <i class="fab fa-github-square"></i>
                    </a>
                </div>

            </div>
                       
            <div className="about-me-page">
                    <About />
            </div>  
              
                    <Experience />
        </div>
                
        )
    }
}

export default Landing;