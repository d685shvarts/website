import React, { Component } from 'react';
import { Cell, Grid} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png"
                        alt="danielPicture"
                        className="danielPicture"/>
                        <div className="banner-text">
                            <h1>Daniel Shvarts</h1>
                        <hr />

                        <p>
                            C++ | JavaScript | Loving Tina
                        </p>
                      
                        <div className="social-links1"> 
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
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;