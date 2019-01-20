import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home.js';
import Footer from './components/Footer.js';


import Research from './components/Research.js';
import ResearchTopic from './components/ResearchTopic.js';
import ResearchTopicWriteup from './components/ResearchTopicWriteup.js';

import Outreach from './components/Outreach.js';
import Clinical from './components/Clinical';

import About from './components/About.js';
import Directions from './components/Directions.js';
import Collaborators from './components/Collaborators.js';
import Gift from './components/Gift.js';
import Affiliations from './components/Affiliations.js';
import News from './components/News.js';
import Media from './components/Media.js';
import Publications from './components/Publications.js';
import Contact from './components/Contact.js';



import ThreeDModeling from './components/ResearchTopics/3DModeling/3DModeling.js';
        import CarePrints from './components/ResearchTopics/3DModeling/CarePrints.js';
        import VirtualReality from './components/ResearchTopics/3DModeling/VirtualReality.js';
        import Devices from './components/ResearchTopics/3DModeling/Devices.js';
        import Education from './components/ResearchTopics/3DModeling/Education.js';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <NavBar />


          <Route exact path="/" component={Home} />

          <Route path="/research" component={Research} />
          <Route path="/research/:topic" component={ResearchTopic} />
          <Route path="/research/:topic/:writeup" component={ResearchTopicWriteup} />

          <Route path="/outreach" component={Outreach} />
          <Route path="/clinical" component={Clinical} />


          <Route path="/about" component={About} />
          <Route path="/directions" component={Directions} />
          <Route path="/collaborators" component={Collaborators} />
          <Route path="/gift" component={Gift} />
          <Route path="/affiliations" component={Affiliations} />
          <Route path="/news" component={News} />
          <Route path="/media" component={Media} />

          <Route path="/publications" component={Publications} />

          <Route path="/contact" component={Contact} />




          <Route path="/research-3d" component={ThreeDModeling} />
                  <Route path="/research-3d-1" component={CarePrints} />
                  <Route path="/research-3d-2" component={VirtualReality} />
                  <Route path="/research-3d-3" component={Devices} />
                  <Route path="/research-3d-4" component={Education} />
          <Footer />
        </div>


      </Router>
    );
  }
}

export default App;
