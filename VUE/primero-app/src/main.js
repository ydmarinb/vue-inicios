import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles'
import HelloWorld from './components/HelloWorld'
import Micomponente from './components/MiComponente'
import Blog from './components/Blog'
import Formulario from './components/Formulario'
import Pagina from './components/Pagina'
import ErrorComponent from './components/ErrorComponent'
import Peliculas from './components/Peliculas'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/pagina/:id?',name: 'pagina', component: Pagina},
  {path: '/mi-componente', component: Micomponente},
  {path: '/hola', component: HelloWorld},
  {path: '/', component: LastArticles},
  {path: '/peliculas',name: 'peliculas', component: Peliculas},
  {path: '*', component: ErrorComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
