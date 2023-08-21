import Landing from "./components/Landing.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import PasswordReset from "./components/PasswordReset.js";
import Home from "./components/Home.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path = "/Register" element = {<Register/>}></Route>
        <Route exact path = "/PasswordReset" element = {<PasswordReset/>}></Route>
        <Route exact path = "/Home" element = {<Home/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
