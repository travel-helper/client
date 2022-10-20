import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div><img src={'img/mini_logo.png'} alt="logo" id="main_logo_img"/>
      
    <button id="main_menu_btn_design">
      <Link to="/community" id="link">커뮤니티</Link>
    </button>
    <button id="main_menu_btn_design">
      <Link to="/qa" id="link">문의</Link>
    </button>

    <button id="main_login_btn">로그인/회원가입</button></div>
  )
}
