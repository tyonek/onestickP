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
import Footer from '../src/component/Footer/Footer';
import Contact from './component/Footer/Contact/Contact';
import About from './component/Footer/About/About';
import { Row, Col } from 'react-bootstrap';
export default class App extends Component {
  render(){
    return(
      <div >
        <NavBar />
        
        <div style={{height:"auto", marginBottom:"170px" ,paddingBottom:"10px"}}>
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
            <Route path={'/contact'} component={Contact} />
            <Route path={'/aboutUs'} component={About} />
          </Switch>
        </div>
        <div className="footer fixed-bottom" style={{height:"150px"}}>
        <Footer />
        </div>
      </div>
    )
  }
}

