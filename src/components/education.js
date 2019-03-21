import React, { Component } from 'react';
import { Cell, Grid} from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col ={4}> 
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col ={8}>
                <h3 style={{marginTop: '0px'}}>{this.props.undergradName}</h3>
                <p>{this.props.undergradDescription}</p>
                 </Cell>
                
            </Grid>
        )
    }
}

export default Education;