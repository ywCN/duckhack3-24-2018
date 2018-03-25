import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import EntryList from './EntryList';
import { createEmptyEntry } from './../actions';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <EntryList />
        <Button
          content="Add Entry"
          icon="plus"
          labelPosition="right"
          onClick={this.props.createEmptyEntry}
          // onClick={() => console.log('add entry clicked')}
        />
      </div>
    );
  }
}

export default connect(null, { createEmptyEntry })(Dashboard);
