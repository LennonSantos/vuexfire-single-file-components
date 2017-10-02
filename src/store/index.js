import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  // VuexFire will check the type of the property to bind as an array or as
  // an object
  strict: true,
  state: {
    todos: []
  },
  mutations: firebaseMutations,
  getters: {
    todos: state => state.todos,
  },
  actions: {
    setTodosRef: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('todos', ref)
    }),
  },
})
