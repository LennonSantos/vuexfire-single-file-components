import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import lodash from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  // VuexFire will check the type of the property to bind as an array or as
  // an object
  strict: true,
  state: {
    todos: [],
    user: [],
    logged: false,
  },
  mutations: lodash.merge(firebaseMutations, {
    update_logged (state, value) {
      state.logged = value;
    },
    update_user (state, obj) {
        state.user = obj;
    },
  }),
  getters: {
    todos: state    => state.todos,
    isLogged: state => state.logged,
    getUser: state  => state.user,
  },
  actions: {
    setTodosRef: firebaseAction(({
      bindFirebaseRef
    }, ref) => {
      bindFirebaseRef('todos', ref)
    }),
  },

})
