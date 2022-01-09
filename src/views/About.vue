<template>
  <div class="default-container">
    <div class="title">
      <h1>First</h1>
    </div>
    <div class="main-container">
      {{ first }}
    </div>
    <div class="title">
      <h1>University</h1>
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
    <div class="title">
      <h1>Boy Scouts</h1>
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
    <div class="subtitle">
      <h3>Activities</h3>
    </div>
    <div class="main-container">
      <ul class="main-text" v-for="(activity, key) in activities" :key="key">
        <li class="time">{{ activity.time }}</li>
        <li class="text">{{ activity.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      first:
        "このページは自分がこれまでに学んできたことや課外活動について記載する。",
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
      group: "ボーイスカウト 神奈川連盟 横浜第8団",
      details:
        "ボーイスカウトとはイギリス発祥の青少年教育活動であり、おもな活動はキャンプ、ハイキングなどの野外活動や募金、清掃奉仕などの奉仕活動である。",
      activities: [
        // {
        //   time: "2005年9月",
        //   text: "ボーイスカウト 神奈川連盟 横浜第8団 ビーバー隊に入隊",
        // },
        // { time: "2007年9月", text: "カブ隊に上進" },
        // { time: "2010年9月", text: "ボーイ隊に上進" },
        {
          time: "2013年4月",
          text: "岩手県大船渡市に東日本大震災の義援金を届ける",
        },
        { time: "2013年7月", text: "第16回日本スカウトジャンボリーに参加" },
        // { time: "2014年9月", text: "ベンチャー隊に上進" },
        { time: "2015年7月", text: "第23回世界スカウトジャンボリー参加" },
        { time: "2016年8月", text: "第5回横浜地区キャンポリー参加" },
      ],
    };
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
.large-text {
  font-size: 18px;
  margin-left: 50px;
  margin-right: 50px;
  padding-left: 5px;
  white-space: pre-line;
}
</style>
