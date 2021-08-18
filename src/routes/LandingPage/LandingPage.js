import React, { Component } from 'react';
import './LandingPage.css';
import { Button, Carousel } from 'react-bootstrap';
import slide1 from '../../assets/photos/bloodwork.jpg';
import slide2 from '../../assets/photos/slide2.jpg';
import slide3 from '../../assets/photos/slide3.jpg';




export default class LandingPage extends Component {
	render() {
			
		return (
			<main className="landingControl">

			<div className="landingTop">
				<h1 className="landingTitle">OneStick Phlebotomy Service</h1>
				<h2 className="landingMotto">Simple as "One & Done"</h2>
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
								<h3 className="slideshowText_Header">Registration Now Open</h3>
								<p className="slideshowText">For all courses, starting October 6th, 2021 (Limited Availability)</p>
								<p lassName="slideshowText">September course | FULL </p>
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
								<p className="slideshowText">To make the certification process as simple and painless as possible, giving students the tools to excel in their careers.
								Training provided consists of lecture and hands on lab time. The program is also designed to allow the most qualified healthcare professionals to become qualified certified phlebotomists.</p>
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
