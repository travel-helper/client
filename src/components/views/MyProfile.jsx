import React from "react";
import { Container } from "react-bootstrap";

const MyProfile = () => {
  return (
    <Container>
      <div className="d-flex">
        <div className="posting-profile">
          <img
            src={"img/people.png"}
            alt="profile"
            className="posting-profile-img"
          />
          <h3 className="d-block fw-bold text-center">User Name</h3>
          <button className="border-0 bg-transparent fw-bold ">팔로잉</button>
          <button className="border-0 bg-transparent fw-bold float-end">
            팔로워
          </button>
          <hr className="w-100" />
          <div>
            <button className="border-0 bg-transparent float-end">
              <img src={"img/bookmark.png"} alt="bookmark" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={"img/posting_heart.png"} alt="like" />
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="posting-set">설정</button>
          </div>
        </div>
        <div className="w-100">
          <div>
            <label className="posting-font">포스팅</label>
            <label className="posting-num">0</label>
          </div>
          <div className="posting-photo">
            <div>
              <img src={"img/mini_camera.png"} alt="photo" />
            </div>
            <div>
              <img src={"img/mini_camera.png"} alt="photo" />
            </div>
            <div>
              <img src={"img/mini_camera.png"} alt="photo" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
