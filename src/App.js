import React, { Component } from 'react'
import './App.css';
import Container from './components/container'

import Header from './components/header'

class App extends Component {
  render() { 
    return (  
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <Container className="my-body"/>  
        </div>
      </React.Fragment>
    );
  }
}

export default App;
 
