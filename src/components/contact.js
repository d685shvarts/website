import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
  
                <div className="contact">
                    <h2>Contact</h2>
                    <hr />
                  <div className="contact-links"> 
                    {/* Linkedin */}
                    <a href="https://www.linkedin.com/in/daniel-shvarts-646ba1155/" rel="noopener noreferrer" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>

                    {/* Github */}
                    <a href="https://github.com/d685shvarts" rel="noopener noreferrer" target="_blank">
                        <i class="fab fa-github-square"></i>
                    </a>
                    <a href="mailto:d685shvarts@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i class="fas fa-envelope-square"></i>
                    </a>
                    <a href="https://drive.google.com/file/d/163gnNZ3JmfmYFyteFlM_ecGZOZzD-m77/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <i class="fab fa-readme"></i>
                    </a>
                    
                    
                </div>
                    <hr />  
         
            </div>
        )
    }
}

export default Contact;