import Vue from 'vue/dist/vue.esm'
import Login from '../components/login.vue'

document.addEventListener('DOMContentLoaded', () => {
  const login = new Vue({
    el: '#vue',
    components: { Login }
  })
})
