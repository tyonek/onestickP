import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
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
							<Carousel.Caption>
								<h3 className="slideshowText_Header">Registration Now Open</h3>
								<p className="slideshowText">For all courses, starting May 1st, 2021</p>
								<Button href="/applynow" variant="danger">Apply Now</Button>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide2}
								alt="Second slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={slide3}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</main>
		);
	}
}
