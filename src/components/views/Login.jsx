import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { login } from "../../_actions/userAction";
import { useForm } from "react-hook-form";
const Login = () => {
  const dispatch = useDispatch();

  const {
    register, //유효성 검사
    handleSubmit, //submit함수를 인자로 받는 함수
    formState: { isSubmitting, errors }, //form의 상태
    //isSubmitting -> 제출중
    //errors -> 유효성 훼손
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <Container className="login_page">
      <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control
            className="bg-secondary bg-opacity-10"
            id="email"
            type="text"
            placeholder="test@email.com"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {errors.email && <small role="alert">{errors.email.message}</small>}
          <Form.Control
            className="bg-secondary bg-opacity-10"
            id="password"
            type="password"
            placeholder="****************"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
            })}
          />
        </Form.Group>
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
        <button
          className="login_join_btn"
          type="submit"
          disabled={isSubmitting}
        >
          로그인
        </button>
        <button className="pw_update_btn">비밀번호 재설정</button>
        <button className="btn_design">
          <Link to="/join" id="link">
            회원가입
          </Link>
        </button>
        <br />
        <br />
        <hr />
        <p className="sns_text">sns로 간편 로그인 및 회원가입</p>

        <div className="sns_login_btn">
          <button className="kakao_login_join_btn"></button>
          <button className="naver_login_join_btn"></button>
          <button className="facebook_login_join_btn"></button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
