import React, { Component } from 'react';
import { Cell, Grid} from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col ={4}> 
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col ={8}>
                <h3 style={{marginTop: '0px'}}>{this.props.jobName}</h3>
                <strong>
                    <a target="_blank" rel="noopener noreferrer" href="https://keck.usc.edu/faculty-search/kimberly-gokoffski/">
                    {this.props.workName}</a>
                </strong>
                <p>{this.props.jobDescription}</p>
                 </Cell>
                
            </Grid>
        )
    }
}

export default Experience;