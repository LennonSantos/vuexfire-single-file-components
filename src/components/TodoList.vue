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
import {db} from './../config/firebase.js';

var todosRef = db.ref('todos')

export default {
  computed: mapGetters(['todos']),
  methods: {
    // Database manipulation are done directly here for the sake of simplicity, but it makes more sense to use actions instead
    removeTodo: function(todo) {
      todosRef.child(todo['.key']).remove()
    },
    updateTodoText: function (todo, newText) {
      todosRef.child(todo['.key']).child('text').set(newText)
    },
  },

  created() {
    this.$store.dispatch('setTodosRef', todosRef)
  },
}
</script>

<style>
</style>
