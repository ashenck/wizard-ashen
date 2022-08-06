<template>
  <div>
    <h2>Summary</h2>
    <h4>${name}</h4>
    <p>Name: John</p>
    <p>Age: 50</p>
    <p>Where do you live: Hong Kong</p>
    <p>Package: Standard</p>
    <p>Premium: ${amount}HKD</p>
    <button @click="goBack()">Back</button>
    <button @click="buy()">Buy</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goBack () {
      this.$router.push('page-2')
    },
    buy () {
      this.$router.push('/')
    }
  }
}
</script>
