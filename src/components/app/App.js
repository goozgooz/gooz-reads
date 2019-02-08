import './_app.scss';
import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import Home from '../home/Home';


class App extends Component {
  componentWillMount(){
    this.lock = new Auth0Lock(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
  }
  
  render() {
    return (
      <div className="App">
        <Home lock={this.lock} />
      </div>
    );
  }
}
export default App;
