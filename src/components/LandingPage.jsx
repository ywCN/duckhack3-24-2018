import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import GoogLogin from './GoogLogin';
import Dashboard from './Dashboard';

class LandingPage extends Component {
  render() {
    const googleId = window.localStorage.getItem('200-ok-error-userInfo');
    if (googleId) {
      this.props.history.push('/dashboard');
      return <Dashboard />;
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Manage your spending.</h1>
          <h1>Control your budget.</h1>
          <GoogLogin />
        </div>
      );
    }
  }
}

export default withRouter(LandingPage);
