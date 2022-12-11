import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FollowList from "../main/FollowList";
import MyprofilePosting1 from "../main/MyprofilePosting1";
import Modal from "../Modal";

const MyProfile = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };
  return (
    <Container>
      <div className="d-flex">
        <div className="posting-profile">
          <img
            src={"/img/people.png"}
            alt="profile"
            className="posting-profile-img"
          />
          <h3 className="d-block fw-bold text-center">User Name</h3>
          <button
            className="border-0 bg-transparent fw-bold "
            onClick={openModal1}
          >
            팔로잉
          </button>
          <Modal open={modalOpen1} close={closeModal1} header="Modal heading">
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
          </Modal>
          <button
            className="border-0 bg-transparent fw-bold float-end"
            onClick={openModal2}
          >
            팔로워
          </button>
          <Modal open={modalOpen2} close={closeModal2} header="Modal heading">
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
            <div>
              <FollowList />
            </div>
          </Modal>
          <hr className="w-100" />
          <div>
            <button className="border-0 bg-transparent float-end">
              <img src={"/img/bookmark.png"} alt="bookmark" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={"/img/posting_heart.png"} alt="like" />
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
              <MyprofilePosting1 />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
