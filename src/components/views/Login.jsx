import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../_actions/userAction";
import { useForm } from "react-hook-form";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register, //유효성 검사
    handleSubmit, //submit함수를 인자로 받는 함수
    formState: { isSubmitting, errors }, //form의 상태
    //isSubmitting -> 제출중
    //errors -> 유효성 훼손
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "fkdldjsaos87@naver.com", password: "tkfkdgo1!" },
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/");
  };

  return (
    <Container className="login_page">
      <Form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control
            className="bg-secondary bg-opacity-10"
            id="email"
            type="text"
            placeholder="이메일"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && <small role="alert">{errors.email.message}</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="bg-secondary bg-opacity-10"
            id="password"
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
            })}
          />
          {errors.password && (
            <small role="alert">{errors.password.message}</small>
          )}
        </Form.Group>

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
      </Form>
    </Container>
  );
};

export default Login;
