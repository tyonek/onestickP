import React, { Component } from 'react';
import './LandingPage.css';
import { Button, Carousel } from 'react-bootstrap';
import slide1 from '../../assets/photos/bloodwork.jpg';
import slide2 from '../../assets/photos/slide2.jpg';
import slide3 from '../../assets/photos/slide3.jpg';



// export default class LandingPage extends Component {
// 	render() {
			
// 		return (
// 			<main className="landingControl">
// <p>UNDER CONSTRUCTION</p>
			
			
// 			</main>
// 		);
// 	}
// }
export default class LandingPage extends Component {
	render() {
			
		return (
			<main className="landingControl">

			<div className="landingTop">
				<h1 className="landingTitle">OneStick Phlebotomy Service</h1>
				<h2 className="landingMotto">Simple as "One & Done"</h2>
				<h2 className="landingMotto">To Apply Today
				<a className="links" target="_blank" href="tel:2672799461"> CALL</a> or <a className="links" target="_blank" href = "mailto: Contact@Onestickphlebotomy.com">EMAIL</a> !
				</h2>
				</div>

				<div className="slideshow">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide1}
								alt="First slide"
							/>
							<Carousel.Caption className="slideshowCaption">
								<h3 className="slideshowText_Header">Registration Open</h3>
								<p className="slideshowText">Classes are on a rolling basis all fall/winter long.</p>
								<p lassName="slideshowText">Give us a call for the next available class!</p>
								{!this.props.isLoggedIn &&<Button href="/applynow" variant="danger">Apply Now</Button> }  
								</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide2}
								alt="Second slide"
							/>

							<Carousel.Caption className="slideshowCaption">
								<h3 className="slideshowText_Header">Our Mission</h3>
								<p className="slideshowText">Providing training and tutoring sessions that prepare every individual to take their certification.
								Our main goal is to help you feel confident when taking your exam.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide3}
								alt="Third slide"
							/>

							<Carousel.Caption className="slideshowCaption">
								<h3 className="slideshowText_Header">Simple as One & Done</h3>
								<p className="slideshowText">
									We are here every step of the way, making your goals a reality.
          			</p>
								<Button href="/contact" variant="danger">Contact Us</Button>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</main>
		);
	}
}
