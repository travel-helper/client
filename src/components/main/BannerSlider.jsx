import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';

function Arrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "#a6cdcb" }}
		onClick={onClick}
	  />
	);
  }

  
  
const BannerSlider = () => {
  const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: <Arrow />,
    prevArrow: <Arrow />
  }
  
  return (
    <Container>
      <Slider {...settings}>
    	<div className='banner' >
    	  <label>지금 제주도로 여행가자!</label>
		  <button><p>보러가기</p></button>
		  
    	</div>
		<div className='banner'>
    	  <label>지금 제주도로 여행가자!</label>
		  <button><p>보러가기</p></button>
		  
    	</div>
		<div className='banner'>
    	  <label>지금 제주도로 여행가자!</label>
		  <button><p>보러가기</p></button>
		  
    	</div>
		<div className='banner'>
    	  <label>지금 제주도로 여행가자!</label>
		  <button><p>보러가기</p></button>
		  
    	</div>
		<div className='banner'>
    	  <label>지금 제주도로 여행가자!</label>
		  <button><p>보러가기</p></button>
		  
    	</div>
		<div className='banner'>
    	  <label>지금 제주도로 여행가자!</label>
		  <button><p>보러가기</p></button>
		  
    	</div>
      </Slider>
    </Container>
  )
};

export default BannerSlider;