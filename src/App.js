
import './App.css';
//import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './screens/Home';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "#FFF8E7"; // Red background color
  }, []);
 
  return (
    <Router>
       <div>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/createuser" element={<Signup/>} />
        </Routes>
       </div>
    </Router>
  );
}

export default App;
