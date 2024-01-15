import React from 'react';
import OverlapingRectangle from './OverlapingRectangle'; // Correct the file name if necessary
import Slider from 'react-slick'; // Make sure to import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ServicesContainer.css';

function ServicesContainer() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: dots => (
            <div style={{ paddingBottom: '50px' }}>
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'grey', position: 'absolute', bottom: '-50px' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'grey', position: 'absolute', bottom: '-50px' }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="Overlaping-rectangles">
            <Slider {...settings}>
                <div><OverlapingRectangle /></div>
                <div><OverlapingRectangle /></div>
                <div><OverlapingRectangle /></div>
                <div><OverlapingRectangle /></div>
                {/* Add more OverlapingRectangle components as needed */}
            </Slider>
        </div>
    );
}

export default ServicesContainer;