import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherStation } from './WeatherStation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Is it windy?</h1>
        </header>
        <WeatherStation name='Test station'/>
      </div>
    );
  }
}

export default App;
