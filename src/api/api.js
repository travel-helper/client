import axios from "axios";

// axios.defaults.baseURL = "https://server-production-73a6.up.railway.app";
axios.defaults.baseURL = "http://localhost:443";
axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const setAuthToken = async (token) => {
  console.log(1);
  if (token) {
    //jwt가 있으면
    // axios.defaults.headers.common["authorization"] = `Bearer${token}`;
    axios.defaults.headers.common["authorization"] = token; //백엔드 측에서 Bearer을 없애줘야 하는데 임시적으로 이렇게 사용
    //요청헤더에 authorization 항목을 기본으로 탑재
  } else {
    delete axios.defaults.headers.common["authorization"];
    //삭제
  }
};
export const requestLogin = async (params) => {
  delete axios.defaults.headers.common["authorization"];
  const response = await axios.post("/user/login", params);
  console.log(response.data);
  return response.data;
};

export const fetchUser = async (params) => {
  const response = await axios.get("/user");
  return response.data;
};

export const requestlogout = async (params) => {
  console.log(2);
  axios.defaults.headers.common["authorization"] = localStorage.jwtToken;
  const response = await axios.post("/user/logout");
  console.log("call requestlogout");
  return response.data;
};

export const requestSignUp = async (params) => {
  const response = await axios.post("/user/signup", params);
  return response.data;
};

export const sendImg = async (params) => {
  const response = await axios.post("/post/img", params);

  return response.data;
};
export const sendPost = async (params) => {
  const response = await axios.post("/post", params);

  return response.data;
};
export const requestPosts = async (params) => {
  const response = await axios.get(`/post?lastId=${params?.lastId || 0}`);
  
  return response.data;
};
