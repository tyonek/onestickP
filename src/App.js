import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Forms/Login/Login';
import Signup from './component/Forms/Signup/Signup';
import NavBar from './component/Nav/Nav'
export default class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <Switch>
          <Route
          exact path={'/'}
          component={() => (
            <LandingPage />
          )} />
          <Route path={'/login'} component={Login} />
          <Route path={'/signup'} component={Signup} />
        </Switch>
      </div>
    )
  }
}

