import React, { useState } from "react";
// import styled, { css } from "styled-components";
import Modal from "../Modal";
import PostDetail from "../views/PostDetail";
import { removePost, likePost } from "../../_actions/postAction";
import { useDispatch } from "react-redux";

const SNSPostMain2 = ({
  title,
  tema,
  region,
  priceRange,
  postId,
  content,
  nickname,
  thumbnail,
  likeCount,
}) => {
  const [isListHover, setIsListHover] = useState(false);

  const heart = require("../../image/heart.png");
  const pinkHeart = require("../../image/heart_hover.png");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "20%", backgroundColor: "#32d2c9" }}
          className="rounded-circle"
        ></div>

        <div>
          <p className="fs-5 mt-4 ms-4">{nickname}</p>
        </div>
        <div
          style={{ float: "right", width: "50%" }}
          className="d-grid gap-2 d-md-flex justify-content-md-end"
        >
          <button
            className="btn bg-white"
            style={{
              color: "#32D2C9",
              border: "solid",
              justifyContent: "end",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "19px",
            }}
            onClick={() => {
              dispatch(removePost(postId));
            }}
          >
            삭제
          </button>
        </div>
      </div>
      <div className="card shadow-sm">
        <img
          onClick={() => {
            openModal();
          }}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={`http://localhost:443${thumbnail?.substring(7)}`}
          role="img"
          aria-label="자리 표시자: 썸네일"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          alt=""
        />
        <title>Placeholder</title>
        <rect
          onClick={openModal}
          width="100%"
          height="100%"
          fill="#D9D9D9"
        ></rect>

        <div
          className="card-body"
          onClick={() => {
            openModal();
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                onMouseOver={() => setIsListHover(true)}
                onMouseOut={() => setIsListHover(false)}
                onClick={() => {
                  dispatch(likePost(postId));
                }}
              >
                <img src={isListHover ? pinkHeart : heart} alt="like" />
              </button>
            </div>
          </div>
          <p style={{ display: "inline-block" }}>좋아요 {likeCount}개</p>
          <hr style={{ width: "100%" }}></hr>
          <h4 className="mt-3">{title}</h4>
          <label style={{ color: "skyblue" }}>
            #{region} #{tema} #{priceRange}
          </label>
          <p
            className="card-text"
            style={{ height: "200px", overflow: "scroll" }}
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>{content}</font>
            </font>
          </p>
        </div>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <div>
            <PostDetail
              title={title}
              region={region}
              tema={tema}
              priceRange={priceRange}
              postId={postId}
              content={content}
              nickname={nickname}
              thumbnail={thumbnail}
              likeCount={likeCount}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SNSPostMain2;

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
//   ${(props) =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `}
// `;
