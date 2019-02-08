import './_app.scss';
import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import Home from '../home/Home';


class App extends Component {
  state = {
    idToken: null,
  }
  
  componentWillMount(){
    this.lock = new Auth0Lock(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
    this.lock.on("authenticated", function(authResult) {
      this.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          console.log(error);
          return;
        }
     
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
     
        // Update DOM
      });
    });
  };
    
  
  render() {
    return (
      <div className="App">
        <Home lock={this.lock} idToken={this.idToken} />
      </div>
    );
  }
}
export default App;
