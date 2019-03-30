import React, { Component } from 'react';
import Resume from './resume';


class Experience extends Component {
    render() {
        return(
            <div className="experiences">
                <div className="experiences-header">
                    <h2>Experiences</h2>
                    <p></p>
                    <hr/>
                </div> 
                <h3>Education</h3>
                <Resume
                startYear = {2019}
                endYear = "Present"
                name = "University of California, San Diego"
                resumeHeader = "M.S. Computer Science w/ Specialization in Artificial Intelligence"
                description = "Incoming graduate student hoping to expand upon my computer science fundamentals
                through graduate-level courses."/>

                <Resume
                startYear = {2018}
                endYear = {2019}
                name = "Oregon State University"
                resumeHeader = "B.S. Computer Science, GPA: 4.00"
                description = "Completing prerequisite fundamental courses in order to prepare 
                myself for a graduate education. So far I've completed introductory programming courses, data structures, and computer architecture
                and assembly language and I plan on completing algorithims and operating systems during the summer."/>   

                <Resume
                startYear = {2014}
                endYear = {2018}
                name = "University of California, San Diego"
                resumeHeader = "B.S. Biochemistry/Chemistry, GPA: 3.84"
                description = "My first degree was in biochemistry wherein I was heavily involved in undergraduate
                research at a variety of labs. My research resulted in two publications and also introduced me to the usefulness of
                computer science in solving problems."/>

                <hr/>

                <h3>Careers</h3>
                <Resume
                startYear = {2018}
                endYear = {2019}
                name = "University of Southern California"
                resumeHeader = "Research Assistant"
                description = "Investigated the ability of electrical fields to regenerate the optic nerve in order to restore
                vision in patients. You can read about my work in the lab [INSERT LINK HERE WHEN PUBLISHED]."/>

                <Resume
                startYear = {2016}
                endYear = {2018}
                name = "University of California, San Diego"
                resumeHeader = "Research Assistant"
                description = "Investigated how membrane microdomains (enriched in caveolin) regulate cardiovascular function "/>
                <Resume
                startYear = {2015}
                endYear = {2016}
                name = "University of California, San Diego"
                resumeHeader = "Research Assistant"
                description = "Developed an enzymatic fluoresence assay to detect ultratrace aresanate in ground water and crops.
                You can read about my findings here: "/>

            </div>
 
        )
    }
}

export default Experience;