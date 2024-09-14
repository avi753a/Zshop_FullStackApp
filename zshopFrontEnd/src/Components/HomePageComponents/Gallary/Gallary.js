import "./Gallary.scss";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Gallary() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7, // Number of slides to show
        slidesToScroll: 1,
        arrows: false, // Disable the next/prev arrows
        centerMode: false, // Ensure slides are not centered
    };
    const getSlideHeight = (index) => {
        return (index % 2 === 0) ? 300 : 250; // 300px for even, 250px for odd
    };

    const imagePaths = [
        '/images/sliders/1.png',
        'images/sliders/2.png',
        'images/sliders/3.png',
        'images/sliders/4.png',
        'images/sliders/5.png',
        'images/sliders/6.png',
        'images/sliders/7.png',
        'images/sliders/8.png'

    ];

    return (
        <>
            <div className="gallary-container d-flex flex-column align-item-center justify-content-start">
                <div className="gallary-heading mb-4">
                    <h1 className="font-heading">Follow Us on Instragram</h1>
                    <p className="gallary-description font-light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                </div>
                <div className="gallary-images">
                    <Slider {...settings}>
                        {imagePaths.map((path, index) => (
                            <div key={index} className="d-flex align-items-center justify-content-center slider-image-container">
                                <img className="w-100 slider-image"
                                    src={path}
                                    alt={`Slide ${index + 1}`}
                                    style={{
                                        height: `${getSlideHeight(index)}px`,
                                         // Ensures the image fills the width of the slide
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}