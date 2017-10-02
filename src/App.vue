<template>
  <div id="app">
    <input v-model.trim="newTodoText" @keyup.enter="addTodo" placeholder="Add new todo">
    <ul>
      <li v-for="todo in todos">
        <input :value="todo.text" @input="updateTodoText(todo, $event.target.value)">
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'

var db = firebase.initializeApp({
  databaseURL: 'https://vuefiredemo.firebaseio.com'
}).database()

var todosRef = db.ref('todos')

export default {
  data () {
    return {
      newTodoText: '',
    }
  },
  computed: mapGetters(['todos']),
  methods: {
    // Database manipulation are done directly here for the sake of simplicity, but it makes more sense to use actions instead
    removeTodo: function(todo) {
      todosRef.child(todo['.key']).remove()
    },
    addTodo: function() {
      if (this.newTodoText.trim()) {
        todosRef.push({
          text: this.newTodoText,
        })
        this.newTodoText = ''
      }
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
