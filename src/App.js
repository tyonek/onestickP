import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import { withRouter } from 'react-router-dom'
import './App.css';
import Info from './routes/Info/Info'
class App extends Component {
  state = {
    isLoggedIn: false,
    courses:[],
    wrapper : React.createRef()
  }

  setIsLoggedIn = (login,incomingUserInfo) => { 


    this.setState({ isLoggedIn: login, courses:incomingUserInfo?.courses});

    if (!login){
      this.props.history.push('/');
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('courses');
    }   
   

return;    
  }
 componentDidMount () {
   const token = window.localStorage.getItem('token');
   const courses = window.localStorage.getItem('courses');
    if (!!token) {
      this.setState({ isLoggedIn: true, courses: courses })
    }
  }


  render() {    


    return (
      <div ref={this.state.wrapper} >
        {/* <NavBar isLoggedIn={this.state.isLoggedIn} setIsLoggedIn={this.setIsLoggedIn} /> */}

        <div style={{ height: "auto", minHeight: "70vh " }}>
          
            <Route
              exact path={'/'}
              component={() => (
                <LandingPage isLoggedIn={this.state.isLoggedIn} />
              )} />
              {/* <Route exact path = {'/login'}>
            {this.state.isLoggedIn ? <Redirect to={'/students'} /> : <Login setIsLoggedIn={this.setIsLoggedIn} isLoggedIn={this.state.isLoggedIn}/>}
            </Route>

            <Route exact path={'/applynow'} component={ApplyNow} />
            <Route exact path={'/phlebotomycourse'} component={()=><Phlebotomy isLoggedIn={this.state.isLoggedIn}/>} />
            <Route exact path={'/paramdeical_examiningcourse'} component={()=><Paramedical_Examining isLoggedIn={this.state.isLoggedIn}/>} />
            <Route exact  path={'/medical_assistantcourse'} component={()=><Medical_Assistant isLoggedIn={this.state.isLoggedIn}/>} />
            <Route exact path={'/ceucourse'} component={()=><Ceu isLoggedIn={this.state.isLoggedIn}/>}  />
            <Route exact path={'/instructorcourse'} component={()=><Instructor_Course isLoggedIn={this.state.isLoggedIn}/>} />
            <Route exact path={'/contact'} component={()=><Contact isLoggedIn={this.state.isLoggedIn}/>} />
            <Route exact path={'/aboutUs'} component={About} />
            <Route exact path={'/students'} component={(props) => <Students {...props} courses={this.state.courses} isLoggedIn={this.state.isLoggedIn}/>} />
            <Route exact path={'/info'} component={Info} /> */}
            
                       
           
          
        </div>
        <div className="footer position-sticky" >
          <Footer />
        </div>
        
      </div>
    )
  }
}

export default withRouter(App);