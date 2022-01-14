<template>
  <!--ハンバーガーメニューのボタン-->
  <template v-if="isSmartphone">
    <div class="hamburger_btn" v-on:click="ActiveBtn = !ActiveBtn">
      <span
        class="line line_01"
        v-bind:class="{ btn_line01: ActiveBtn }"
      ></span>
      <span
        class="line line_02"
        v-bind:class="{ btn_line02: ActiveBtn }"
      ></span>
      <span
        class="line line_03"
        v-bind:class="{ btn_line03: ActiveBtn }"
      ></span>
    </div>
    <transition name="sidebar">
      <div class="sidebar-container" v-show="ActiveBtn">
        <navlist></navlist>
      </div>
    </transition>
  </template>
  <div v-else>
    <div class="sidebar-container">
      <navlist></navlist>
    </div>
  </div>
</template>

<script>
/* 回答を書く */
import navlist from "./Navlist.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      ActiveBtn: false,
      isSmartphone: true,
    };
  },
  methods: {
    handleResize() {
      if (window.matchMedia("(min-width: 720px)").matches) {
        this.isSmartphone = false;
      } else {
        this.isSmartphone = true;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: {
    navlist,
  },
});
</script>

<style>
.hamburger_btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #fff;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}
.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}
.sidebar-container {
  z-index: 20;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  min-height: 100vh;
  padding: 4rem 1rem;
  border-right: solid 1px #2c3e50;
  background: #000;
}
@media screen and (max-width: 720px) {
  .sidebar-container {
    z-index: 20;
    right: 0;
    border-left: solid 1px #2c3e50;
  }
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.4s;
}
.sidebar-enter,
.sidebar-leave-to {
  opacity: 0;
}
.sidebar-leave,
.sidebar-enter-to {
  opacity: 1;
}
</style>
