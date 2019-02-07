import './_app.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileActions from '../../actions/profile';


import Navbar from '../navbar/Mobile.js';

class App extends Component {
  render() {
    const {dispatch, profile} = this.props;
    const fetchProfile = bindActionCreators(ProfileActions.fetchProfile, dispatch);
    console.log({profile})
    return (
      <div className="App">
        <Navbar fetchProfile={fetchProfile}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(mapStateToProps)(App);
