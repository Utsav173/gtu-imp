import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Paper from "./Paper";
import Viewbutton from "./Viewbutton";

const Home = (props) => {

const obj =[
  {link:"varpaper",title:"var previous year paper" },
  {link:"adudpaper",title:"adud previous year paper" },
  {link:"iswapaper",title:"iswa previous year paper" },
  {link:"iotpaper",title:"iot previous year paper" },
  {link:"wcpaper",title:"wc previous year paper" },
  {link:"cvpaper",title:"cv previous year paper" },
  {link:"spmpaper",title:"spm previous year paper" },
  {link:"gtuimp",title:"gtu imp questions" },
]

  return (
    <Container className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <Container className="text-center my-2">
        <h1 variant="secondary" className="my-4 p-2 text-capitalize">
          Click below button to read document
        </h1>
        <main className="row row-cols-sm-1 row-cols-xl-4 gap-2 mb-2 justify-content-around align-item-center">
          {obj.map((itms)=>{
            return <Viewbutton link={itms.link} title={itms.title} mode={props.mode}/>
          })}
        </main>
      </Container>
      <Routes>
      <Route exact path="/gtuimp" element={<Paper linka="gtuimp" />} />
        <Route exact path="/adudpaper" element={<Paper linka="adudpaper" />} />
        <Route exact path="/iswapaper" element={<Paper linka="iswapaper" />} />
        <Route exact path="/varpaper" element={<Paper linka="varpaper" />} />
        <Route exact path="/cvpaper" element={<Paper linka="cvpaper" />} />
        <Route exact path="/iotpaper" element={<Paper linka="iotpaper" />} />
        <Route exact path="/spmpaper" element={<Paper linka="spmpaper" />} />
        <Route exact path="/wcpaper" element={<Paper linka="wcpaper" />} />
      </Routes>
    </Container>
  );
};

export default Home;
