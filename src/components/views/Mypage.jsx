import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useRef } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import MyProfile from "./MyProfile";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../../_actions/userAction";

const Mypage = () => {
  const [profilestate, setProfilestate] = useState(1);

  const [imageSrc, setImageSrc] = useState("img/mini_camera.png");
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    //각 란의 유효성 검사 형식
    email: Yup.string().email("올바르지 않은 이메일 형식 입니다."),
    nickname: Yup.string().min(2, "너무 짧습니다.").max(15, "너무 깁니다."),
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

  const selectFile = useRef("");
  return (
    <Container>
      <div className="w-100 justify-content-center d-flex">
        <button
          className="border-0 bg-transparent fw-bold fs-3"
          onClick={() => {
            setProfilestate(1);
          }}
        >
          프로필
        </button>
        <button
          className="border-0 bg-transparent fw-bold fs-3"
          onClick={() => {
            setProfilestate(2);
          }}
        >
          설정
        </button>
      </div>
      <div className="mypage-border">
        {profilestate == 1 && <MyProfile />}
        {profilestate == 2 && (
          <div>
            <div className="mypage-title">
              <h2 className="w-100 fw-bold">회원정보 수정</h2>
              <button
                className="useinfo-modify"
                disabled={isSubmitting}
                type="submit"
              >
                수정완료
              </button>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="d-flex mb-3" controlId="formBasicEmail">
                <Form.Label className="w-25 fw-bold">이메일</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@naver.com"
                  className="w-50"
                  id="email"
                  {...register("email")}
                />
                {errors.email && (
                  <small role="alert">{errors.email.message}</small>
                )}
              </Form.Group>

              <Form.Group className="d-flex mb-3" controlId="formBasicPassword">
                <Form.Label className="w-25 fw-bold">닉네임</Form.Label>
                <Form.Control
                  type="text"
                  className="w-50"
                  id="nickname"
                  placeholder="2~15자 사이로 입력해주세요"
                  {...register("nickname")}
                />
                {errors.nickname && (
                  <small role="alert">{errors.nickname.message}</small>
                )}
              </Form.Group>

              <Form.Group className="d-flex mb-3" controlId="formBasicPassword">
                <Form.Label className="w-25 fw-bold">성별</Form.Label>

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

              <Form.Group className="d-flex mb-3" controlId="formBasicEmail">
                <Form.Label className="w-25 fw-bold">생년월일</Form.Label>
                <Form.Control
                  className="w-50"
                  id="birth"
                  type="text"
                  placeholder="YYYYMMDD"
                  {...register("birth")}
                />

                {errors.birth && (
                  <small role="alert">{errors.birth.message}</small>
                )}
              </Form.Group>
            </Form>
            <div className="d-flex mb-3">
              <div className="mt-3 w-25 fw-bold">프로필이미지</div>
              <div
                style={{ backgroundColor: "#E7E7E7" }}
                onClick={() => selectFile.current.click()}
                className="w-25 "
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={selectFile}
                  onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                  }}
                />
                <div className="mypage-image">
                  {imageSrc && <img src={imageSrc} alt="preview-img" />}
                </div>
              </div>
            </div>
            <hr className="w-100 mb-3" />
            <button
              className="btn btn-danger fw-bold"
              disabled={isSubmitting}
              type="submit"
            >
              탈퇴하기
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Mypage;
