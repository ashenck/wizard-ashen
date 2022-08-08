<template>
  <div class="main-container">
    <div class="card text-center">
      <h2>Ooops</h2>
      <p>
        Your age is over our accepted limit.<br />We are sorry but we cannot insure you now
      </p>
      <button class="button" @click="backHome()">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgeError',
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>
