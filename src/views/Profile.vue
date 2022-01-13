<template>
  <div class="default-container">
    <div class="title">
      <div class="myinfo">
        <img class="icon" src="@/assets/nakaji.svg" alt="nakajiアイコン" />
        <div class="name">Nakaji</div>
      </div>
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
    <div class="title">
      <h2>SNS</h2>
    </div>
    <div class="main-container">
      <ul class="main-text">
        <li>
          github <br />
          <a href="https://github.com/nakaji25">https://github.com/nakaji25</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      introduction:
        "東京理科大学工学部情報工学科3年。\n 大学の授業では、人工知能やe-learningの勉強をしており、独学ではUnityでのゲーム作成をおこなっている。\n サークルではアニメ・声優研究会に所属している。\n また、幼少期からボーイスカウトに所属し現在まで続けている。",
      careers: [
        { time: "2013年7月", text: "第16回日本スカウトジャンボリーに参加" },
        { time: "2015年7月", text: "第23回世界スカウトジャンボリー参加" },
        { time: "2016年4月", text: "私立横浜翠陵高等学校入学" },
        { time: "2016年8月", text: "第5回横浜地区キャンポリー参加" },
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
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
}
.main-container {
  margin-left: 50px;
  margin-right: 50px;
  padding: 5px;
  white-space: pre-line;
}
.main-text {
  list-style: none;
  margin-bottom: 20px;
}
.time {
  font-weight: bold;
  color: #da0;
}
.text {
  padding: 12px;
}
.icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 20px 20px 20px 50px;
}
.myinfo {
  display: flex;
  align-items: center;
}

.name {
  font-size: 2em;
  font-weight: bold;
  padding-left: 50px;
}
@media screen and (max-width: 720px) {
  .icon {
    margin: 20px;
  }
  .myinfo {
    justify-content: center;
  }
  .myinfo h1 {
    padding-left: 20px;
  }
}
</style>
