import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { fetchEntries } from './../actions';
import EntryCard from './EntryCard';

class EntryList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    const cookie = cookies.get('200-ok-error-userInfo');
    this.props.fetchEntries(cookie);
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
  return { entries: state.user.entries };
};

export default connect(mapStateToProps, {
  fetchEntries
})(EntryList);
