<template>
  <VideoUpload msg="Video Upload"/>
  <VideoList msg="Video List"/>
</template>

<script>
import VideoUpload from './components/VideoUpload.vue'
import VideoList from './components/VideoList.vue'

export default {
  name: 'App',
  components: {
    VideoUpload,
    VideoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
