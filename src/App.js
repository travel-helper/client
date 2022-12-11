import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/views/Main";
import Login from "./components/views/Login";
import Join from "./components/views/Join";
import Event from "./components/views/Event";
import Write from "./components/views/Write";
import Community from "./components/views/Community";
import Mypage from "./components/views/Mypage";
import Travel from "./components/views/Travel";
import PostDetail from "./components/views/PostDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/write" element={<Write />} />
        <Route path="/event" element={<Event />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage/:set" element={<Mypage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/event" element={<Event />} />
        <Route path="/postabc" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
