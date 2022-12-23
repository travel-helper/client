import React from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { uploadImage, addPost } from "../../_actions/postAction";
import { useNavigate } from "react-router-dom";
const Write = () => {
  const {
    register, //유효성 검사
    handleSubmit, //submit함수를 인자로 받는 함수
    // formState: { isSubmitting, errors }, //form의 상태
    //isSubmitting -> 제출중
    //errors -> 유효성 훼손
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { imagePath } = useSelector((state) => state.post);
  const [imageSrc, setImageSrc] = useState("img/camera.png");

  const [tag1, setTag1] = useState(false);
  const [tag2, setTag2] = useState(false);
  const [tag3, setTag3] = useState(false);

  const onSubmit = (data) => {
    data["tema"] = tag1;
    data["region"] = tag2;
    data["priceRange"] = tag3;
    data["thumbnail"] = imagePath;
    console.log(tag3);

    dispatch(addPost(data));
    navigate("/");
  };

  const encodeFileToBase64 = (fileBlob) => {
    const idxDot = fileBlob.name.lastIndexOf(".") + 1;
    var extFile = fileBlob.name
      .substr(idxDot, fileBlob.name.length)
      .toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);

      return new Promise((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result);
          let imageFormData = new FormData();
          imageFormData.append("img", fileBlob);
          dispatch(uploadImage(imageFormData));

          resolve();
        };
      });
    } else {
      alert("jpg, jpeg, png 형식만 가능합니다");
    }
  };

  const selectFile = useRef("");

  return (
    <Container className="d-flex mt-5">
      <div
        style={{ backgroundColor: "#E7E7E7", marginRight: "20px" }}
        onClick={() => selectFile.current.click()}
        className="container"
      >
        <input
          accept="image/png, image/jpeg, image/jpg"
          type="file"
          style={{ display: "none" }}
          ref={selectFile}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }}
        />
        <div className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div>
          <Form className="mb-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="title"
                placeholder="제목을 입력해주세요"
                {...register("title", {
                  required: "제목을 입력해주세요",
                })}
                style={{ backgroundColor: "#E7E7E7" }}
              />
            </Form.Group>

            <Dropdown
              onSelect={(eventKey) => {
                setTag1(eventKey);
              }}
              className="filter"
            >
              <Dropdown.Toggle
                className="filter-list"
                variant="info"
                id="dropdownMenuLink"
                aria-expanded="false"
                style={{ width: "30%" }}
              >
                테마
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item id="drop1" eventKey="맛집">
                  맛집
                </Dropdown.Item>
                <Dropdown.Item id="drop1" eventKey="역사">
                  역사
                </Dropdown.Item>
                <Dropdown.Item id="drop1" eventKey="자연">
                  자연
                </Dropdown.Item>
                <Dropdown.Item id="drop1" eventKey="데이트">
                  데이트
                </Dropdown.Item>
                <Dropdown.Item id="drop1" eventKey="액티비티">
                  액티비티
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              onSelect={(eventKey) => {
                setTag2(eventKey);
              }}
              className="filter"
            >
              <Dropdown.Toggle
                className="filter-list"
                variant="info"
                id="dropdownMenuLink"
                aria-expanded="false"
                style={{ width: "30%" }}
              >
                지역
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item id="drop2" eventKey="서울">
                  서울
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="경기도">
                  경기도
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="충청도">
                  충청도
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="강원도">
                  강원도
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="전라도">
                  전라도
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="경상도">
                  경상도
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="충청도">
                  충청도
                </Dropdown.Item>
                <Dropdown.Item id="drop2" eventKey="제주도">
                  제주도
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              className="filter"
              onSelect={(eventKey) => {
                setTag3(eventKey);
              }}
            >
              <Dropdown.Toggle
                className="filter-list"
                variant="info"
                id="dropdownMenuLink"
                aria-expanded="false"
                style={{ width: "30%" }}
              >
                가격대
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item id="drop" eventKey="1~10만원">
                  1~10만원
                </Dropdown.Item>
                <Dropdown.Item id="drop" eventKey="10~20만원">
                  10~20만원
                </Dropdown.Item>
                <Dropdown.Item id="drop" eventKey="20~30만원">
                  20~30만원
                </Dropdown.Item>
                <Dropdown.Item id="drop" eventKey="30~40만원">
                  30~40만원
                </Dropdown.Item>
                <Dropdown.Item id="drop" eventKey="50~60만원">
                  50~60만원
                </Dropdown.Item>
                <Dropdown.Item id="drop" eventKey="60만원이상">
                  60만원이상
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                id="content"
                type="text"
                placeholder="글을 입력해주세요"
                {...register("content", {
                  required: "글을 입력해주세요",
                })}
                as="textarea"
                rows={12}
                style={{ backgroundColor: "#E7E7E7" }}
              />
            </Form.Group>
            <div>
              <button className="succes-write" type="submit">
                <label>완료</label>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Write;
