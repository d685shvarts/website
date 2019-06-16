import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return(
                <div className="resume">
                    <div className="resume-left">
                        <h4>{this.props.name}</h4>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </div>
                    <div className="resume-right"> 
                        <strong>{this.props.resumeHeader}</strong>
                        <p>{this.props.description}
                        <a href={this.props.link} rel="noopener noreferrer" target="_blank">
                        {this.props.linkHeader}
                        </a>
                        </p>
                    </div>
                </div>
        )
    }
}

export default Resume;