<template>
  <div id="app">
    <div class="app-container">
      <sidebar></sidebar>
      <header class="header-container">
        <h1>{{ this.$route.name }}</h1>
      </header>
      <div class="page-container">
        <transition name="fade">
          <router-view />
        </transition>
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
  padding-top: 54px;
  background: #000000;
  text-align: left;
}

.header-container {
  position: fixed;
  top: 0;
  height: 54px;
  min-width: 100vw;
  margin-top: 0px;
  padding: 6px;
  background-color: #000000;
  border-bottom: solid 1px #2c3e50;
  text-align: center;
}

@media screen and (min-width: 720px) {
  .header-container {
    margin-left: 200px;
    min-width: calc(100vw - 200px);
  }
  .page-container {
    padding-left: 200px;
  }
}

* {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #000;
  box-sizing: border-box;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #fff;
}

.fade-enter-active {
  transition: opacity 1s;
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 3s;
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
