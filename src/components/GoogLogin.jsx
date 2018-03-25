import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Cookies from 'universal-cookie';

import { loginSuccess, loginFail } from '../actions';

class GoogLogin extends React.Component {
  responseOnSuccess = response => {
    const { profileObj } = response;
    const cookies = new Cookies();
    this.props.loginSuccess(
      () => {
        window.localStorage.setItem(
          '200-ok-error-userInfo',
          profileObj.googleId
        );
      },
      () => this.props.history.push('/dashboard'),
      () =>
        cookies.set('200-ok-error-userInfo', profileObj.googleId, { path: '/' })
    );
  };
  responseOnFailure = response => {
    console.error('google auth response is', response);
    this.props.loginFail();
  };
  render() {
    const loginFailWarning =
      this.props.loginStatus === false ? (
        <h1>Login failed. Please try again.</h1>
      ) : null;
    return (
      <div>
        <GoogleLogin
          clientId="806914580079-9msqlpl8f51fd3diiflsthebog8l7p2u.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseOnSuccess}
          onFailure={this.responseOnFailure}
          style={{}}
          className="ui red fluid button"
        />
        {loginFailWarning}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loginStatus: state.user.loginStatus };
};

export default connect(mapStateToProps, { loginSuccess, loginFail })(
  withRouter(GoogLogin)
);
