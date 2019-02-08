import './_app.scss';
import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
console.log(Auth0Lock);
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
