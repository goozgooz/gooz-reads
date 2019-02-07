import './_app.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileActions from '../../actions/profile';


import Navbar from '../navbar/Mobile.js';

class App extends Component {
  componentWillMount(){
    const fetchProfile = bindActionCreators(ProfileActions.fetchProfile, this.props.dispatch);
    fetchProfile();
  }
  render() {
    const {profile} = this.props;
    return (
      <div className="App">
        <Navbar 
          profile={profile}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(mapStateToProps)(App);
