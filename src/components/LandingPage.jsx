import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import GoogLogin from './GoogLogin';
import Dashboard from './Dashboard';

class LandingPage extends Component {
  render() {
    const cookies = new Cookies();
    const cookie = cookies.get('200-ok-error-userInfo');
    if (cookie) {
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
