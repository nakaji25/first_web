<template>
  <div class="default-container">
    <div class="title">
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
      <ul class="main-text" v-for="(career, key) in careers" :key="key">
        <li class="time">{{ career.time }}</li>
        <li class="text">{{ career.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "Profile",
      introduction:
        "東京理科大学工学部情報工学科3年。\n 大学の授業では、人工知能やe-learningの勉強をしており、独学ではUnityでのゲーム作成をおこなっている。\n サークルではアニメ・声優研究会に所属している。\n また、幼少期からボーイスカウトに所属し現在まで続けている。",
      careers: [
        { time: "2013年7月", text: "16回日本スカウトジャンボリーに参加" },
        { time: "2015年7月", text: "23回世界スカウトジャンボリー参加" },
        { time: "2016年4月", text: "私立横浜翠陵高等学校入学" },
        { time: "2019年4月", text: "東京理科大学入学" },
        { time: "2019年5月", text: "サークルアニメ・声優研究会に所属" },
        { time: "2019年10月", text: "学園祭にてサークルで声優のイベント開催" },
      ],
    };
  },
});
</script>

<style>
.title {
  padding: 20px;
}
.main-container {
  margin-left: 50px;
  margin-right: 50px;
  padding: 5px;
  white-space: pre-line;
}
.main-text {
  list-style: none;
}
.time {
  font-weight: bold;
  color: red;
}
.text {
  padding: 12px;
}
</style>
