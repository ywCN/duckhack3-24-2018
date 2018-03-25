import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { setCurrentEntry, deleteEntry, updateEntry } from './../actions';

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
    this.setState({ editing: false });
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
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
        />
        <Form.Input
          name="amount"
          defaultValue={amount}
          onChange={this.handleChange}
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
  setCurrentEntry,
  deleteEntry,
  updateEntry
})(EntryCard);
