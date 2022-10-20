import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./componetns/views/Login";
import Main from "./componetns/views/Main";
import Join from "./componetns/views/Join";
import { Header } from "./componetns/Header";
import BorderWrite from "./componetns/views/BorderWrite";

function App() {
    return (
    <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join/>}/>
        <Route path="/write" element={<BorderWrite/>}/>
      </Routes>
    </div>
  );
}

export default App;