import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddBlogs() {
  const navigate = useNavigate();

  // states to save title input
  let [title, setTitle] = useState("");
  let [errorTitle, setErrorTitle] = useState("");
  // states to save author input
  let [author, setAuthor] = useState("");
  let [errorAuthor, setErrorAuthor] = useState("");
  // states to save content input
  let [content, setContent] = useState("");
  let [errorContent, setErrorContent] = useState("");

  // state the save the url of the picture
  let [url, setUrl] = useState("");

  // state to handlle the response of adding a new blog
  let [submit, setSubmit] = useState(false);
  let [submitPicture, setSubmitPicture] = useState(false);

  // function to add a new blog
  const AddNewBlog = () => {
    if (title.trim() === "") setErrorTitle("Title cannot be empty");
    if (author.trim() === "") setErrorAuthor("Author cannot be empty");
    if (content.trim() === "") setErrorContent("Content cannot be empty");
    else {
      axios
        .post(`http://localhost:5000/Blog/AddNewBlog`, {
          title: title,
          content: content,
          author: author,
          photo: url,
          upvote: 0,
          downvote: 0,
        })
        .then(() => {
          setSubmit(true);
        })
        .then(() => {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // function to upload picture using cloudinary
  const uplodImage = async (filepath) => {
    const form = new FormData();
    form.append("file", filepath);
    form.append("upload_preset", "ahmedmejdoub");
    setSubmitPicture(true);
    await axios
      .post("https://api.cloudinary.com/v1_1/ddvyi3jpk/upload", form)
      .then((result) => {
        console.log(result.data.secure_url);
        setUrl(result.data.secure_url);
      })
      .then(() => {
        setSubmitPicture(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // function to render the success message
  const renderSuccessBox = () => {
    return submit ? (
      <div className="alert alert-success ">
        <strong>Success!</strong> New blog Gets Added!
      </div>
    ) : null;
  };
  // function to handlle the loading picture
  const renderLoadingOnPictureUpload = () => {
    return submitPicture ? (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : null;
  };
  // function to show the uploaded picture
  const renderUploadedPicture = () => {
    return url ? (
      <img className="img-fluid img-thumbnail" src={url} alt="" />
    ) : null;
  };

  return (
    <>
      <NavBar />
      {/* Page content*/}
      <section className="py-5">
        <div className="container px-5">
          {/* Add form*/}
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-envelope" />
              </div>
              <h1 className="fw-bolder">Create a new blog</h1>
              <p className="lead fw-normal text-muted mb-0">
                We'd love to hear from you
              </p>
            </div>

            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                {renderSuccessBox()}
                {/* Name input*/}

                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${errorTitle ? "is-invalid" : ""}`}
                    type="text"
                    placeholder="Title"
                    id="validationServer05"
                    onChange={(event) => {
                      setTitle(event.target.value);
                      if (errorTitle) setErrorTitle("");
                    }}
                  />
                  <label>Title</label>
                  {errorTitle && (
                    <div className="invalid-feedback">{errorTitle}</div>
                  )}
                </div>

                {/* Author input*/}

                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      errorAuthor ? "is-invalid" : ""
                    }`}
                    type="text"
                    placeholder="author"
                    id="validationServer05"
                    onChange={(event) => {
                      setAuthor(event.target.value);
                      if (errorAuthor) setErrorAuthor("");
                    }}
                  />
                  <label>Author</label>
                  {errorAuthor && (
                    <div className="invalid-feedback">{errorAuthor}</div>
                  )}
                </div>

                {/* Photo input*/}
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    onChange={(event) => {
                      uplodImage(event.target.files[0]);
                    }}
                  />

                  {renderLoadingOnPictureUpload()}

                  {renderUploadedPicture()}
                </div>

                {/* Content input*/}
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      errorContent ? "is-invalid" : ""
                    }`}
                    type="text"
                    placeholder="content"
                    style={{ height: "10rem" }}
                    onChange={(event) => {
                      setContent(event.target.value);
                      if (errorContent) setErrorContent("");
                    }}
                  />
                  <label>Content</label>
                  {errorContent && (
                    <div className="invalid-feedback">{errorContent}</div>
                  )}
                </div>

                {/* Submit Button*/}
                <div className="d-grid">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      AddNewBlog();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer*/}
      <Footer />
    </>
  );
}
