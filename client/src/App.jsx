import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddBlog from "./pages/AddBlog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Search from "./pages/Search.jsx";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBlog" element={<AddBlog />} />
        <Route path="/BlogDetails/:id" element={<BlogDetails />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
