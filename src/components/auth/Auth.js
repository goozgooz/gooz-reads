/* global localStorage */
import React from 'react';
import Auth0Lock from 'auth0-lock';

const Lock = (props) => {
  const lock = new Auth0Lock(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
  lock.on("authenticated", (authResult) => {
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        console.log(error);
        return;
      }
   
      localStorage.setItem("accessToken", authResult.accessToken);
      localStorage.setItem("profile", JSON.stringify(profile));
      props.test(authResult.accessToken);
    });
  });
  
  const showLogIn = () => {
    lock.show();
  }
  return (
    <div onClick={showLogIn}> Log In </div>
  )
};
export default Lock;