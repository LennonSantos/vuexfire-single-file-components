<template>
  <div>
      <div class="row">
        <div class="col-md-12">
          <button @click="login" class="btn btn-primary pull-left" v-if="!isLogged">Login with Gmail</button>
          <button @click="logout" class="btn btn-danger pull-right" v-if="isLogged">Logout</button>
        </div>
      </div>
  </div>
</template>
<script>
import {provider} from './../config/firebase'
import {auth} from './../config/firebase'

export default {
  data () {
    return {
    }
  },
  methods: {
    login: function() {
      auth.signInWithPopup(provider).then(result => {
        this.$store.commit('update_user', result.user.providerData[0])
        this.$store.commit('update_logged', true)
      }).catch(error => {
        // this.$store.commit('update_error', error.message)
      })
    },
    logout: function() {
      auth.signOut().then(
      () => {
        this.$store.commit('update_user', [])
        this.$store.commit('update_logged', false)
      },
      error => {
        // this.$store.commit('update_error', error)
      })
    }
  },
  computed: {
    isLogged () {
      return this.$store.getters.isLogged
    }
  }
}
</script>
<style>
</style>
