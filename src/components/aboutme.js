import React, { Component } from 'react';
import headshot from '../images/about_me_photo.jpg';

class About extends Component {
    render() {
        return(
            <div className="about-me">
                <div className="about-me-header">
                    <h2>About Me</h2>
                    <p>Incoming computer science graduate student looking for entry-level internships </p>
                    <hr/>
                    <div className="about-me-text">
                        <div className="about-me-left">
                        <img src={headshot} alt="about-me-photo"/>
                            
                        </div>
                        <div className="about-me-right"> 
                            <p className="greeting">Hello! I'm Daniel Shvarts.</p>
                            <p> I'm an incoming graduate student at UCSD where I will be studying computer science with a specialization
                                in Artificial Intelligence. </p>
                            <p>I previously studied biochemistry at UCSD, wherein I was heavily involved in biochemical research and
                                contributed to several publications in the field. During my time doing research, I discovered the utility
                                of computer science and made the switch
                            </p>
                
                            
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default About;