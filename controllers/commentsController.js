const express = require("express");
const comments = express.Router({ mergeParams: true });
const {
  getAllComments,
  getOneComment,
  createComment,
  deleteComment,
  updateComment,
} = require("../queries/comments");

//getall
comments.get("/", async (req, res) => {
  const { itemId } = req.params;
  const allComments = await getAllComments(itemId);
  try {
    res.status(200).json(allComments);
  } catch (error) {
    res.status(500).json({ error: "Server error!!!" });
  }
});

//getOne
comments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const aComment = await getOneComment(id);
  if (!aComment.message) {
    res.status(200).json(aComment);
  } else {
    res.status(404).json({ error: "comment id not found!" });
  }
});

//create a comment
comments.post("/", async (req, res) => {
  try {
    const newComment = await createComment(req.body);
    res.status(200).json(newComment);
  } catch (error) {
    res.status(404).json({ error: "failed to create comment" });
  }
});

//delete a comment
comments.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await deleteComment(id);
    return res.status(200).json(deletedComment);
  } catch (error) {
    res.status(404).json({ error: "could not find comment to delete" });
  }
});

//update a comment
comments.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedComment = await updateComment(id, req.body);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: "cannot fulfill update" });
  }
});

module.exports = comments;
