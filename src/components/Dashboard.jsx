import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import EntryList from './EntryList';
import LandingPage from './LandingPage';
import { createEmptyEntry } from './../actions';

class Dashboard extends Component {
  render() {
    const googleId = window.localStorage.getItem('200-ok-error-userInfo');
    if (!googleId) {
      this.props.history.push('/');
      return <LandingPage />;
    } else {
      return (
        <div>
          <h3>Click Add Entry to add a new entry. Then Edit it.</h3>
          <EntryList />
          <Button
            primary
            content="Add Entry"
            icon="plus"
            labelPosition="right"
            onClick={() => this.props.createEmptyEntry(googleId)}
          />
        </div>
      );
    }
  }
}

export default connect(null, { createEmptyEntry })(withRouter(Dashboard));
