<template>
  <div class="default-container">
    <div class="title">
      <h2>First</h2>
    </div>
    <div class="main-container">
      {{ first }}
    </div>
    <div class="title">
      <h2>C-Language</h2>
    </div>
    <div class="main-container">
      {{ clanguage }}
    </div>
    <div class="subtitle">
      <h3>マインスイーパー</h3>
    </div>
    <div class="main-container">
      {{ minesweeper }}
    </div>
    <div class="main-container">
      <a href="https://github.com/nakaji25/minesweeper"
        >https://github.com/nakaji25/minesweeper</a
      >
    </div>
    <div class="subtitle">
      <h3>オセロ</h3>
    </div>
    <div class="title">
      <h2>Algorithm</h2>
    </div>
    <div class="main-container">
      {{ algorithm }}
    </div>
    <div class="main-container">
      <a href="https://github.com/nakaji25/Algorithm"
        >https://github.com/nakaji25/Algorithm</a
      >
    </div>
    <div class="title">
      <h2>Unity</h2>
    </div>
    <div class="main-container">
      {{ unity }}
    </div>
    <div class="subtitle">
      <h3>雲登りゲーム</h3>
    </div>
    <div class="main-container">
      <a href="https://github.com/nakaji25/ClimbCloud"
        >https://github.com/nakaji25/ClimbCloud</a
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      first: "このページでは授業や独自で制作した制作物を紹介します。",
      clanguage: "C言語を講義で学んだ際に作成したものなどです。",
      minesweeper: "マインスイーパーはコンソールで遊ぶものになっています。",
      algorithm:
        "講義で作成したアルゴリズムのコードで主にC言語を使用しています。",
      unity: "参考書を用いてUnityを学習した際の制作物などです。",
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
</style>
