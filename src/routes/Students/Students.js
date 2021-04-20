import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import canvas from '../../assets/photos/Canvas.png';
import paypal from '../../assets/photos/paypal.png';
import PaypalOrder from '../../component/Paypal/Paypal';
import '../Students/Students.css';
import headshotblank from '../../assets/photos/onesticklogo2.png';


export default function Students(props) {

  let coursesInfo = typeof (props.courses) === 'object' ? props.courses : JSON.parse(props.courses);
  let coursesName = coursesInfo.join('').split(":");
  let coursesPrice = coursesName[1];



  const [checkout, setCheckout] = useState(false)
  return (
    <div className="studentControl">
      <Jumbotron fluid className="cardStudent">
        <Container>
          <h1>Classes Begin May 7th, 2021</h1>
          <p>
            All required prerequisites (INCLUDING : COURSE DEPOSIT AND STUDENT FORMS) must be completed 2 weeks prior to class start date. Please 
            contact student services <Link className="linkTo" to="/contact"> here </Link>for assistance
          </p>
          <p>
            For payments please send to <p>CASHAPP  | $onestickphlebotomy <br></br>VENMO | @ShanonBryant-VanessaBuxton</p>
          </p>
        </Container>
      </Jumbotron>
      {
        props.isLoggedIn ?
          <div class="containerStudent">
            <div class="col-md-4">
              <div class="cardStudent user-card">
                <div class="card-header">
                  <h5 className="welcomeStudent">Welcome, { }</h5>
                </div>
                <div class="card-block">
                  <div class="user-image">
                    <img src={headshotblank} class="img-radius" alt="User-Profile-Image"></img>
                  </div>
                  <h6 class="f-w-600 m-t-25 m-b-10">{props.fullname}</h6>
                  <hr></hr>
                  <div class="bg-c-blue counter-block m-t-10 p-20">
                    <div class="row">
                    </div>
                  </div>
                  {/* {checkout ? (
                    <PaypalOrder props={props} coursesName={coursesName[0]} coursesPrice={coursesPrice} />
                  ) : (
                    <p className="m-t-15" variant="top" src={paypal}
                      onClick={() => {
                        setCheckout(true);
                      }}>Course Payments</p>
                  )} */}
                </div>
              </div>
            </div>
          </div> : <h1>Unauthorized access</h1>
      }

    </div>
  )
}


