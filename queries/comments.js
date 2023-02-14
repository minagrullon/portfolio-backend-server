const db = require("../db/dbConfig.js");

//index
const getAllComments = async (itemId) => {
  try {
    const allComments = await db.any(
      "SELECT * FROM comments WHERE item_id=$1",
      itemId
    );
    return allComments;
  } catch (error) {
    return error;
  }
};

//get one comment
const getOneComment = async (id) => {
  try {
    const oneComment = await db.one("SELECT * FROM comments WHERE id=$1", id);
    return oneComment;
  } catch (error) {
    return error;
  }
};

//create 1 comment
const createComment = async (comment) => {
  try {
    const newComment = await db.one(
      "INSERT INTO comments (commenter, comment, item_id) VALUES ($1, $2, $3) RETURNING *",
      [comment.commenter, comment.comment, comment.item_id]
    );
    return newComment;
  } catch (error) {
    return error;
  }
};

//delete 1 comment
const deleteComment = async (id) => {
  try {
    const deletedComment = await db.one(
      "DELETE FROM comments WHERE id=$1 RETURNING *",
      id
    );
    return deletedComment;
  } catch (error) {
    return error;
  }
};

//update one comment
const updateComment = async (id, comment) => {
  try {
    const updatedComment = await db.one(
      "UPDATE comments SET commenter=$1, comment=$2 WHERE id=$3 RETURNING *",
      [comment.commenter, comment.comment, id]
    );
    return updatedComment;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  deleteComment,
  updateComment,
};
