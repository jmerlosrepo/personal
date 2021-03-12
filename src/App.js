import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import * as personalConstants from './constants';
import './App.css';

class App extends Component {
  state = {
    introName: "",
    career: "",
    presentation: "",
    profilePic: "",
    resumeJobs: [],
    portfolio: [],
    contactInfo: {}
  }
  
  componentDidMount = () => {
    fetch(`${personalConstants.HOST}:${personalConstants.PORT}${personalConstants.DATA_FILE}`)
    .then(res => res.json())
    .then(data => {
      const {introName, career, presentation, profilePic, resumeJobs, portfolio, contactInfo} = data.personal;
      console.log(portfolio);
      this.setState({introName, career, presentation, profilePic, resumeJobs, portfolio, contactInfo});
    });
  }

  render(){
    const {
    introName,
    career,
    presentation,
    profilePic,
    resumeJobs,
    portfolio, 
    contactInfo} = this.state; 
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Intro introName={introName} career={career} presentation={presentation} profilePic={profilePic}/>}/>
          <Route path="/resume" component={() => <Resume jobs={resumeJobs} />} />
          <Route path="/portfolio" component={() => <Portfolio portfolios={portfolio} />} />
          <Route path="/contact" component={() => <Contact info={contactInfo} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
