import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/views/Main";
import Login from "./components/views/Login";
import Join from "./components/views/Join";
import Event from "./components/views/Event";
import Write from "./components/views/Write";
import QA from "./components/views/QA";
import Community from "./components/views/Community";


function App() {
    return (
    <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/qa" element={<QA/>}/>
        <Route path="/community" element={<Community/>}/>
      </Routes>
    </div>
  );
}

export default App;