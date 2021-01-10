const Post = require("../models/post");

exports.ajouterPost = async (req, res) => {
  const { description } = req.body;

  try {
    const newPost = new Post({ user: req.user.id, description });

    const response = await newPost.save();
    res.send({ response: response, message: "post is saved" });
  } catch (error) {
    console.log(error);
    res.statuts(500).send({ message: "can not save it " });
  }
};

exports.chercherPost = async (req, res) => {
  try {
    const result = await Post.find().populate("user");
    res.send({ response: result, message: "geeting posts successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not get posts" });
  }
};

exports.chercherPostbyid = async (req, res) => {
  try {
    const result = await Post.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geeting contact successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const result = await Post.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ rseponse: "post deleted " })
      : res.send("there is no post with this id ");
    console.log(result);
    res.send("deleted");
  } catch (error) {
    res.send("not deleted");
  }
};

exports.updatePost = async (req, res) => {
  try {
    const result = await Post.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "contact updated" })
      : res.send({ message: "contact already  updated" });
  } catch (error) {
    res.status(400).send("not updated");
  }
};
