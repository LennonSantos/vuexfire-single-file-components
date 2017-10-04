import Vue from 'vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoLogin from './components/TodoLogin.vue'
import Store from './store'
import {auth} from './config/firebase'

new Vue({
  el: '#app',
  store: Store,
  components: {TodoList, TodoInput, TodoLogin},
  computed: {
    isLogged () {
      return this.$store.getters.isLogged
    },
    getUser () {
        return this.$store.getters.getUser
    }
  },
  created: function() {
    auth.onAuthStateChanged( user => {
      if (user) {
        this.$store.commit('update_user', user.providerData[0])
        this.$store.commit('update_logged', true)
      } else {
        this.$store.commit('update_user', [])
        this.$store.commit('update_logged', false)
      }
    });
  }
})
