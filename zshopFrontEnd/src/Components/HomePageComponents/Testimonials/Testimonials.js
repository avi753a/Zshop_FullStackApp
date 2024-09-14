import { TestimonialCard } from "../TestimonialCard/TestimonialCard";
import "./Testimonials.scss";
import Slider from "react-slick";
import { useEffect } from "react";
import React from "react";

export function Testimonials() {
    const settings = {
        centerMode: true,
        centerPadding: '0px',  // Make sure there’s no padding around the center slide
        slidesToShow: 3,
        infinite: true,
        arrows: false, // Disable the next/prev arrows
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1024, // For tablet screens
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };


    return (
        <>
            <div className="testimonial-container">
                <div className="testimonial-heading d-flex flex-column align-items-center mb-5">
                    <h1 className="font-heading">This Is What Our Customers Say</h1>
                    <p className="testimonial-description font-light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
                </div>

                <Slider {...settings} >
                    <div className="slide zoomed-slide"><TestimonialCard/></div>
                    <div className="slide"><TestimonialCard/></div>
                    <div className="slide"><TestimonialCard/></div>
                    <div className="slide"><TestimonialCard/></div>
                    <div className="slide"><TestimonialCard/></div>
                </Slider>

            </div>
        </>
    );
}