import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  // state to save serched key words
  let [searchedWord, SetSearchedWord] = useState("");

  // state to save serched blog data
  let [searchedBlogData, SetSearchedBlogData] = useState([]);

  // function to find blog
  const SearchBlog = () => {
    axios
      .post(`http://localhost:5000/Blog/SearchBlog`, {
        text: searchedWord,
      })
      .then((result) => {
        SetSearchedBlogData(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // function to render elemen
  const renderElement = (element) => {
    return (
      <>
        <div>
          <img className="card-img-top" src={element.photo} alt="Photo" />
          <div className="card-body">
            <h2 className="card-title">{element.title}</h2>
            <div className="row">
              <div className="col-md-6">
                <a
                  className="btn btn-dark"
                  onClick={() => {
                    navigate(`/BlogDetails/${element._id}`);
                  }}
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // function to render the border of blog according to the number of votes
  const renderBorderElement = (element) => {
    return {
      border: `2px solid ${
        element.upvote >= element.downvote ? "green" : "red"
      }`,
    };
  };

  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="col-md-8 mb-4 mt-4">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(event) => {
                SetSearchedWord(event.target.value);
              }}
            />
            <button
              onClick={() => {
                SearchBlog();
              }}
              type="button"
              className="btn btn-outline-dark"
            >
              search
            </button>
          </div>
        </div>
      </div>

      {searchedBlogData.length === 0 || !searchedWord ? (
        <blockquote className="blockquote text-center">
          <p className="mb-0">your search didn't match any results</p>
        </blockquote>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {searchedBlogData?.map((element, index) => {
                return (
                  <div key={index} className="col-md-6 border-card mb-4">
                    <div className="card" style={renderBorderElement(element)}>
                      {renderElement(element)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
