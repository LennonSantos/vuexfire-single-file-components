import Vue from 'vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import Vuex from 'vuex'
import store from './store'

new Vue({
  el: '#app',
  store: store,
  components: {TodoList, TodoInput}
})
