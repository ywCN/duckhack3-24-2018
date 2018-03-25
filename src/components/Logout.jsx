import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import GoogLogin from './GoogLogin';
import Dashboard from './Dashboard';

class Logout extends Component {
  render() {
    const googleId = window.localStorage.getItem('200-ok-error-userInfo');
    if (googleId) {
      this.props.history.push('/dashboard');
      return <Dashboard />;
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Thank you for using Budget Manager!</h1>
          <GoogLogin />
        </div>
      );
    }
  }
}

export default withRouter(Logout);
