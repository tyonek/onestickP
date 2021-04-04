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
import {withRouter} from 'react-router-dom'
import './App.css';
class App extends Component {
state={
  isLoggedIn:true,
}

 setIsLoggedIn = (login)=>{
 this.setState({isLoggedIn:login})
 if(!login)
 this.props.history.push('/');
}



  render(){
    return(
      <div >
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        
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
            <Route path={'/student/'} component={Students} />
          </Switch>
        </div>
        <div className="footer position-sticky" >
        <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter (App);