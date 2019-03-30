import React, { Component } from 'react';
import final from '../images/162_final.JPG';
import website from '../images/website.JPG';

class Projects extends Component {
    render() {
        return(
            <div className="projects">
                <h2>Projects</h2>
                <hr/>
                <div className="projects-container">
                <div className="project-info">
                <a href="https://github.com/d685shvarts/finalProject" rel="noopener noreferrer" target="_blank">
                        <img src={final} className="projects-image"></img>
                        <div className="expand-background">
                            <i class="glyphicon glyphicon-new-window"></i>
                        </div>
                        <div className="projects-overlay">
                            <div className="projects-text">
                    
                                <h3>Island Survival Game</h3>
                                <p>Text-Based RPG to survive and escape from an island</p>
                                <p>
                                <strong>Tags:</strong>
                                <br></br>
                                C++, Game
                                </p>
                            </div>
                           
                        </div>
                        </a>
                </div> 

                <div className="project-info">
                <a href="https://github.com/d685shvarts/website" rel="noopener noreferrer" target="_blank">
                        <img src={website} className="projects-image"></img>
                        <div className="expand-background">
                            <i class="glyphicon glyphicon-new-window"></i>
                        </div>
                        <div className="projects-overlay">
                            <div className="projects-text">
                                <h3>Personal Website</h3>
                                <p>This website! Feel free to take a look at the source code. </p>
                                <p>
                                <strong>Tags:</strong>
                                <br></br>
                                JavaScript, ReactJS
                                </p>
                            </div>
                           
                        </div>
                        </a>
                </div> 
      
                </div>
                </div>
        )
    }
}

export default Projects;