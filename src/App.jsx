
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";

import { Analytics } from '@vercel/analytics/react';
import Download from "./Components/Download";

<Analytics debug={false} />;

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="*" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/download" element={<Download/>}/>
      </Routes>
    </Router>
  );
}

export default App;