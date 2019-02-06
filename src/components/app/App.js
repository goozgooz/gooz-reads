import './_app.scss';
import React, { Component } from 'react';
import Navbar from '../navbar/Mobile';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
