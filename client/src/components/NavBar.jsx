import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  // state to handlle the active page
  const [activePage, setActivePage] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            onClick={() => {
              navigate("/");
            }}
          >
            Blog Application
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home */}
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === "Home" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActivePage("Home");
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              {/* AddBlog */}
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    activePage === "AddBlog" ? "active" : ""
                  }`}
                >
                  <a
                    onClick={() => {
                      setActivePage("AddBlog");
                      navigate("/AddBlog");
                    }}
                  >
                    Add Blog
                  </a>
                </div>
              </li>
              {/* Search */}
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === "Search" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActivePage("Search");
                    navigate("/Search");
                  }}
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
