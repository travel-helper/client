import React from 'react'
import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Overlay , Popover,Button, OverlayTrigger} from 'react-bootstrap';
import "bootstrap/dist/js/bootstrap.bundle";


export const Header = () => {
  const [OkLogin, setOkLogin] = useState(true); 
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div>
      <img src={'img/mini_logo.png'} alt="logo" id="main_logo_img"/>
      
    <button id="main_menu_btn_design">
      <Link to="/community" id="link">커뮤니티</Link>
    </button>
    <button id="main_menu_btn_design">
      <Link to="/qa" id="link">문의</Link>
    </button>
    {OkLogin&&(<button id="main_login_btn"><Link to="/login" id="link">로그인/회원가입</Link></button>)}
    {!OkLogin&&(
      <>
      <OverlayTrigger
          
          trigger="click"
          placement={'bottom'}
          overlay={
            <Popover id={`popover-positioned bottom`}>
              <Popover.Body>
                <button className='d-block border-0 bg-light p-2 text-dark bg-opacity-10 fs-6'>마이페이지</button>
                <button className='d-block border-0 bg-light p-2 text-dark bg-opacity-10 fs-6'>로그아웃</button>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" id="info_icon"></Button>
        </OverlayTrigger>

        <button id='bell_icon'></button>
        <button id="write"><Link to="/write" id="link" className='write_font'><p>글쓰기</p></Link></button>
      </>
    )}
    </div>
  )
}

export default Header

        
        