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

// Handle video upload
app.post('/upload', upload.single('video'), (req, res) => {
  try {
    const video = req.file;
    // Process the uploaded video, generate a shareable link, and save it if needed.
    // Return the shareable link or any relevant response.
    res.status(200).json({ message: 'Video uploaded successfully', link: 'https://example.com/share/link' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the video' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
