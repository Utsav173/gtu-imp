
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Download from "./Components/Download";


function App() {

  const [mode, setMode] = useState("light");
  var togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.getElementById("root").style.backgroundColor ="#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.getElementById("root").style.backgroundColor = "#f8f9fa";
    }
  }

  return (
    
    <Router>
      <Header mode={mode} togglemode={togglemode}/>
      <Routes>
        <Route index path="*" element={<Home mode={mode}/>}/>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/download" element={<Download mode={mode}/>}/>
        <Route index path="/" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;