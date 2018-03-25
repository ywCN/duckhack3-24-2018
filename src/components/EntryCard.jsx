import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import {
  // setCurrentEntry,
  deleteEntry,
  updateEntry
} from './../actions';

class EntryCard extends Component {
  state = {
    editing: false,
    description: this.props.entry.description,
    amount: this.props.entry.amount
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    this.props.deleteEntry(this.props.userInfo.googleId, this.props.entryId);
  };

  handleSave = () => {
    const { description, amount } = this.state;
    this.setState({ editing: false });
    this.props.updateEntry(this.props.userInfo.googleId, this.props.entryId, {
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
          <Form.Button icon="delete" color="red" onClick={this.handleDelete} />
        </Button.Group>
      </Form.Group>
    );
  }
}

const mapStateToProps = state => {
  return { userInfo: state.user.userInfo };
};

export default connect(mapStateToProps, {
  // setCurrentEntry,
  deleteEntry,
  updateEntry
})(EntryCard);
