import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

function Banner(props) {
  return (
    <Container>
      <div className="eventBanner">
        <div className="eventBannerLayout">
          <h2 className="eventBannerTitle">{props.title}</h2>
          <p className="eventBannerText">지금 이동하기</p>
        </div>
      </div>
    </Container>
  );
}

export default Banner;
