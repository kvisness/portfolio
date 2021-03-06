import React, { Component } from 'react';
import './App.css';
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Home from '../Home/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <div>
            {/* <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul> */}
            <Route exact path="/" component={Home} />           
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
