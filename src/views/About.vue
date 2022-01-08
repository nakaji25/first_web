<template>
  <div class="default-container">
    <div class="title">
      <h2>University</h2>
    </div>
    <div class="subtitle">
      <h3>Course</h3>
    </div>
    <div class="main-container">
      <h3>{{ course }}</h3>
    </div>
    <div class="subtitle">
      <h3>Lessons</h3>
    </div>
    <div class="main-container">
      <ul class="main-text" v-for="(value, key) in university" :key="key">
        <li class="time">{{ value.grade }}</li>
        <li class="text">{{ value.text }}</li>
      </ul>
    </div>
    <div class="title">
      <h2>Boy Scouts</h2>
    </div>
    <div class="main-container">
      <h3>神奈川連盟横浜第8団</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      course: "東京理科大学 工学部 情報工学科",
      university: [
        {
          grade: "1年生",
          text: "基礎的な線形代数や物理学、統計学、HTML/cssを学習。",
        },
        { grade: "2年生", text: "線形代数の応用、アルゴリズム、C言語を学習。" },
        {
          grade: "3年生",
          text: "Pythonでの画像変換、データマイニング、人工知能。R言語ではテキストマイニングなど。",
        },
      ],
    };
  },
});
</script>

<style>
.title {
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
.subtitle {
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 25px;
}
.main-container {
  margin-left: 50px;
  margin-right: 50px;
  padding-left: 5px;
  white-space: pre-line;
}
.main-text {
  list-style: none;
}
.time {
  font-weight: bold;
  color: #da0;
}
.text {
  padding: 10px;
}
</style>
