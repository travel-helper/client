import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import MySetting from "./MySetting";

export default function Mypage() {
  const params = useParams();

  console.log(params.set);

  return (
    <Container>
      <div className="w-100 justify-content-center d-flex">
        <Link to={"/mypage/profile"} className="mypage_link">
          프로필
        </Link>
        <Link to={"/mypage/setting"} className="mypage_link">
          설정
        </Link>
      </div>
      <div className="mypage-border">
        {params.set === "profile" && <MyProfile />}
        {params.set === "setting" && <MySetting />}
      </div>
    </Container>
  );
}
