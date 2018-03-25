import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { fetchEntries } from './../actions';
import EntryCard from './EntryCard';

class EntryList extends Component {
  componentWillMount() {
    this.props.fetchEntries(this.props.userInfo.googleId);
    this.renderCards();
  }
  renderCards = entries => {
    return _.map(entries, (value, key) => {
      return <EntryCard key={key} entryId={key} entry={value} />;
    });
  };
  render() {
    const { entries } = this.props;
    return (
      <div>
        <Form unstackable>{this.renderCards(entries)}</Form>
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
