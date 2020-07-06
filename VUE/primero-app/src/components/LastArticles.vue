<template>
  <div class="general">
    <Slider 
    texto = "Bienvenido al curso de Vue.js"
    home = "true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">

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

export default {
  name: "LastArticles",
  components:{
     Slider,
    Sidebar
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
      axios.get(this.url +"articles/true").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    }
  }
};
</script>