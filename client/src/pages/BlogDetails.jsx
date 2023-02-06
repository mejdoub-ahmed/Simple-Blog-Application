import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useParams } from "react-router";

export default function OneBlog() {
  // state to save the blog
  let [OneBlog, setOneBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/Blog/GetOneBlog/${id}`).then((result) => {
      setOneBlog(result.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Post content*/}
            <article>
              <header className="mb-4">
                {/* Post title*/}
                <h1 className="fw-bolder mb-1">{OneBlog.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted by: {OneBlog.author}
                </div>
              </header>
              {/* Preview image figure*/}
              <img
                className="img-fluid rounded"
                src={OneBlog.photo}
                alt="Photo"
              />

              {/* Post content*/}
              <section className="mb-5">
                <p className="fs-5 mb-4">{OneBlog.content}</p>
              </section>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
