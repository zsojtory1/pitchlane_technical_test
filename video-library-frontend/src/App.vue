<template>
  <div id="app">
    <nav class="top-nav">
      <router-link to="/">Upload Video</router-link>
      <span class="nav-spacer"></span>
      <router-link to="/video-list">Video List</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.top-nav {
  background-color: #3498db; 
  padding: 10px;
}

router-link {
  color: #fff; 
  text-decoration: none;
  font-weight: bold;
}

.nav-spacer {
  margin: 0 20px;
}

router-link.active {
  color: #42b983;
}
</style>
