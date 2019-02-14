/* global localStorage */
import React from 'react';
import goodreads from 'goodreads-api-node';

const LogIn = ({addToken}) => {
  const credentials = {
    key: process.env.REACT_APP_GOODREADS_KEY,
    secret: process.env.REACT_APP_GOODREADS_SECRET
  }
  
  const gr = goodreads(credentials);
  gr.initOAuth('https://gooz-reads-goozgooz.c9users.io/')
  const showLogIn = () => {
    console.log(gr);
  }
  
  return (
    <div onClick={showLogIn}> Log In </div>
  )
};

export default LogIn;