import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { fetchEntries } from './../actions';
import EntryCard from './EntryCard';

class EntryList extends Component {
  componentWillMount() {
    this.props.fetchEntries(this.props.userInfo.googleId);
  }
  render() {
    return (
      <div>
        <Form unstackable>
          <EntryCard />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { entries: state.user.entries, userInfo: state.user.userInfo };
};

export default connect(mapStateToProps, {
  fetchEntries
})(EntryList);
