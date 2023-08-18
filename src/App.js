import Landing from './components/Landing.js';
import Login from './components/Login.js'
import {HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Landing/>} ></Route>
        <Route exact path = "/Login" element = {<Login/>} ></Route>
      </Routes>
    </Router>
     

  );
}

export default App;
