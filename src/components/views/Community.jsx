import { Link } from "react-router-dom";
import SNSPostMain1 from "../main/SNSPostMain1";
import React from "react";
import { Dropdown } from "react-bootstrap";

function Community() {
  return (
    <div>
      <div className="board_btn">
        <button style={{ background: "#32D2C9" }}>
          <Link
            to="/community"
            style={{ textDecoration: "none", color: "black" }}
          >
            팔로잉
          </Link>
        </button>
        <button>
          <Link to="/travel" style={{ textDecoration: "none", color: "black" }}>
            여행
          </Link>
        </button>
        <button>
          <Link to="/event" style={{ textDecoration: "none", color: "black" }}>
            이벤트
          </Link>
        </button>
        <button>
          <Link to="/qa" style={{ textDecoration: "none", color: "black" }}>
            Q&A
          </Link>
        </button>
      </div>
      <div className="container">
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
        <div className="mt-3">
          <SNSPostMain1 />
        </div>
      </div>
    </div>
  );
}

export default Community;
