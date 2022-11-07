import React from "react";
import Navbar from "../Navbar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
