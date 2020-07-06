<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" v-on:submit.prevent="mostrar()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.nombre.minLenght">Este debe tener mas caracteres</div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos" />
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.apellidos.minLenght">Este debe tener mas caracteres</div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.biografia"></textarea>
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div>
            <div v-if="submitted && !$v.user.nombre.biografia">Este debe tener mas caracteres</div>
          </div>

          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.genero" /> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import { required, minLenght } from "vuelidate/lib/validators";

export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  validations: {
    user: {
      nombre: {
        required,
        minLenght: minLenght(2)
      },
      apellidos: {
        required,
        minLenght: minLenght(2)
      },
      biografia: {
        required,
        minLenght: minLenght(10)
      }
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        biografia: "",
        genero: ""
      }
    };
  },
  methods: {
    mostrar() {
      console.log(this.user);
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      alert("validacion pasada");
    }
  }
};
</script>