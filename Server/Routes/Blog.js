const express = require("express");
const router = express.Router();

const {
  GetAllBlogs,
  GetOneBlog,
  UpVoteBlog,
  DownVoteBlog,
  AddNewBlog,
  SearchBlog,
} = require("../Controller/Blog.js");

router.get("/GetAllBlogs", GetAllBlogs);
router.get("/GetOneBlog/:id", GetOneBlog);
router.post("/AddNewBlog", AddNewBlog);

router.put("/UpVoteBlog/:id", UpVoteBlog);
router.put("/DownVoteBlog/:id", DownVoteBlog);

router.post("/SearchBlog", SearchBlog);

module.exports = router;
