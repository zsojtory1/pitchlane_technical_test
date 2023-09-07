<template>
  <div>
    <h2>Upload Video</h2>
    <form @submit.prevent="uploadVideo">
      <label for="fileInput" class="file-input-label">Choose File</label>
      <input type="file" ref="fileInput" id="fileInput" accept="video/*" style="display: none" @change="handleFileChange" />
      <span>{{ selectedFileName }}</span>
      <div style="margin-top: 10px;"> 
        <button type="submit" :disabled="!selectedFile">Upload</button>
      </div>
    </form>
    <div v-if="uploadSuccess" class="success-message">
      Video uploaded successfully!
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

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
  .post('https://pitchlane.onrender.com/upload', formData)
  .then((response) => {
    if (response.status === 200) {
      // The video was successfully uploaded
      uploadSuccess.value = true;
      console.log('Video uploaded successfully');
      selectedFile.value = null;
      selectedFileName.value = '';
    } else {
      // Handle other status codes here if needed
      console.error('Unexpected status code:', response.status);
    }
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
