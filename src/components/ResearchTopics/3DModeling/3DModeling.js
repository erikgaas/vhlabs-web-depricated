import React, { Component } from 'react';
import '../../../styles/ResearchTopics.css';

class ThreeDModeling extends Component {
    render() {
        return (
            <div>
                <h2>Research > 3D Modeling</h2>
                <div id="researchTopicContainer">
                    <h3 id="researchTopicComponentMain"><a href="/research-3d-1" id="researchTopicATag">CarePrints</a></h3>
                    <h3 id="researchTopicComponentMain"><a href="/research-3d-2" id="researchTopicATag">Virtual Reality</a></h3> 
                    <h3 id="researchTopicComponentMain"><a href="/research-3d-3" id="researchTopicATag">Devices</a></h3>  
                    <h3 id="researchTopicComponentMainLast"><a href="/research-3d-4" id="researchTopicATag">Education</a></h3> 
                </div>
            </div>
        );
    }
}

export default ThreeDModeling;