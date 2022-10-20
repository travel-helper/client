import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "남성",
    "백",
    "기프트",
    "리네아 로사",
    "PRADASPHERE",
  ];
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div className="border-bottom border-gray-100 border-1">
      <div className="prada-logo">
        <Link to="/">
          <img
            width={120}
            src="../img/logo.png"
          />
        </Link>
      </div>

      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="/product" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
        <div className="user-btn">
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="제품검색"
              onKeyPress={onCheckEnter}
            />
          </div>
          <div>
            {authenticate ? (
              <div onClick={() => setAuthenticate(false)}>
                <FontAwesomeIcon icon={faUser} />
                <span>로그아웃</span>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <FontAwesomeIcon icon={faUser} />
                <span>로그인</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;