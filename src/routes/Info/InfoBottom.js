import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Info/Info.css';
import oneStickBanner from '../../assets/photos/oneStickBanner.jpg';
import pic11 from '../../assets/photos/pic11.jpg';
import pic7 from '../../assets/photos/pic7.png';
import pic8 from '../../assets/photos/pic8.png';




export default function InfoBottom(props) {
  const courses =
    ["Phlebotomy", "Medical Assistant+", "Paramedical+", "CEU", "Instuctor Course"]
  return (
    <div>
      <div className="infoControl container">
        <img className="banner" src={oneStickBanner}></img>
        <h2 className="h2 text-white">Our online training and certification program includes: </h2>
        <img className="banner2" src={oneStickBanner}></img>
        <div className="slideshow">
          <Carousel>
            <Carousel.Item interval={3500}>
              <img
                className="d-block w-100"
                src={pic11}
                alt="First slide"
              />
              <Carousel.Caption className="slideshowCaption">
                <h3 className="h3">National Certification</h3>
                <h6 className="h6">Gain a certification that is backed by the NCCT, NHA, NAPTP, and AMCA.</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <img
                className="d-block w-100"
                src={pic7}
                alt="Second slide"
              />
              <Carousel.Caption className="slideshowCaption">
                <h3 className="h3">Online Courses</h3>
                <h6 className="h6">Over 40 hours of mobile-friendly course content, including quizzes, videos, and written lessons.</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <img
                className="d-block w-100 img-fluid"
                src={pic8}
                alt="Third slide"
              />
              <Carousel.Caption className="slideshowCaption">
                <h3 className="h3">Exciting Careers through Phlebotomy Training</h3>
                <h6 className="h6">Earn Up To $28/hour as a Certified Phlebotomy Technician* </h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <img className="banner" src={oneStickBanner}></img>
      </div>
    </div>
  )
}
