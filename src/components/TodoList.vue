<template>
  <div>
    <ul>
      <li v-for="todo in todos">
        <input :value="todo.text" @input="updateTodoText(todo, $event.target.value)">
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {db} from './../config/firebase';
import lodash from 'lodash';

export default {
  // computed: mapGetters(['todos']),
  methods: {
    // Database manipulation are done directly here for the sake of simplicity, but it makes more sense to use actions instead
    removeTodo: function(todo) {
      this.todosRef.child(todo['.key']).remove()
    },
    updateTodoText: function (todo, newText) {
      this.todosRef.child(todo['.key']).child('text').set(newText)
    },
  },
  created() {
    this.$store.dispatch('setTodosRef', this.todosRef)
  },
  computed: lodash.merge( mapGetters(['todos']), {
    uid () {
      return this.$store.getters.getUser.uid
    },
    todosRef () {
      return db.ref(`users/${this.uid}/todos`);
    }
  })
}
</script>

<style>
</style>
