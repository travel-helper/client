import React from "react";
import { Container } from "react-bootstrap";

const FollowList = () => {
  return (
    <Container>
      <div className="d-flex border border-3 p-3 ">
        <div className="user-profile"></div>
        <div className="user-name">lets_go</div>

        <button className="follow-btn">팔로잉</button>
        <button className="following-btn">팔로우</button>
      </div>
    </Container>
  );
};

export default FollowList;
