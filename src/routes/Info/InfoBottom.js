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
      <div className="infoControl">
        <img className="banner" src={oneStickBanner}></img>
        <h1 className="infoTitle">Our online training and certification program includes: </h1>
        <img className="banner2" src={oneStickBanner}></img>
        <div className="slideshow">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={pic11}
                alt="First slide"
              />
              <Carousel.Caption className="slideshowCaption">
                <h3 className="slideshowText_Header">National Certification</h3>
                <p className="slideshowText">Gain a certification that is backed by the NCCT, NHA, NAPTP, and AMCA.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={pic7}
                alt="Second slide"
              />
              <Carousel.Caption className="slideshowCaption">
                <h3 className="slideshowText_Header">Online Courses</h3>
                <p className="slideshowText">Over 40 hours of mobile-friendly course content, including quizzes, videos, and written lessons.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={pic8}
                alt="Third slide"
              />
              <Carousel.Caption className="slideshowCaption">
                <h3 className="slideshowText_Header">Exciting Careers through Phlebotomy Training</h3>
                <p className="slideshowText">Earn Up To $28/hour as a Certified Phlebotomy Technician* </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <img className="banner" src={oneStickBanner}></img>
      </div>
    </div>
  )
}
