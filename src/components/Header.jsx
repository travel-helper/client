import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, loadMyInfo } from "../_actions/userAction";
// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { Overlay, Popover, Button, OverlayTrigger } from "react-bootstrap";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyInfo());
  }, [dispatch]);

  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <a href="/">
        <img src={"img/mini_logo.png"} alt="logo" className="main_logo_img" />
      </a>
      <button className="main_menu_btn_design">
        <Link to="/community" id="link">
          커뮤니티
        </Link>
      </button>
      <button className="main_menu_btn_design">
        <Link to="/qa" id="link">
          문의
        </Link>
      </button>
      {me ? (
        <>
          <OverlayTrigger
            trigger="click"
            placement={"bottom"}
            overlay={
              <Popover id={`popover-positioned bottom`}>
                <Popover.Body>
                  <button className="d-block border-0 bg-light p-2 text-dark bg-opacity-10 fs-6">
                    마이페이지
                  </button>
                  <button
                    className="d-block border-0 bg-light p-2 text-dark bg-opacity-10 fs-6"
                    onClick={() => {
                      console.log("clicked");
                      dispatch(logout());
                    }}
                  >
                    로그아웃
                  </button>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary" className="info_icon"></Button>
          </OverlayTrigger>

          <button className="bell_icon"></button>
          <button className="write">
            <Link to="/write" id="link" className="write_font">
              <p>글쓰기</p>
            </Link>
          </button>
        </>
      ) : (
        <button className="main_login_btn">
          <Link to="/login" id="link">
            로그인/회원가입
          </Link>
        </button>
      )}
    </div>
  );
};

export default Header;
