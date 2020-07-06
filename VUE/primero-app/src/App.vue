<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="center">
      <router-view></router-view>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
//import LastArticles from "./components/LastArticles";
import FooterComponent from "./components/FooterComponet";

export default {
  name: "App",
  components: {
    HeaderComponent,
 //   LastArticles,
    FooterComponent
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
