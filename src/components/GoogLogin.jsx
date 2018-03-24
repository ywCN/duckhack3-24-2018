import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { loginSuccess, loginFail } from '../actions';

class GoogLogin extends React.Component {
  responseOnSuccess = response => {
    const { profileObj } = response;
    console.log('google auth response is', profileObj);
    this.props.loginSuccess(profileObj, () =>
      this.props.history.push('/dashboard')
    );
  };
  responseOnFailure = response => {
    console.error(response);
    this.props.loginFail();
  };
  render() {
    return (
      <GoogleLogin
        clientId="806914580079-9msqlpl8f51fd3diiflsthebog8l7p2u.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={this.responseOnSuccess}
        onFailure={this.responseOnFailure}
        style={{}}
        className="ui red fluid button"
      />
    );
  }
}

export default connect(null, { loginSuccess, loginFail })(
  withRouter(GoogLogin)
);
