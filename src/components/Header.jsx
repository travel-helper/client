import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, loadMyInfo } from "../_actions/userAction";
// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { Overlay, Popover, Button, OverlayTrigger } from "react-bootstrap";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

// import { useQuery, useQueryClient } from "react-query";
// import { fetchUser } from "../api/api";

export const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { isLogined } = useSelector((state) => state.user);
  // console.log(isLogined);
  // const { data, isLoading, isError } = useQuery(["user"], fetchUser, {
  //   enabled: !!isLogined,
  // });

  useEffect(() => {
    dispatch(loadMyInfo());
  }, [dispatch]);

  const { jwt } = useSelector((state) => state.user);

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
      {/* {jwt ? ( */}
      {/* {isLogined ? ( */}
      {true ? (
        <>
          <OverlayTrigger
            trigger="click"
            placement={"bottom"}
            overlay={
              <Popover id={`popover-positioned bottom`}>
                <Popover.Body>
                  <button className="d-block border-0 bg-light p-2 text-dark bg-opacity-10 fs-6">
                    <Link
                      to="/mypage/profile"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      마이페이지
                    </Link>
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
