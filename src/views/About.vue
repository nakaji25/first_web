<template>
  <div class="default-container">
    <div class="title">
      <h2>First</h2>
    </div>
    <div class="main-container">
      {{ first }}
    </div>
    <div class="title">
      <h2>University</h2>
    </div>
    <div class="subtitle">
      <h3>Course</h3>
    </div>
    <div class="large-text">
      {{ course }}
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
    <div class="subtitle">
      <h3>Club</h3>
    </div>
    <div class="large-text">
      {{ club }}
    </div>
    <div class="subtitle">
      <h3>Activities</h3>
    </div>
    <div class="main-container">
      <ul class="main-text" v-for="(value, key) in animeclubs" :key="key">
        <li class="time">{{ value.time }}</li>
        <li class="text">{{ value.text }}</li>
      </ul>
    </div>
    <div class="title">
      <h2>Boy Scouts</h2>
    </div>
    <div class="subtitle">
      <h3>Group</h3>
    </div>
    <div class="large-text">
      {{ group }}
    </div>
    <div class="subtitle">
      <h3>Details</h3>
    </div>
    <div class="main-container">
      {{ details }}
    </div>
    <div class="main-container">
      詳しくはこちらのページへ
      <ul class="url-list">
        <li>
          <a target="_blank" href="https://www.scout.or.jp/"
            >ボーイスカウト日本連盟</a
          >
        </li>
        <li>
          <a target="_blank" href="http://www.scout-yokohama.org"
            >日本ボーイスカウト神奈川連盟</a
          >
        </li>
        <li>
          <a target="_blank" href="https://bsyokohama-dai8dan.jimdo.com/"
            >日本ボーイスカウト神奈川連盟横浜地区・横浜第8団</a
          >
        </li>
      </ul>
    </div>
    <div class="subtitle">
      <h3>Activities</h3>
    </div>
    <div class="main-container">
      <ul class="main-text" v-for="(value, key) in boyscouts" :key="key">
        <li class="time">{{ value.time }}</li>
        <li class="text">{{ value.text }}</li>
      </ul>
    </div>
    <div class="subtitle">
      <h3>Pictures</h3>
    </div>
    <div class="main-container">23wsjの時の写真をいくつか紹介します。</div>
    <div class="main-container carousel-container">
      <carousel>
        <slide v-for="value in wsj" :key="value.id">
          <img class="picture" :src="value.url" />
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default defineComponent({
  data() {
    return {
      first:
        "このページは自分がこれまでに学んできたことや課外活動について記載します。",
      course: "東京理科大学 工学部 情報工学科",
      university: [
        {
          grade: "1年生",
          text: "基礎的な線形代数や離散数学、物理学HTML/CSS、C言語を学習。",
        },
        { grade: "2年生", text: "線形代数の応用、統計学、アルゴリズム。" },
        {
          grade: "3年生",
          text: "Pythonでの画像変換、データマイニング、人工知能。R言語でのテキストマイニングなど。",
        },
      ],
      club: "アニメ・声優研究会",
      animeclubs: [
        {
          time: "2019年11月23日・24日",
          text: "学園祭で声優のトークショーを開催 \n （23日:速水奨・野津山幸宏,24日:伊瀬茉莉也・平田裕香）",
        },
      ],
      group: "日本ボーイスカウト神奈川連盟横浜地区・横浜第8団",
      details:
        "ボーイスカウトとはイギリス発祥の青少年教育活動であり、おもな活動はキャンプ、ハイキングなどの野外活動や募金、清掃奉仕などの奉仕活動である。",
      boyscouts: [
        {
          time: "2006年9月",
          text: "横浜第8団 ビーバー隊に入隊",
        },
        { time: "2008年9月", text: "カブ隊に上進" },
        { time: "2011年9月", text: "ボーイ隊に上進" },
        {
          time: "2013年4月",
          text: "岩手県大船渡市に東日本大震災の義援金を届ける",
        },
        { time: "2013年7月", text: "第16回日本スカウトジャンボリーに参加" },
        { time: "2013年10月", text: "第40回GBTに参加" },
        { time: "2016年3月", text: "ボーイスカウト活動において菊章を取得" },
        { time: "2016年4月", text: "ベンチャー隊に上進" },
        { time: "2015年7月", text: "第23回世界スカウトジャンボリー参加" },
        { time: "2016年8月", text: "第5回横浜地区キャンポリー参加" },
        { time: "2019年4月", text: "ローバー隊に上進" },
      ],
      wsj: [
        { id: 1, url: require("@/assets/23wsj/gate.png") },
        { id: 2, url: require("@/assets/23wsj/tents.png") },
        { id: 3, url: require("@/assets/23wsj/sitegate.png") },
        { id: 4, url: require("@/assets/23wsj/standbyline.png") },
        { id: 5, url: require("@/assets/23wsj/hat.png") },
        { id: 6, url: require("@/assets/23wsj/goods.png") },
        { id: 7, url: require("@/assets/23wsj/monument.png") },
        { id: 8, url: require("@/assets/23wsj/participants.png") },
        { id: 9, url: require("@/assets/23wsj/closing.png") },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style>
.title {
  padding: 30px 15px 10px 15px;
}
.subtitle {
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 25px;
}
.main-container {
  margin-left: 50px;
  margin-right: 50px;
  padding-bottom: 20px;
  padding-left: 5px;
  white-space: pre-line;
}
.main-container a {
  color: #fff;
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
.large-text {
  font-size: 18px;
  margin-left: 50px;
  margin-right: 50px;
  padding-left: 5px;
  white-space: pre-line;
}
.url-list {
  list-style: none;
  padding: 4px;
}
.url-list li {
  padding: 4px;
}
.carousel-container {
  max-width: 720px;
}
.carousel__slide {
  padding: 10px;
  max-height: 360px;
  width: 100%;
  background-color: #fff;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.picture {
  padding: 10px;
  max-width: 720px;
  max-height: 360px;
}
@media screen and (max-width: 820px) {
  .carousel-container {
    max-width: 360px;
  }
  .picture {
    padding: 10px;
    max-width: 360px;
    max-height: 180px;
  }
}
</style>
