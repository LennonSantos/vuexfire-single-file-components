<template lang="html">
  <div>
    <input v-model.trim="newTodoText" @keyup.enter="addTodo" placeholder="Add new todo">
  </div>
</template>

<script>
import {db} from './../config/firebase.js';

var todosRef = db.ref('todos')

export default {
  name: 'TodoInput',
  data () {
    return {
      newTodoText: '',
    }
  },
  methods: {
    // Database manipulation are done directly here for the sake of simplicity, but it makes more sense to use actions instead
    addTodo: function() {
      if (this.newTodoText.trim()) {
        todosRef.push({
          text: this.newTodoText,
        })
        this.newTodoText = ''
      }
    },
  },
}
</script>

<style lang="css">
</style>
