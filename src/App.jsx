import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Download from "./Components/Download";
import Paper from "./Components/Paper";



function App() {
  const [mode, setMode] = useState("light");


  var togglemode = () => {
    if (mode === "light") {
      window.localStorage.setItem("mode", "dark")
      setMode("dark");
      document.body.style.backgroundColor = "#08080a";
      document.getElementById("root").style.backgroundColor = "#08080a";
    } else {
      window.localStorage.setItem("mode", "light")
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.getElementById("root").style.backgroundColor = "#ffffff";
    }
  };

  return (
    <Router>
      <Header mode={mode} togglemode={togglemode} />
      <Routes>
        <Route index path="/*" element={<Home mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/downloada" element={<Download mode={mode} />} />

      </Routes>
    </Router>
  );
}

export default App;
