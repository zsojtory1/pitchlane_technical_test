<template>
    <div>
      <h2>Video List</h2>
      <ul>
        <li v-for="(video, index) in videos" :key="index">
          <span>{{ video.name }}</span>
          <button @click="generateShareableLink(video)">Generate Link</button>
          <div v-if="video.shareableLink" class="shareable-link">
            Shareable Link: {{ video.shareableLink }}
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          { name: 'Video 1', shareableLink: '' },
          { name: 'Video 2', shareableLink: '' },
          // Add more videos as needed
        ],
      };
    },
    methods: {
      generateShareableLink(video) {
        // Simulate link generation (replace with actual logic)
        video.shareableLink = 'https://example.com/video/1';
      },
    },
  };
  </script>
  
  <style scoped>
  .shareable-link {
    color: blue;
    margin-top: 5px;
  }
  </style>
  