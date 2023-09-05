<template>
  <div id="app">
    <nav>
      <router-link to="/">Upload Video</router-link>
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

nav {
  background-color: #333;
  padding: 10px;
}

router-link {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

router-link.active {
  color: #42b983;
}
</style>
