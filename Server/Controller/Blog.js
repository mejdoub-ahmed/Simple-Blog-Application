const Blog = require("../Database/Model/Blog.js");

// function to get all Blogs
const GetAllBlogs = async (req, res) => {
  try {
    const result = await Blog.find({});
    res.status(200).send(result.reverse());
  } catch (err) {
    res.status(500).send(err);
  }
};

// function to get one Blog by id
const GetOneBlog = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: "Not Found !!" });
    return;
  }

  try {
    const result = await Blog.findById(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// function to add a new Blog
const AddNewBlog = async (req, res) => {
  const new_blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    photo: req.body.photo,
    upvote: req.body.upvote,
    downvote: req.body.downvote,
  });

  try {
    await new_blog.save().then((result) => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// function to update the number of upvote
const UpVoteBlog = async (req, res) => {
  try {
    const result = await Blog.findByIdAndUpdate(
      { _id: req.params.id },
      { upvote: req.body.upvote }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

//function to update the number of downvote
const DownVoteBlog = async (req, res) => {
  try {
    const result = await Blog.findByIdAndUpdate(
      { _id: req.params.id },
      { downvote: req.body.downvote }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

//function to search blog by title,content, author
const SearchBlog = async (req, res) => {
  try {
    const result = await Blog.find({
      $or: [
        { title: { $regex: req.body.text } },
        { content: { $regex: req.body.text } },
        { author: { $regex: req.body.text } },
      ],
    });
    res.send(result.reverse());
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  GetAllBlogs,
  GetOneBlog,
  AddNewBlog,
  UpVoteBlog,
  DownVoteBlog,
  SearchBlog,
};
