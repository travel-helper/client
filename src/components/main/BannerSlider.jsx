import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

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
    prevArrow: <Arrow />,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div className="banner1">
          <label>지금 제주도로 여행가자!</label>
        </div>
        <div className="banner2">
          <label>인천 차이나타운으로 가자</label>
        </div>
        <div className="banner3">
          <label>서울 야경명소 N서울타워</label>
        </div>
        <div className="banner4">
          <label>부산의 명소 해운대</label>
        </div>
        <div className="banner5">
          <label>전주한옥마을에서 역사속으로</label>
        </div>
        <div className="banner6">
          <label>귀여운 양보러 대관령으로</label>
        </div>
      </Slider>
    </Container>
  );
};

export default BannerSlider;
