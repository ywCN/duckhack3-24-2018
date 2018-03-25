import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { setCurrentEntry } from './../actions';

class EntryCard extends Component {
  state = {
    description: this.props.entry.description,
    amount: this.props.entry.amount
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { description, amount } = this.state;
    console.log({ description, amount });
  };

  handleDelete = () => {
    console.log('delete button clicked');
  };

  render() {
    const { description, amount } = this.state;

    return (
      <Form.Group>
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
        <Form.Button icon="edit" onClick={this.handleSubmit} />
        <Form.Button icon="delete" onClick={this.handleDelete} />
      </Form.Group>
    );
  }
}

const mapStateToProps = state => {
  return { userInfo: state.user.userInfo };
};

export default connect(mapStateToProps, { setCurrentEntry })(EntryCard);
