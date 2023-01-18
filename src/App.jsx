import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
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
        <Route exact path="/download" element={<Download mode={mode} />} />
        <Route exact path="/gtuimp" element={<Paper linka="gtuimp" />} />
        <Route exact path="/adudpaper" element={<Paper linka="adudpaper" />} />
        <Route exact path="/iswapaper" element={<Paper linka="iswapaper" />} />
        <Route exact path="/varpaper" element={<Paper linka="varpaper" />} />
        <Route exact path="/cvpaper" element={<Paper linka="cvpaper" />} />
        <Route exact path="/iotpaper" element={<Paper linka="iotpaper" />} />
        <Route exact element={<Navigate to="/*" />} />
      </Routes>
    </Router>
  );
}

export default App;
