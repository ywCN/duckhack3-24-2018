import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogLogin from './GoogLogin';

class LandingPage extends Component {
  render() {
    console.log(this.props.loginStatus);
    console.log(this.props.loginStatus);
    console.log(this.props.loginStatus);
    const loginFailWarning =
      this.props.loginStatus === false ? (
        <h1>Login failed. Please try again.</h1>
      ) : null;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Manage your spending.</h1>
        <h1>Control your budget.</h1>
        <GoogLogin />
        {loginFailWarning}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loginStatus: state.user.loginStatus };
}

export default connect(mapStateToProps)(LandingPage);
