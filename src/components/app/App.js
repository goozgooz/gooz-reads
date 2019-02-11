/* global localStorage */

import './_app.scss';
import React, { Component } from 'react';
// import Auth0Lock from 'auth0-lock';
import Home from '../home/Home';
import Lock from '../auth/Auth.js';


class App extends Component {
  // componentWillMount(){
  //   const lock = new Auth0Lock(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
  //   lock.on("authenticated", function(authResult) {
  //     this.getUserInfo(authResult.accessToken, function(error, profile) {
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
     
  //       localStorage.setItem("accessToken", authResult.accessToken);
  //       localStorage.setItem("profile", JSON.stringify(profile));
  //     });
  //   });
  // };
  state = {
    accessToken: null
  }
  componentDidMount(){
    if (localStorage.accessToken) {
      this.setState({accessToken: localStorage.accessToken});
    }
  }
  test = (token) => {
    console.log(token);
    this.setState({accessToken: token})
  }
  
  
  render() {
    let authenticated = this.state.accessToken;
    console.log(authenticated)
    return (
      <div className="App">
        {authenticated ? 
          <Home  />
        :
          <Lock test={this.test}/>
        }
      </div>
    );
  }
}
export default App;
