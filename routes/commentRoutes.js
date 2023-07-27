const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/api/comments', commentController.createComment);
router.get('/api/comments/:videoId', commentController.getAllCommentsForVideo);
router.delete('/api/comments/:commentId', commentController.deleteComment);

module.exports = router;