<template>
  <div>
    <h2>Tell us about yourself</h2>
    <p>Form Area</p>
    <h4>Your premium is: {amount}HKD </h4>
    <button @click="backHome()">Back</button>
    <button @click="ProcessData()">Next</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {}
  },
  methods: {
    ProcessData () {
      this.$router.push('page-3')
    },
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>
