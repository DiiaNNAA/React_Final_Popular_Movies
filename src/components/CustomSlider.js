import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CustomSlider.scss';
import SliderImage from '../assets/images/1.jpg'
import SliderImage1 from '../assets/images/2.jpg'
import SliderImage2 from '../assets/images/3.jpg'

const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block', background: 'black', borderRadius: '50%', padding: '1px' }}
    onClick={onClick}
  />
);

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomArrow />,
    nextArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, img: SliderImage, alt: 'Img1' },
    { id: 2, img: SliderImage1, alt: 'Img2' },
    { id: 3, img: SliderImage2, alt: 'Img3' },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.img} alt={slide.alt} />
            <div className="slide-content">
              <h1>Welcome to Movie World</h1>
              <p>Discover the most popular movies in the world.</p>
              <a href="/movies" className="cta-button">View Movies</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;