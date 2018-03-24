import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon } from 'semantic-ui-react';

import { logout } from './../actions';

class AppHeader extends React.Component {
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
            }}
          >
            <Icon name="log out" />
          </Header>
        </div>
      );
    }
  }
  render() {
    const logoPath = this.props.loginStatus ? '/dashboard' : '/';
    return (
      <Segment clearing color="blue">
        <Header as={Link} floated="left" to={logoPath}>
          Budget Manager
        </Header>
        {this.renderHeaderRight()}
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { loginStatus: state.user.loginStatus };
};

export default connect(mapStateToProps, { logout })(AppHeader);
