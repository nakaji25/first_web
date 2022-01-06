<template>
  <div id="app">
    <div class="app-container">
      <sidebar></sidebar>
      <div class="page-container">
        <header class="header-container">
          <h1>{{ this.$route.name }}</h1>
        </header>
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
  text-align: left;
}

.header-container {
  height: 54px;
  margin-top: 0px;
  padding: 6px;
  background-color: rgba(197, 197, 197, 1);
  border-bottom: solid 1px #2c3e50;
  text-align: center;
}

@media screen and (min-width: 720px) {
  .page-container {
    padding-left: 200px;
  }
}

* {
  box-sizing: inherit;
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
  box-sizing: border-box;
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
