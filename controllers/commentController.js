const Comment = require('../models/commentModel');

// Controller to create a new comment for a video
const createComment = async (req, res) => {
  const { name, commentText, videoId } = req.body;

  try {
    // Check if the user exists in the database
    const userExists = await User.exists({ name });
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newComment = new Comment({
      name,
      commentText,
      videoId,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to get all comments for a video
const getAllCommentsForVideo = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }, 'name commentText');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to delete a comment
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    await comment.remove();
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createComment,
  getAllCommentsForVideo,
  deleteComment,
};