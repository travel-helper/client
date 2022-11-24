import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import AddressSearch from "../AddressSerch";
import { signup } from "../../_actions/userAction";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";
const Join = () => {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    //각 란의 유효성 검사 형식
    email: Yup.string()
      .email("올바르지 않은 이메일 형식 입니다.")
      .required("이메일은 필수 입력 항목 입니다."),

    password: Yup.string()
      .required("비밀번호는 필수 입력 항목 입니다.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
        "숫자와 특수문자를 포함한 8~20자의 영문을 입력해주세요"
      ),
    nickname: Yup.string()
      .required("닉네임은 필수 입력 항목 입니다.")
      .min(2, "너무 짧습니다.")
      .max(15, "너무 깁니다."),
    password_check: Yup.string()
      .oneOf([Yup.ref("password")], "비밀번호가 일치 하지 않습니다.")
      .required("비밀번호 체크는 필수 입력 항목 입니다."),
    birth: Yup.string()
      .required("생년월일은 필수 입력 항목 입니다.")
      .matches(
        /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
        "생년월일 형식을 지켜주세요 ex) 19990427"
      ),
  });

  const {
    register, //유효성 검사, submit시 제출할 항목 명시
    handleSubmit, //submit함수를 인자로 받는 함수
    formState: { isSubmitting, errors }, //form의 상태
    //isSubmitting -> 제출중
    //errors -> 유효성 훼손
  } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onChange", //입력시마다 유효성 체크
  });

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  const [popup, setPopup] = useState(false);

  const handleComplete = (data) => {
    setPopup(!popup);
  };
  //주소 찾기 팝업 stare, 함수

  return (
    <div>
      <p className="sns_text">sns로 간편 회원가입</p>
      <div className="sns_login_btn">
        <button className="kakao_login_join_btn"></button>
        <button className="naver_login_join_btn"></button>
        <button className="facebook_login_join_btn"></button>
      </div>
      <hr></hr>
      <Container className="p-4 d-flex justify-content-center">
        <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@naver.com"
              className="bg-secondary bg-opacity-10"
              id="email"
              {...register("email")}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="숫자와 특수문자를 포함한 8~20자의 영문을 입력해주세요"
              className="bg-secondary bg-opacity-10"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              type="password"
              className="bg-secondary bg-opacity-10"
              id="password_check"
              {...register("password_check")}
            />
            {errors.password_check && (
              <small role="alert">{errors.password_check.message}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              type="text"
              className="bg-secondary bg-opacity-10 mb-3"
              id="nickname"
              placeholder="2~15자 사이로 입력해주세요"
              {...register("nickname")}
            />
            {errors.nickname && (
              <small role="alert">{errors.nickname.message}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>성별</Form.Label>

            <div key={"inline-radio"}>
              <Form.Check
                inline
                checked
                name="gender"
                type="radio"
                label="남자"
                value="male"
                {...register("gender")}
              />
              <Form.Check
                inline
                name="gender"
                type="radio"
                label="여자"
                value="female"
                {...register("gender")}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>생년월일</Form.Label>
            <Form.Control
              className="bg-secondary bg-opacity-10"
              id="birth"
              type="text"
              placeholder="YYYYMMDD"
              {...register("birth")}
            />

            {errors.birth && <small role="alert">{errors.birth.message}</small>}
          </Form.Group>

          <Form.Group>
            <Form.Label>주소</Form.Label>
            <button onClick={handleComplete} className="adress_serch">
              주소 찾기
            </button>

            <Form.Control
              className="bg-secondary bg-opacity-10"
              id="address"
              type="text"
              placeholder="[주소 찾기]를 눌러 입력해주세요"
              value={enroll_company.address}
              {...register("address")}
            />
            {popup && (
              <AddressSearch
                company={enroll_company}
                setcompany={setEnroll_company}
              ></AddressSearch>
            )}
          </Form.Group>
          <Form.Label> </Form.Label>
          <button
            disabled={isSubmitting}
            className="login_join_btn"
            type="submit"
          >
            회원가입
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Join;
