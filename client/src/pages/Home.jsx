import React from "react";
import AllBlogs from "./AllBlogs.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <AllBlogs />
      <Footer />
    </>
  );
}
