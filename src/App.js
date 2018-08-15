import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ClippedDrawer from './SideNav.js';

class App extends Component {

  render() {
    return (
		<div className="App">
  			<ClippedDrawer />
  		</div>
    );
  }
}

export default App;
