import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AppHeader from './AppHeader';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Logout from './Logout';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCDpJCuM6xGFs7J9mKlMc_e8UV0O_90mBY',
      authDomain: 'duckhack-d220e.firebaseapp.com',
      databaseURL: 'https://duckhack-d220e.firebaseio.com',
      projectId: 'duckhack-d220e',
      storageBucket: '',
      messagingSenderId: '235498252338'
    };

    firebase.initializeApp(config);
  }
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
