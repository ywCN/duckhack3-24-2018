import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AppHeader from './AppHeader';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container style={{ marginTop: '3em' }}>
          <AppHeader />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/logout" component={Logout} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
