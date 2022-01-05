<template>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link>
  </div>
  -->
  <div id="app">
    <div class="app-container">
      <sidebar></sidebar>
      <div class="page-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./components/Sidebar.vue";

export default {
  components: {
    sidebar,
  },
};
</script>

<style>
.app-container {
  min-width: 100vw;
  min-height: 100vh;
}
.page-container {
  background: #ddd;
}

.page-container h1 {
  padding-top: 50px;
}
@media screen and (min-width: 720px) {
  .page-container h1 {
    padding-left: 240px;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ddd;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
