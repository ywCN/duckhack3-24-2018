import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import EntryList from './EntryList';
import LandingPage from './LandingPage';
import { createEmptyEntry } from './../actions';

class Dashboard extends Component {
  render() {
    const cookies = new Cookies();
    const cookie = cookies.get('200-ok-error-userInfo');
    if (cookie) {
      return (
        <div>
          <h3>Click Add Entry to add a new entry. Then Edit it.</h3>
          <EntryList />
          <Button
            primary
            content="Add Entry"
            icon="plus"
            labelPosition="right"
            onClick={() => this.props.createEmptyEntry(cookie)}
          />
        </div>
      );
    } else {
      this.props.history.push('/');
      return <LandingPage />;
    }
  }
}

export default connect(null, { createEmptyEntry })(withRouter(Dashboard));
