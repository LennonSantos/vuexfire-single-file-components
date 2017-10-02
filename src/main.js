import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

new Vue({
  el: '#app',
  store: store,
  components: {App}
})
