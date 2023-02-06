const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  GetAllBlogs,
  GetOneBlog,
  UpVoteBlog,
  DownVoteBlog,
  AddNewBlog,
  SearchBlog,
} = require("../Controller/Blog.js");

//GET request to fetch all blogs.
router.get("/GetAllBlogs", GetAllBlogs);
// GET request for one blog.
router.get("/GetOneBlog/:id", GetOneBlog);
// POST request for creating a new blog.
router.post("/AddNewBlog", AddNewBlog);

// Update request for updating the number of up and down vote of each blog
router.put("/UpVoteBlog/:id", UpVoteBlog);
router.put("/DownVoteBlog/:id", DownVoteBlog);
// POST request for search for a blog.
router.post("/SearchBlog", SearchBlog);

module.exports = router;
