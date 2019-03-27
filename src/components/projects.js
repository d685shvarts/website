import React, { Component } from 'react';
import final from '../images/162_final.JPG';

class Projects extends Component {
    render() {
        return(
            <div className="projects">
                <h2>Projects</h2>
                <hr/>
                <div className="projects-grid">
                <a href="https://github.com/d685shvarts/finalProject">
                    <img src={final}></img>
                </a>

                </div>

            </div>
        )
    }
}

export default Projects;