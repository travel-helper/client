import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Post from "../main/Post";




const joinBtnClick = (email,password,nickname,gender,age,address) => {
    const dataForm = new FormData();
    dataForm.append("id",email);
    dataForm.append("password",password)
    dataForm.append("nickname",nickname)
    dataForm.append("gender",gender)
    dataForm.append("age",age)
    dataForm.append("address",address)

    axios.post("/api/auth/signup",dataForm).then((res)=>{
        if(!!res){
            alert("회원가입 성공")
        }
    }).catch((res)=>{
        alert(res+"에러 발생")
    })
    
}
const Join = () => {
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }

    const [successJoin,setSuccessJoin] = useState(false);

    const changePassword = (e) => {
        
    }
    return (
        <div>
            
            <Container className="p-4 d-flex justify-content-center">
                <Form className="w-50" >
                    <Form.Group className="mb-1" controlId="formBasicEmail" > 
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email"  className="bg-secondary bg-opacity-10" id="email" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <p id="font_size">영문, 숫자를 포함한 8자의 문자열을 입력해주세요.</p>
                        <Form.Control type="password" className="bg-secondary bg-opacity-10" id="password"/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type="password" className="bg-secondary bg-opacity-10" onChange={changePassword} id="passwordCheck" />
                    
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>닉네임</Form.Label>
                        <p id="font_size">2~15자 사이로 입력해주세요.</p>
                        <Form.Control type="text" className="bg-secondary bg-opacity-10 mb-3" id="nickname"/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <div>
                            <Form.Label>성별</Form.Label>
                        </div>
                        
                        <div class="form-check form-check-inline">
                            <input  class="form-check-input" type="radio" name="gender" id="male" value="male"/>
                            <label class="form-check-label" for="male">남성</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="female" value="female"/>
                            <label class="form-check-label" for="female">여성</label>
                        </div>
                        
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>생년월일</Form.Label>
                        <div class="bir_yy">
                            <span class="ps_box">
                                <input type="text" class="form-control" id="yy" placeholder="년(4자)" maxlengtn="4"/>
                            </span>
                        </div>
                        <div class="bir_mm">
                            <span>
                                <select class="form-select" id="mm">
                                    <option>월</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                            </span>
                        </div>
                        <div class="bir_dd">
                            <span>
                                <input type="text" class="form-control" id="dd" placeholder="일" maxlenth="2"/>
                            </span>
                        </div>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>주소</Form.Label>    
                    <div className="address_search" >
                        <input id="address" className="user_enroll_text" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                        <button onClick={handleComplete} className="mb-3">우편번호 찾기</button>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>
                    </Form.Group>

                    <button disabled={true} id="login_join_btn" onClick={()=>{
                        const yy = document.getElementById("yy").value
                        const mm = document.getElementById("mm").value
                        const dd = document.getElementById("dd").value
                        
                        const age = yy+mm+dd

                        const getGender = document.querySelector("input[name='gender']:checked")



                        const email = document.getElementById("email").value
                        const password = document.getElementById("password").value
                        const nickname = document.getElementById("nickname").value
                        
                        
                        const address = document.getElementById("address").value

                        joinBtnClick(email, password,nickname,getGender,age,address);
                    }}>
                        회원가입
                    </button>

                
                    
                    
                </Form>
            </Container>
            
        </div>
  );
}

export default Join