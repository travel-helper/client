import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostDetail = ({ content, nickname, thumbnail }) => {
  const [isListHover, setIsListHover] = useState(false);
  const heart = require("../../image/heart.png");
  const pinkHeart = require("../../image/heart_hover.png");

  const [moreShow, setMoreShow] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    setText(content);
  }, []);

  return (
    <Container>
      <div className="d-flex">
        <div className="user-profile"></div>
        <div className="user-name">{nickname}</div>

        <button className="follow-btn">팔로잉</button>
        <button className="following-btn">팔로우</button>
        <button className="modify-btn">수정하기</button>
      </div>
      <div className="grid_container">
        <div style={{ width: "35%" }}>
          {!!thumbnail && (
            <img
              style={{ objectFit: "cover" }}
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="100%"
              src={`http://localhost:443${thumbnail?.substring(7)}`}
              role="img"
              aria-label="자리 표시자: 썸네일"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt=""
            />
          )}
          {!thumbnail && <img src="/img/camera.png" alt="post_img" />}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group w-100">
          <div className="w-100 float-start">
            <button
              className="post_btn"
              onMouseOver={() => setIsListHover(true)}
              onMouseOut={() => setIsListHover(false)}
            >
              <img src={isListHover ? pinkHeart : heart} alt="like" />
            </button>
            <button className="post_btn">
              <img src={"img/comment.png"} alt="like" />
            </button>
          </div>
        </div>
      </div>
      <div>좋아요 7891개</div>
      <div>
        <Link
          to={""}
          style={{
            color: "skyblue",
            marginRight: "5px",
          }}
        >
          #해시태그
        </Link>
        <Link
          to={""}
          style={{
            color: "skyblue",
            marginRight: "5px",
          }}
        >
          #해시태그
        </Link>
        <Link
          to={""}
          style={{
            color: "skyblue",
            marginRight: "5px",
          }}
        >
          #해시태그
        </Link>
        <Link
          to={""}
          style={{
            color: "white",
            marginRight: "5px",
          }}
        >
          #해시태그
        </Link>
      </div>

      <div>
        {text.length < 180 && !moreShow && <div>{text}</div>}
        {text.length > 180 && !moreShow && (
          <div>
            {text.slice(0, 180)}
            <button
              onClick={() => {
                setMoreShow(true);
              }}
            >
              ...더보기
            </button>
          </div>
        )}
        {moreShow && (
          <div>
            {text}
            <button
              onClick={() => {
                setMoreShow(false);
              }}
            >
              접기
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PostDetail;
