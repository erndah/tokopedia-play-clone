const Video = require('../models/videoModel');

// Controller to create a new video
const createVideo = async (req, res) => {
  const { videoId, title, description, thumbnailUrl } = req.body;

  try {
    const newVideo = new Video({ videoId, title, description, thumbnailUrl });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to get all videos with thumbnails
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({}, 'videoId title description thumbnailUrl');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get video details by ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to update video details
const updateVideo = async (req, res) => {
  const { videoId, title, description, thumbnailUrl } = req.body;

  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    video.videoId = videoId;
    video.title = title;
    video.description = description;
    video.thumbnailUrl = thumbnailUrl;

    await video.save();
    res.json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete a video
const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    await video.remove();
    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
};