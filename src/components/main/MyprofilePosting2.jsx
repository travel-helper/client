import React, { useState } from "react";

const MyprofilePosting2 = () => {
  const [isListHover, setIsListHover] = useState(false);
  const heart = require("../../image/heart.png");
  const pinkHeart = require("../../image/heart_hover.png");

  return (
    <div>
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="자리 표시자: 썸네일"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#D9D9D9"></rect>
        </svg>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                onMouseOver={() => setIsListHover(true)}
                onMouseOut={() => setIsListHover(false)}
              >
                <img src={isListHover ? pinkHeart : heart} alt="like" />
              </button>
              <button>
                <img src={"img/comment.png"} alt="like" />
              </button>
            </div>
          </div>
          <p className="card-text">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                SNS 포스팅 글 부분이 여기 표시 됩니다
              </font>
            </font>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyprofilePosting2;
