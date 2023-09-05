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
import { useStore } from 'vuex'; // Import useStore function

export default {
  setup() {
    const selectedFile = ref(null);
    const selectedFileName = ref('');
    const uploadSuccess = ref(false);

    const store = useStore(); // Access the Vuex store

    const handleFileChange = () => {
      const fileInput = document.getElementById('fileInput');
      selectedFile.value = fileInput.files[0];
      selectedFileName.value = selectedFile.value ? selectedFile.value.name : '';
    };

    const uploadVideo = () => {
      if (!selectedFile.value) {
        return;
      }

      // Simulate a successful upload (in a real backend, this would be a POST request to upload the file)
      setTimeout(() => {
        const newVideo = { name: selectedFileName.value };
        store.commit('addVideo', newVideo); // Use Vuex mutation to add the new video
        
        uploadSuccess.value = true;
        console.log('Video uploaded successfully');

        // Clear the selected file and file name
        selectedFile.value = null;
        selectedFileName.value = '';
      }, 1000); // Simulated delay for demonstration
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
