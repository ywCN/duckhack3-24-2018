import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEntries } from './../actions';

class EntryList extends Component {
  render() {
    return (
      <div>
        <div>I am an entry!</div>
        <div>I am an entry!</div>
        <div>I am an entry!</div>
        <div>I am an entry!</div>
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
