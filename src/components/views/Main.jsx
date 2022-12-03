import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerSlider from "../main/BannerSlider";
import SNSPostMain1 from "../main/SNSPostMain1";

const Main = () => {
  return (
    <div className="container">
      <div>
        <BannerSlider />
      </div>

      <div className="main_menu">
        <div className="main_menu_list">
          <div>
            <img src={"img/follwing.png"} alt="logo" id="" />
            <Link
              to="/community"
              style={{ textDecoration: "none", color: "black" }}
            >
              팔로잉
            </Link>
          </div>
          <div>
            <img src={"img/travel50.png"} alt="logo" id="" />
            <Link
              to="/travel"
              style={{ textDecoration: "none", color: "black" }}
            >
              여행
            </Link>
          </div>
          <div>
            <img src={"img/event64.png"} alt="logo" id="" />
            <Link
              to="/event"
              style={{ textDecoration: "none", color: "black" }}
            >
              이벤트
            </Link>
          </div>
          <div>
            <img src={"img/qna.png"} alt="logo" id="" />
            <Link to="/qa" style={{ textDecoration: "none", color: "black" }}>
              문의
            </Link>
          </div>
        </div>
      </div>

      <div>
        <strong style={{ fontSize: "24px" }}>오늘의 </strong>
        <strong style={{ color: "#32D2C9", fontSize: "24px" }}>포스트</strong>
        <strong style={{ fontSize: "24px" }}>를 팔로잉 해보세요!</strong>
      </div>
      <div className=" container mt-3">
        <div>
          <Dropdown className="filter">
            <Dropdown.Toggle
              className="filter-list"
              id="dropdownMenuLink"
              aria-expanded="false"
              style={{ backgroundColor: "#F1F1F1", color: "black" }}
            >
              필터
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter-down">
              <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="filter">
            <Dropdown.Toggle
              className="filter-list"
              id="dropdownMenuLink"
              aria-expanded="false"
              style={{ backgroundColor: "#F1F1F1", color: "black" }}
            >
              필터
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter-down">
              <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="filter">
            <Dropdown.Toggle
              className="filter-list"
              id="dropdownMenuLink"
              aria-expanded="false"
              style={{ backgroundColor: "#F1F1F1", color: "black" }}
            >
              필터
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter-down">
              <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="filter">
            <Dropdown.Toggle
              className="filter-list"
              id="dropdownMenuLink"
              aria-expanded="false"
              style={{ backgroundColor: "#F1F1F1", color: "black" }}
            >
              필터
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter-down">
              <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="filter">
            <Dropdown.Toggle
              className="filter-list"
              id="dropdownMenuLink"
              aria-expanded="false"
              style={{ backgroundColor: "#F1F1F1", color: "black" }}
            >
              필터
            </Dropdown.Toggle>

            <Dropdown.Menu className="filter-down">
              <Dropdown.Item href="#/action-1">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-2">#맛집</Dropdown.Item>
              <Dropdown.Item href="#/action-3">#맛집</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div>
        <SNSPostMain1 />
      </div>
    </div>
  );
};

export default Main;
