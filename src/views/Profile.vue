<template>
  <div>
    <header class="header-container">
      <h1>Profile</h1>
    </header>
    <body class="default-container">
      <div class="name">
        <h1>Nakaji</h1>
      </div>
      <div class="title">
        <h2>Introduction</h2>
      </div>
      <div class="main-container">
        <p class="main-txt">{{ introduction }}</p>
      </div>
      <div class="title">
        <h2>Career</h2>
      </div>
      <div class="main-container">
        <p class="main-txt">{{ career }}</p>
      </div>
    </body>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "Profile",
      introduction:
        "東京理科大学工学部情報工学科3年。\n 大学では人工知能やe-learningの勉強をしており、独学ではUnityでのゲーム作成をおこなっている。\n また、幼少期からボーイスカウトに所属現在の続けている。",
      career:
        "2013年7月 \n 16回日本スカウトジャンボリーに参加 \n 2015年7月 \n 23回世界スカウトジャンボリー参加 \n 2019年4月 \n 東京理科大学入学",
    };
  },
});
</script>

<style>
.name {
  padding: 20px;
}
.title {
  padding: 20px;
}
.main-container {
  display: inline-block;
  margin-left: 50px;
  margin-right: 50px;
  padding: 5px;
  white-space: pre-line;
}
.main-txt {
  text-align: left;
}
</style>
