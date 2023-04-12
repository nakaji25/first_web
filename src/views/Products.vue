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
    <img
      class="minesweeper"
      src="@/assets/minesweeper.png"
      alt="minesweeperのプレイ画面"
    />
    <div class="main-container">
      <a target="_blank" href="https://github.com/nakaji25/minesweeper"
        >https://github.com/nakaji25/minesweeper</a
      >
    </div>
    <div class="title">
      <h2>Algorithm</h2>
    </div>
    <div class="main-container">
      {{ algorithm }}
    </div>
    <div class="main-container">
      <a target="_blank" href="https://github.com/nakaji25/Algorithm"
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
      <h3>ボールパズルゲーム</h3>
    </div>
    <div class="main-container">
      {{ theball }}
    </div>
    <img class="game" src="@/assets/theball.png" alt="TheBallのプレイ画面" />
    <div class="main-container">
      <a target="_blank" href="https://github.com/nakaji25/Unity_TheBall"
        >https://github.com/nakaji25/Unity_TheBall</a
      >
    </div>
    <div class="subtitle">
      <h3>雲登りゲーム</h3>
    </div>
    <div class="main-container">
      {{ climbcloud }}
    </div>
    <img class="game" src="@/assets/climbcloud.png" alt="TheBallのプレイ画面" />
    <div class="main-container">
      <a target="_blank" href="https://github.com/nakaji25/ClimbCloud"
        >https://github.com/nakaji25/ClimbCloud</a
      >
    </div>
    <div class="subtitle">
      <h3>卒業研究</h3>
    </div>
    <div class="main-container">
      {{ G_Research }}
    </div>
    <img class = "researchsystem" src="@/assets/research_system.png" alt="VR教育システムのプレイ画面" />
    <div class="main-container">
      <a target="_blank" href="https://www.ieice.org/~iss/jpn/Publications/issposter_2023/data/pdf/ISS-P-042.pdf"
        >2023年電子情報通信学会総合大会 情報・システムソサイエティ特別企画 ジュニア＆学生ポスターセッション予稿集</a
      >
    </div>
    <div class="title">
      <h2>参考書</h2>
    </div>
    <div class="main-container">
      <ul class="references-text">
        <li>
          UnityではじめるC# 基礎編 改訂版 <br />
          <a target="_blank" href="https://books.mdn.co.jp/books/3220303029/"
            >https://books.mdn.co.jp/books/3220303029/</a
          >
        </li>
        <li>
          Unityの教科書 Unity 2021完全対応版 <br />
          <a target="_blank" href="https://www.sbcr.jp/product/4815611347/"
            >https://www.sbcr.jp/product/4815611347/</a
          >
        </li>
      </ul>
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
        "講義で作成したアルゴリズムのコードで主にC言語を使用しています。 \n さまざまなソートやグラフ探索などのアルゴリズムを実装しました。",
      unity: "参考書を用いてUnityを学習した際の制作物などです。",
      theball:
        "白いブロックをうごかしてボールを黄色のゴールに運べばクリアとなります。",
      climbcloud: "猫を操作して頂上の旗をめざすゲームです。",
      G_Research: "医薬品製造における培地交換操作をVR空間に再現し、違反行為を行った際に改善を求めるフィードバックがなされます。",
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

.references-text li {
  padding-bottom: 10px;
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
.game {
  width: 120px;
  height: 240px;
  margin-left: 80px;
}
.minesweeper {
  width: 280px;
  height: 160px;
  margin-left: 80px;
  border: solid 1px #2c3e50;
}
.researchsystem {
  width: 380px;
  margin-left: 80px;
}
@media screen and (max-width: 720px) {
  .minesweeper {
    margin-left: 40px;
  }
}
</style>
