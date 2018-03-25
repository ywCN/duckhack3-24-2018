import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { setCurrentEntry } from './../actions';

class EntryCard extends Component {
  state = { name: '', email: '', submittedName: '', submittedEmail: '' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, email } = this.state;
    console.log({ name, email });
  };

  handleDelete = () => {
    console.log('delete button clicked');
  };

  render() {
    const { name, email } = this.state;

    return (
      <Form.Group>
        <Form.Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          placeholder="Email"
          name="email"
          value={email}
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
