/* global localStorage */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileActions from '../../actions/profile';
import Navbar from '../navbar/Mobile';

class Home extends Component {
  componentWillMount() {
    const fetchProfile = bindActionCreators(ProfileActions.fetchProfile, this.props.dispatch);
    fetchProfile();
  }
  
  render() {
    const {profile} = this.props;
    return (
      <React.Fragment>
        <Navbar profile = {profile} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(mapStateToProps)(Home);