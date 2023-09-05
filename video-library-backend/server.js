const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs'); // Require the 'fs' module
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

// Serve video files from a directory (e.g., 'videos')
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Handle video upload (POST)
app.post('/upload', upload.single('video'), (req, res) => {
  try {
    const video = req.file;
    // Generate a unique identifier for the video (e.g., a random string or filename)
    const uniqueIdentifier = generateUniqueIdentifier();
    // Rename the video file with the unique identifier
    const renamedFileName = `${uniqueIdentifier}_${video.originalname}`;
    // Create a shareable link
    const shareableLink = `http://localhost:3000/videos/${renamedFileName}`;
    // Store the video with its shareable link
    videos.push({ link: shareableLink, name: video.originalname });
    // Move the uploaded file to the 'videos' directory with the renamed filename
    fs.writeFileSync(path.join(__dirname, 'videos', renamedFileName), video.buffer);
    res.status(200).json({ message: 'Video uploaded successfully', link: shareableLink });
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

// Function to generate a unique identifier (simplified)
function generateUniqueIdentifier() {
  return Math.random().toString(36).substring(7);
}
