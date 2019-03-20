import React, { Component } from 'react';
import { Cell, Grid} from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume" col={12}> 
                        <h2> Education> </h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;