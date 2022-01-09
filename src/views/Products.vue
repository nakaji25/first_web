<template>
  <div class="default-container">
    <div class="title">
      <h1>First</h1>
    </div>
    <div class="main-container">
      {{ first }}
    </div>
    <div class="title">
      <h1>Algorithm</h1>
    </div>
    <div class="title">
      <h1>Unity</h1>
    </div>
    <div class="subtitle">
      <h3>雲登りゲーム</h3>
    </div>
    <div class="title">
      <h1>C-Language</h1>
    </div>
    <div class="subtitle">
      <h3>マインスイーパー</h3>
    </div>
    <div class="subtitle">
      <h3>オセロ</h3>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      first: "このページでは授業や独自で制作した作品を紹介する。",
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
