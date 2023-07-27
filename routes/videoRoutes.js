const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/api/videos', videoController.createVideo);
router.get('/api/videos', videoController.getAllVideos);
router.get('/api/videos/:videoId', videoController.getVideoById);
router.put('/api/videos/:videoId', videoController.updateVideo);
router.delete('/api/videos/:videoId', videoController.deleteVideo);

module.exports = router;