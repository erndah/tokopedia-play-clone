const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  commentText: { type: String, required: true },
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
});

module.exports = mongoose.model('Comment', commentSchema);