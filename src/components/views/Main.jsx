import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerSlider from "../main/BannerSlider";
import SNSPostMain1 from "../main/SNSPostMain1";

const Main = () => {
  return (
    <div>
      <div>
        <div className="board_btn mb-3">
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
        </div>
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
    </div>
  );
};

export default Main;
