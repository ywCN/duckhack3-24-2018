import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon } from 'semantic-ui-react';

import { logout } from './../actions';

class AppHeader extends React.Component {
  calculateBalance = () => {
    let balance = 0;
    _.forEach(this.props.entries, entry => {
      balance += parseInt(entry.amount, 10);
    });
    return balance;
  };

  renderHeaderRight = () => {
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
  };

  render() {
    const logoPath = this.props.loginStatus ? '/dashboard' : '/';
    return (
      <Segment clearing color="blue">
        <Header as={Link} floated="left" to={logoPath}>
          Budget Manager
        </Header>
        {this.renderHeaderRight()}
        <Header floated="right">
          Your Balance: ${this.calculateBalance()}
        </Header>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { loginStatus: state.user.loginStatus, entries: state.user.entries };
};

export default connect(mapStateToProps, { logout })(AppHeader);
