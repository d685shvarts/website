import React, { Component } from 'react';
import Resume from './resume';


class Experience extends Component {
    render() {
        return(
            <div className="experiences">

                <div className="experiences-header">
                    <h2>Experiences</h2>
                    <hr/>
                </div> 

                <h3>Education</h3>
                    <Resume
                    startYear = {2019}
                    endYear = "Present"
                    name = "University of California, San Diego"
                    resumeHeader = "M.S. Computer Science w/ Specialization in Artificial Intelligence"
                    description = {"Incoming graduate student hoping to expand upon my computer science fundamentals \
                    through graduate-level courses."}/>

                    <Resume
                    startYear = {2018}
                    endYear = {2019}
                    name = "Extension Coursework"
                    resumeHeader = "B.S. Computer Science, GPA: 4.00"
                    description = {"Completing prerequisite foundational courses in order to prepare \
                    myself for a graduate education in CS. So far I've completed introductory programming courses, data structures, and computer architecture \
                    and assembly language and I plan on completing algorithims and operating systems during the summer."}/>   

                    <Resume
                    startYear = {2014}
                    endYear = {2018}
                    name = "University of California, San Diego"
                    resumeHeader = "B.S. Biochemistry/Chemistry, GPA: 3.84"
                    description = {"My first degree was in biochemistry wherein I was heavily involved in undergraduate \
                    research at a variety of labs. My research resulted in two publications and led to my introduction to computer science."}/>

                    <hr/>

                    <h3>Careers</h3>
                    <Resume
                    startYear = {2018}
                    endYear = {2019}
                    name = "University of Southern California"
                    resumeHeader = "Research Assistant"
                    description = {"Investigated the ability of electrical fields to direct axonal growth and their application\
                    to optic nerve regeneration. Paper coming soon, but in the meantime you can explore the labs research here: "}
                    link = {"https://eye.keckmedicine.org/doctors/kimberly-gokoffski-md-phd/"}
                    linkHeader = "Gokoffski Lab"/>
                    <Resume
                    startYear = {2016}
                    endYear = {2018}
                    name = "University of California, San Diego"
                    resumeHeader = "Research Assistant"
                    description = "Investigated how membrane microdomains (enriched in caveolin) regulate cardiovascular function."/>
                    <Resume
                    startYear = {2015}
                    endYear = {2016}
                    name = "University of California, San Diego"
                    resumeHeader = "Research Assistant"
                    description = {"Developed an enzymatic fluoresence assay to detect ultratrace aresanate in ground water and crops. \
                    You can read the paper here: "}
                    link = {"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5665019/"}
                    linkHeader = "A Highly Sensitive Enzymatic Catalysis System for Trace Detection of Arsenic in Water"/>

            </div>
 
        )
    }
}

export default Experience;