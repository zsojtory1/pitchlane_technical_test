<template>
  <div>
    <h2>Upload Video</h2>
    <form @submit.prevent="uploadVideo">
      <label for="fileInput" class="file-input-label">Choose File</label>
      <input type="file" ref="fileInput" id="fileInput" accept="video/*" style="display: none" @change="handleFileChange" />
      <span>{{ selectedFileName }}</span>
      <button type="submit" :disabled="!selectedFile">Upload</button>
    </form>
    <div v-if="uploadSuccess" class="success-message">
      Video uploaded successfully!
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
  setup() {
    const selectedFile = ref(null);
    const selectedFileName = ref('');
    const uploadSuccess = ref(false);

    const handleFileChange = () => {
      const fileInput = document.getElementById('fileInput');
      selectedFile.value = fileInput.files[0];
      selectedFileName.value = selectedFile.value ? selectedFile.value.name : '';
    };

    const uploadVideo = () => {
      if (!selectedFile.value) {
        return;
      }

      // Create a FormData object to send the file to the server
      const formData = new FormData();
      formData.append('video', selectedFile.value);

      // Make a POST request to the server
      axios
        .post('http://localhost:3000/upload', formData) // Replace with your server's URL
        .then((response) => {
          const newVideo = { name: selectedFileName.value, shareableLink: response.data.link };
          // You can also save the video to Vuex or update the UI as needed
          uploadSuccess.value = true;
          console.log('Video uploaded successfully');
          selectedFile.value = null;
          selectedFileName.value = '';
        })
        .catch((error) => {
          console.error('Error uploading video:', error);
        });
    };

    return {
      selectedFile,
      selectedFileName,
      uploadSuccess,
      handleFileChange,
      uploadVideo,
    };
  },
};
</script>

<style scoped>
.success-message {
  color: green;
  margin-top: 10px;
}
.file-input-label {
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  display: inline-block;
}
</style>
