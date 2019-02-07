import './_app.scss';
import React, { Component } from 'react';

import Home from '../home/Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
export default App;
