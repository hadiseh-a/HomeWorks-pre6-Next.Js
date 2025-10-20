import NavBar from "@/components/NavBar";
import React from "react";

function layout({ children }) {
  return (
    <>
      <NavBar />

      {children}
    </>
  );
}

export default layout;
