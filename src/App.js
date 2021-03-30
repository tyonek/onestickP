import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Forms/Login/Login';
import ApplyNow from './routes/applyNow/applyNow'
import NavBar from './component/Nav/Nav';
import Phlebotomy from './component/Courses/Phlebotomy/Phlebotomy';
import Paramedical_Examining from './component/Courses/Paramedical_Examining/Paramedical_Examining';
import Medical_Assistant from './component/Courses/Medical_Assistant/Medical_Assistant';
import Ceu from './component/Courses/CEU/Ceu';
import Instructor_Course from './component/Courses/Instructor_Course/Instructor_Course';
import Footer from '../src/component/Footer/Footer'
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
          <Route path={'/applynow'} component={ApplyNow} />
          <Route path={'/phlebotomycourse'} component={Phlebotomy} />
          <Route path={'/paramdeical_examiningcourse'} component={Paramedical_Examining} />
          <Route path={'/medical_assistantcourse'} component={Medical_Assistant} />
          <Route path={'/ceucourse'} component={Ceu} />
          <Route path={'/instructorcourse'} component={Instructor_Course} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

