import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router, Route } from "react-router-dom";


import Event from "./componetns/views/Event"
import Login from "./componetns/views/Login";
import Main from "./componetns/views/Main";
import Join from "./componetns/views/Join";
import { Header } from "./componetns/Header";
import BorderWrite from "./componetns/views/BorderWrite";


function App() {
    return (
    <div>
        <Header/>
        {/* <Router>
            <Route path='/' component={Event}/>
            </Router> */}
        <Event/>
    </div>
  );
}

export default App;