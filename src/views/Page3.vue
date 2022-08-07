<template>
  <div v-if="wizardData">
    <h2>Summary</h2>
    <h4>{{wizardData.name}}</h4>
    <p>Name: {{wizardData.name}}</p>
    <p>Age: {{wizardData.age}}</p>
    <p>Where do you live: {{wizardData.selectedCountryName}}</p>
    <p>Package: {{wizardData.selectedPackageName}}</p>
    <p>Premium: {{wizardData.packageTotal}}{{wizardData.selectedCurrency}}</p>
    <button @click="goBack()">Back</button>
    <button @click="buy()">Buy</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Page3',
  computed: {
    ...mapGetters(['wizardData'])
  },
  mounted () {
    if (!this.wizardData) {
      this.$router.push('/')
    }
  },
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
