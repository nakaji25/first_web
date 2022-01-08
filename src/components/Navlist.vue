<template>
  <div class="nav-list-wrapper">
    <ul class="nav-list">
      <li class="nav-list-item">
        <router-link to="/">Profile</router-link>
      </li>
      <li class="nav-list-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav-list-item">
        <router-link to="/products">Products</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.nav-list-wrapper {
  padding: 10px;
}
.nav-list-item {
  list-style: none;
  padding: 4px 0;
}
.nav-list-item a {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding: 12px 0;
  border-radius: 32px;
}
.nav-list-item a:hover {
  background: #da0;
  opacity: 0.8;
  color: #fff;
}
</style>
