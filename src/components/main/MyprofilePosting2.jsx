import React, { useState } from "react";
import PostDetail from "../views/PostDetail";
import { removePost } from "../../_actions/postAction";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
const MyprofilePosting2 = ({ postId, content, nickname, thumbnail, title }) => {
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
        <div>
          <p
            onClick={() => {
              openModal();
            }}
            className="fs-5 mt-4 ms-4"
          >
            {title}
          </p>
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
      <div>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <div>
            <PostDetail
              postId={postId}
              content={content}
              nickname={nickname}
              thumbnail={thumbnail}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MyprofilePosting2;
