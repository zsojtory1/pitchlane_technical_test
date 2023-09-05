<template>
    <div>
      <h2>Upload Video</h2>
      <input type="file" @change="handleFileUpload" accept="video/*" />
      <button @click="uploadVideo">Upload</button>
      <div v-if="uploadSuccess" class="success-message">
        Video uploaded successfully!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoFile: null,
        uploadSuccess: false,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.videoFile = event.target.files[0];
      },
      uploadVideo() {
        // Simulate video upload process (replace with actual API call)
        setTimeout(() => {
          this.uploadSuccess = true;
          // Reset the form after a successful upload
          this.videoFile = null;
          setTimeout(() => {
            this.uploadSuccess = false;
          }, 3000);
        }, 2000);
      },
    },
  };
  </script>
  
  <style scoped>
  .success-message {
    color: green;
    margin-top: 10px;
  }
  </style>
  