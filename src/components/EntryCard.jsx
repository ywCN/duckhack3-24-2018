import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { deleteEntry, updateEntry } from './../actions';

class EntryCard extends Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      editing: false,
      description: this.props.entry.description,
      amount: this.props.entry.amount,
      cookie: cookies.get('200-ok-error-userInfo')
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    this.props.deleteEntry(this.state.cookie, this.props.entryId);
  };

  handleSave = () => {
    const { description, amount, cookie } = this.state;
    this.setState({ editing: false });
    if (!isNaN(amount)) {
      this.props.updateEntry(cookie, this.props.entryId, {
        description,
        amount
      });
    } else {
      this.setState({
        description: '',
        amount: 0
      });
    }
  };

  render() {
    const { description, amount, editing } = this.state;
    const saveOrEditButton = editing ? (
      <Form.Button
        icon="save"
        color="green"
        onClick={this.handleSave}
        disabled={isNaN(amount) || amount === '' ? true : false}
      />
    ) : (
      <Form.Button icon="edit" color="blue" onClick={this.handleEdit} />
    );

    return (
      <Form.Group widths={3}>
        <Form.Input
          fluid
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          readOnly={!editing}
        />
        <Form.Input
          fluid
          name="amount"
          defaultValue={amount}
          onChange={this.handleChange}
          readOnly={!editing}
        />
        <Button.Group>
          {saveOrEditButton}
          <Form.Button
            style={{ marginLeft: '10px' }}
            icon="delete"
            color="red"
            onClick={this.handleDelete}
          />
        </Button.Group>
      </Form.Group>
    );
  }
}

export default connect(null, {
  deleteEntry,
  updateEntry
})(EntryCard);
