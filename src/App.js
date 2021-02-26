import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import './App.css';

class App extends Component {
  state = {
    jobs: [],
    portfolio: []
  }
  
  componentDidMount = () => {
    const jobs = [
      {title: "Tester",
      from: "Jan-2020",
      to: "Jan-2021",
      description: "Test things",
      tasks: [
        {description: "Help users"}
      ], 
      technologies: [
        {image: "csharp",
        name:"C#"},
        {image: "mysql",
        name:"MySQL"}
      ]},
      {title: "Developer",
      from: "Jan-2019",
      to: "Jan-2020",
      description: "Building Apps",
      tasks: [
        {description: "Write code in JavaScript"}
      ], 
      technologies: [
        {image: "javascript",
        name:"JavaScript"}
      ]}
    ];

    const portfolio = [];

    this.setState({jobs, portfolio});
  }

  render(){

    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Intro/>
          </Route>
          <Route path="/resume" component={() => <Resume jobs={this.state.jobs} />} />
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
