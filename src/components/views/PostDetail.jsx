import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updatePost } from "../../_actions/postAction";
const PostDetail = ({
  title,
  region,
  tema,
  priceRange,
  postId,
  content,
  nickname,
  thumbnail,
}) => {
  const [isListHover, setIsListHover] = useState(false);
  const heart = require("../../image/heart.png");
  const pinkHeart = require("../../image/heart_hover.png");
  const [updateMode, setUpdateMode] = useState(false);
  const [moreShow, setMoreShow] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const {
    register, //유효성 검사
    handleSubmit, //submit함수를 인자로 받는 함수
    // formState: { isSubmitting, errors }, //form의 상태
    //isSubmitting -> 제출중
    //errors -> 유효성 훼손
  } = useForm({
    mode: "onChange",
    defaultValues: { inText: content },
  });

  useEffect(() => {
    setText(content);
  }, []);

  const onClickUpdateToggleButton = () => {
    if (!updateMode) {
      //업데이트 모드라면 현재 text를 해당 게시글의 텍스트로 바꿔준다
      //setState는 렌더링 된 후 반영되기 때문에 false일때 실행하도록한다.
      setText(content);
    }
    setUpdateMode(!updateMode);
  };
  const onSubmit = (data) => {
    data["id"] = postId;
    setText(data.inText);
    dispatch(updatePost(data));
    setUpdateMode(false);
  };
  return (
    <Container>
      <div className="d-flex">
        <div className="user-profile"></div>
        <div className="user-name">{nickname}</div>

        <button className="follow-btn">팔로잉</button>
        <button className="following-btn">팔로우</button>
        <button className="modify-btn" onClick={onClickUpdateToggleButton}>
          수정하기
        </button>
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
          </div>
        </div>
      </div>
      <div>1234개</div>
      <hr style={{ width: "100%" }}></hr>
      <h3 className="mt-3">{title}</h3>

      <div>
        <Link
          to={""}
          style={{
            color: "skyblue",
            marginRight: "5px",
          }}
        >
          #{region}
        </Link>
        <Link
          to={""}
          style={{
            color: "skyblue",
            marginRight: "5px",
          }}
        >
          #{tema}
        </Link>
        <Link
          to={""}
          style={{
            color: "skyblue",
            marginRight: "5px",
          }}
        >
          #{priceRange}
        </Link>
      </div>

      {updateMode ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              id="inText"
              type="text"
              placeholder="글을 입력해주세요"
              {...register("inText", {
                required: "글을 입력해주세요",
              })}
              as="textarea"
              rows={8}
              style={{ backgroundColor: "#E7E7E7" }}
            />
          </Form.Group>

          <button className="close" type="submit">
            수정완료
          </button>
        </Form>
      ) : (
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
      )}
    </Container>
  );
};

export default PostDetail;
