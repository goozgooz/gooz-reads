/* global localStorage */
import './_app.scss';
import React, { Component } from 'react';
import Home from '../home/Home';
import Lock from '../auth/Auth.js';


class App extends Component {
  state = {
    accessToken: null
  }
  
  componentDidMount(){
    if (localStorage.accessToken) {
      this.setState({accessToken: localStorage.accessToken});
    }
  }
  
  addToken = (token) => {
    this.setState({accessToken: token});
  }
  
  
  render() {
    let authenticated = this.state.accessToken;

    return (
      <div className="App">
        {authenticated ? 
          <Home  />
        :
          <Lock addToken={this.addToken}/>
        }
      </div>
    );
  }
}
export default App;
