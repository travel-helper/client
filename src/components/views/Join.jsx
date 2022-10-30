import axios from "axios";
import React from "react";
import { Container, Collapse} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Post from "../Post";


const joinBtnClick = (email,password,nickname,gender,age,address) => {
    console.log("버튼이 눌렸당께요")
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

    const [successJoin,setSuccessJoin] = useState(true);

    const [notMatchingPW, setNotMatchingPW] = useState(false);

    const [matchingPW, setMatchingPW] = useState(false);

    const samePassword = (e, setNotMatchingPW, setMatchingPW, password) => {
        
        if(e.target.value == password ){
            setNotMatchingPW(false)
            setMatchingPW(true);
        }else{
            setNotMatchingPW(true)
            setMatchingPW(false);
        }
    }

    
    const changeValue = () => {
        console.log("작동 한다께용")
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const nickname = document.getElementById("nickname").value;
        if(email.length > 0 && password.length >= 7 && nickname.length>2&&nickname.length<15){
            return setSuccessJoin(false);

        }else{
            return setSuccessJoin(true);
        }
    }
    return (
        <div>
            <p className="sns_text">sns로 간편 회원가입</p>
            <div className="sns_login_btn">
                <button id="kakao_login_join_btn"></button>
                <button id="naver_login_join_btn"></button>
                <button id="facebook_login_join_btn"></button>
            </div>
            <hr></hr>
            <Container className="p-4 d-flex justify-content-center">
                <Form className="w-50" >
                    <Form.Group className="mb-1" controlId="formBasicEmail" > 
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email"  className="bg-secondary bg-opacity-10" id="email" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <p id="font_size">영문, 숫자를 포함한 8자의 문자열을 입력해주세요.</p>
                        <Form.Control type="password" className="bg-secondary bg-opacity-10" id="password" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type="password" className="bg-secondary bg-opacity-10" 
                                    onChange={(e)=>{
                                        const password = document.getElementById("password").value;
                                        samePassword(e, setNotMatchingPW, setMatchingPW, password)}
                                    } id="passwordCheck"
                                    aria-controls="passwordCheck-text" aria-expanded={notMatchingPW} />
                        <Collapse in={notMatchingPW}>
                                <div id="passwordCheck-text" style={{color:"red"}}>
                                비밀번호가 일치하지 않습니다.
                                </div>
                            </Collapse>
                        <Collapse in={matchingPW}>
                                <div id="passwordCheck-text" style={{color:"blue"}}>
                                비밀번호가 일치합니다
                                </div>
                        </Collapse>                         
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>닉네임</Form.Label>
                        <p id="font_size">2~15자 사이로 입력해주세요.</p>
                        <Form.Control type="text" className="bg-secondary bg-opacity-10 mb-3" id="nickname" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <div>
                            <Form.Label>성별</Form.Label>
                        </div>
                        
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" type="radio" name="gender" id="male" value="male"/>
                            <label className="form-check-label" htmlFor="male">남성</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="female"/>
                            <label className="form-check-label" htmlFor="female">여성</label>
                        </div>
                        
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>생년월일</Form.Label>
                        <div className="bir_yy">
                            <span className="ps_box">
                                <input type="text"  className="form-control" id="yy" placeholder="년(4자)" maxlengtn="4"/>
                            </span>
                        </div>
                        <div className="bir_mm">
                            <span>
                                <select className="form-select" id="mm">
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
                        <div className="bir_dd">
                            <span>
                                <input type="text" className="form-control" id="dd" placeholder="일" maxlenth="2"/>
                            </span>
                        </div>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label >주소</Form.Label>  
                    <button onClick={handleComplete} className="adress_serch"> 찾기</button>  
                    <div className="address_search">
                        <input id="address" className="user_enroll_text" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address} />
                        
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>
                    </Form.Group>

                    <button disabled={successJoin} id="login_join_btn" onClick={()=>{
                        const yy = document.getElementById("yy").value
                        const mm = document.getElementById("mm").value
                        const dd = document.getElementById("dd").value
                        const age = yy+mm+dd
                        const getGender = document.querySelector("input[name='gender']:checked")
                        const email = document.getElementById("email").value
                        const password = document.getElementById("password").value
                        const nickname = document.getElementById("nickname").value
                        const address = document.getElementById("address").value

                        joinBtnClick(age,getGender,email,password,nickname,address);
                    }}>
                        회원가입
                    </button>
                </Form>
            </Container>
            
        </div>
  );
}
export default Join