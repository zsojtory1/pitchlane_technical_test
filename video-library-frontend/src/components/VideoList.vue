<template>
  <div>
    <h2>Video List</h2>
    <!-- Display the list of videos here -->
    <ul class="video-list">
      <li v-for="(video, index) in videos" :key="index" class="video-item">
        <div class="video-details">
          <span class="video-name">{{ video.name }}</span>
          <button @click="generateShareableLink(video)" class="generate-link-button">Generate Link</button>
        </div>
        <div v-if="video.shareableLink" class="shareable-link">
          Shareable Link: {{ video.shareableLink }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
  setup() {
    const videos = ref([]);

    const generateShareableLink = (video) => {
      // Simulate generating a shareable link for the video
      video.shareableLink = video.link;
    };

    const fetchVideos = () => {
      axios
        .get('http://localhost:3000/videos') // Replace with your server's URL
        .then((response) => {
          if (response.status === 200) {
            videos.value = response.data; // Update the videos array with data from the server
          } else {
            console.error('Unexpected status code:', response.status);
          }
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
        });
    };

    // Fetch videos when the component is mounted
    onMounted(() => {
      fetchVideos();
    });

    return {
      videos,
      generateShareableLink,
    };
  },
};
</script>

<style scoped>
.video-list {
  list-style-type: none;
  padding: 0;
}

.video-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

.video-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.video-name {
  font-weight: bold;
}

.generate-link-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}

.shareable-link {
  font-style: italic;
  color: #555;
}
</style>
