import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import { logout } from './../actions';

class AppHeader extends React.Component {
  renderHeaderLeft() {
    if (this.props.loginStatus) {
      return (
        <Header
          as={Link}
          floated="left"
          to="/dashboard"
          onClick={() => console.log('logo clicked while logged in')}
        >
          Budget Manager
        </Header>
      );
    } else {
      return (
        <Header
          as={Link}
          floated="left"
          to="/"
          onClick={() => console.log('logo clicked while logged out')}
        >
          Budget Manager
        </Header>
      );
    }
  }
  renderHeaderRight() {
    if (this.props.loginStatus) {
      return (
        <div>
          <Header
            as={Link}
            to="/logout"
            floated="right"
            onClick={() => {
              this.props.logout();
              console.log('logout clicked');
            }}
          >
            logout icon
          </Header>
        </div>
      );
    }
  }
  render() {
    return (
      <Segment clearing color="blue">
        {this.renderHeaderLeft()}
        {this.renderHeaderRight()}
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { loginStatus: state.user.loginStatus };
}

export default connect(mapStateToProps, { logout })(AppHeader);
