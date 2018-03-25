import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import EntryList from './EntryList';
import LandingPage from './LandingPage';
import { createEmptyEntry } from './../actions';

class Dashboard extends Component {
  render() {
    if (!this.props.userInfo) {
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
            onClick={() =>
              this.props.createEmptyEntry(this.props.userInfo.googleId)
            }
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { userInfo: state.user.userInfo };
};

export default connect(mapStateToProps, { createEmptyEntry })(
  withRouter(Dashboard)
);
