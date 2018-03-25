import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { fetchEntries } from './../actions';
import EntryCard from './EntryCard';

class EntryList extends Component {
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
  return { entries: state.user.entries };
};

export default connect(mapStateToProps, {
  fetchEntries
})(EntryList);
