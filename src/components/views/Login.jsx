import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginBtnClick = (email, password) => {
    const dataForm = new FormData();
    dataForm.append("id",email);
    dataForm.append("password",password)
    axios.post("/api/auth/login",dataForm).then((res)=>{
        if(!!res){
            alert("로그인 성공")
        }
    }).catch((res)=>{
        alert(res+"에러 발생")
    })    
}
const Login = () => {
    return (
            <Container className="login_page">
                <Form className="w-50">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Control id="email" type="email" placeholder="이메일" className="bg-secondary bg-opacity-10" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control id="password" type="password" placeholder="비밀번호" className="bg-secondary bg-opacity-10" />
                    </Form.Group>
                    <button id="login_join_btn" onClick={()=>{
                        const email = document.getElementById("email").value
                        const password = document.getElementById("password").value
                        LoginBtnClick(email, password);
                    }}>
                        로그인
                    </button>

                    <button id="pw_update_btn">
                        비밀번호 재설정
                    </button>
                    
                    <button id="btn_design">
                        <Link to="/join" id="link">회원가입</Link>
                    </button>
                    
                    <br/>
                    <br/>
                    <hr/>
                    <p className="sns_text">sns로 간편 로그인 및 회원가입</p>

                    <div className="sns_login_btn">
                        <button id="kakao_login_join_btn"></button>
                        <button id="naver_login_join_btn"></button>
                        <button id="facebook_login_join_btn"></button>
                    </div>
                    
                </Form>
            </Container>
    
  );
};

export default Login;
