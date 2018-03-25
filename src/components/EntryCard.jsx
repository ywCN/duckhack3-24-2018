import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { deleteEntry, updateEntry } from './../actions';

class EntryCard extends Component {
  state = {
    editing: false,
    description: this.props.entry.description,
    amount: this.props.entry.amount,
    googleId: window.localStorage.getItem('200-ok-error-userInfo')
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    this.props.deleteEntry(this.state.googleId, this.props.entryId);
  };

  handleSave = () => {
    const { description, amount, googleId } = this.state;
    this.setState({ editing: false });
    this.props.updateEntry(googleId, this.props.entryId, {
      description,
      amount
    });
  };

  render() {
    const { description, amount, editing } = this.state;
    const saveOrEditButton = editing ? (
      <Form.Button icon="save" color="green" onClick={this.handleSave} />
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
