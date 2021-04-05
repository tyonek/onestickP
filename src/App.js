import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import Students from './routes/Students/Students';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import './App.css';
class App extends Component {
  state = {
    isLoggedIn: false,
    wrapper : React.createRef()
  }

  setIsLoggedIn = (login) => {
    this.setState({ isLoggedIn: login })
    if (!login){
      this.props.history.push('/');
      window.localStorage.removeItem('token');
    }
      


  }
 componentDidMount () {
   const token = window.localStorage.getItem('token');
    if (!!token) {
    this.setState({isLoggedIn:true})
    }
  }


  render() {    


    return (
      <div ref={this.state.wrapper} >
        <NavBar isLoggedIn={this.state.isLoggedIn} setIsLoggedIn={this.setIsLoggedIn} />

        <div style={{ height: "auto", minHeight: "70vh ", marginBottom: "170px", paddingBottom: "10px" }}>
          
            <Route
              exact path={'/'}
              component={() => (
                <LandingPage />
              )} />
              <Route exact path = {'/login'}>
            {this.state.isLoggedIn ? <Redirect to={'/students'} /> : <Login setIsLoggedIn={this.setIsLoggedIn} isLoggedIn={this.state.isLoggedIn}/>}
            </Route>

            <Route exact path={'/applynow'} component={ApplyNow} />
            <Route exact path={'/phlebotomycourse'} component={Phlebotomy} />
            <Route exact path={'/paramdeical_examiningcourse'} component={Paramedical_Examining} />
            <Route exact  path={'/medical_assistantcourse'} component={Medical_Assistant} />
            <Route exact path={'/ceucourse'} component={Ceu} />
            <Route exact path={'/instructorcourse'} component={Instructor_Course} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/aboutUs'} component={About} />
            <Route  exact path={'/students'}  component={(props)=><Students {...props} isLoggedIn={this.state.isLoggedIn}/>} />           
           
          
        </div>
        <div className="footer position-sticky" >
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(App);