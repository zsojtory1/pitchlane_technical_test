const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Sample array to store uploaded videos
const videos = [];

// Handle video upload (POST)
app.post('/upload', upload.single('video'), (req, res) => {
  try {
    const video = req.file;
    // Process the uploaded video, generate a shareable link, and save it if needed.
    // For example, you can save the video to the 'videos' array.
    videos.push({ name: video.originalname, link: 'https://example.com/share/link/' + video.originalname });
    res.status(200).json({ message: 'Video uploaded successfully', link: 'https://example.com/share/link/' + video.originalname });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the video' });
  }
});

// Get the list of uploaded videos (GET)
app.get('/videos', (req, res) => {
  // Return the list of uploaded videos
  res.status(200).json(videos);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
