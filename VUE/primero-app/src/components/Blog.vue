<template>
  <div class="general">
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
            <Articles :articles = "articles"></Articles>

          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import axios from "axios";
import {Global} from '../Global'
import Articles from './Articles'

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getArticles();

  },
  data() {
    return {
      articles: [],
      Global = Global.url
    };
  },
  methods: {
    getArticles() {
      axios.get("http://localhost:3900/api/articles").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    }
  }
};
</script>