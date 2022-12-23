import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerSlider from "../main/BannerSlider";
import SNSPostMain1 from "../main/SNSPostMain1";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import postSlice from "../../_reducers/postReducer";
const Main = () => {
  const [tag1, setTag1] = useState(false);
  const [tag2, setTag2] = useState(false);
  const [tag3, setTag3] = useState(false);
  const dispatch = useDispatch();
  const {
    register, //유효성 검사
    handleSubmit, //submit함수를 인자로 받는 함수
    // formState: { isSubmitting, errors }, //form의 상태
    //isSubmitting -> 제출중
    //errors -> 유효성 훼손
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    data["tema"] = tag1;
    data["region"] = tag2;
    data["priceRange"] = tag3;

    dispatch(postSlice.actions.filterPost(data));

    // navigate("/");
  };

  return (
    <div>
      <div>
        {/* <div className="board_btn mb-3">
          <button>
            <Link
              to="/community"
              style={{ textDecoration: "none", color: "black" }}
            >
              팔로잉
            </Link>
          </button>
          <button>
            <Link
              to="/travel"
              style={{ textDecoration: "none", color: "black" }}
            >
              여행
            </Link>
          </button>
          <button>
            <Link
              to="/event"
              style={{ textDecoration: "none", color: "black" }}
            >
              이벤트
            </Link>
          </button>
        </div> */}
      </div>
      <div className="container">
        <div className="mb-3">
          <BannerSlider />
        </div>

        <div>
          <strong style={{ fontSize: "24px" }}>오늘의 </strong>
          <strong style={{ color: "#32D2C9", fontSize: "24px" }}>포스트</strong>
          <strong style={{ fontSize: "24px" }}>를 팔로잉 해보세요!</strong>
        </div>
        <div className=" container mt-3">
          <div>
            <Form className="mb-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
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
              <button className="succes-write" type="submit">
                <label>완료</label>
              </button>
            </Form>
          </div>
        </div>
        <div>
          <SNSPostMain1 />
        </div>
      </div>
    </div>
  );
};

export default Main;
