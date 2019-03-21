import React, { Component } from 'react';
import { Cell, Grid} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume" col={12}>

                    <h2>Education</h2>

                        <Education 
                        startYear = {2019}
                        endYear = "Present"
                        undergradName = "University of California, San Diego"
                        undergradDescription = "M.S. Computer Science"/>

                        <Education 
                        startYear = {2018}
                        endYear = {2019}
                        undergradName = "Oregon State University"
                        undergradDescription = "Post-Bacc Computer Science Coursework, GPA: 4.00"/>   

                        <Education
                        
                        startYear = {2014}
                        endYear = {2018}
                        undergradName = "University of California, San Diego"
                        undergradDescription = "B.S. Biochemistry/Chemistry, GPA: 3.84"/>

                        

                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;