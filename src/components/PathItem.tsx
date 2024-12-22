"use client";

import { usePathname } from "next/navigation";
import React from "react";

const PathItem = () => {
  const pathName = usePathname();

  if (!pathName) {
    return null;
  }

  if (pathName === "/") {
    return <>Home</>;
  }

  return <>{pathName.split("/")[1]}</>;
};

export default PathItem;
