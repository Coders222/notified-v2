import Landing from "./components/Landing.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path = "/Register" element = {<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
