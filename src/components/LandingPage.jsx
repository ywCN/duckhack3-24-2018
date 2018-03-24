import React, { Component } from 'react';

import GoogLogin from './GoogLogin';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Manage your spending.</h1>
        <h1>Control your budget.</h1>
        <GoogLogin />
      </div>
    );
  }
}

export default LandingPage;
