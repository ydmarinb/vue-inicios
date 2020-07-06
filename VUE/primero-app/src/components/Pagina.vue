<template>
  <div class="general">
    <Slider texto="Página de pruebas"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{id_desde_url}}</h3>
        <button @click="redirigirBlog()">Redirigir</button>
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
  name: "Pagina",
  components:{
     Slider,
    Sidebar
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null
    };
  },
  methods: {
    redirigirBlog() {
      this.$router.push("/blog");
    }
  }
};
</script>