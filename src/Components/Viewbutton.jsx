import { Title } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Viewbutton = ({ link, title, mode }) => {
  return (
    <Link className={`button-${mode} text-uppercase my-xl-2 my-3`} to={`/${link}`}>
      {title}
    </Link>
  );
};

export default Viewbutton;
