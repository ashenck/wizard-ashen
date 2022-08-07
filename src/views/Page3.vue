<template>
  <div class="main-container">
    <div class="card text-center" v-if="wizardData">
      <h2>Summary</h2>
      <h4>{{ wizardData.name }}</h4>
      <p>Name: <span class="text-bold">{{ wizardData.name }}</span></p>
      <p>Age: <span class="text-bold">{{ wizardData.age }}</span></p>
      <p>Where do you live: <span class="text-bold">{{ wizardData.selectedCountryName }}</span> </p>
      <p>Package: <span class="text-bold">{{ wizardData.selectedPackageName }}</span></p>
      <p class="premium-section">
        Premium: <span class="text-bold"> {{ wizardData.packageTotal }}{{ wizardData.selectedCurrency }} </span>
      </p>
      <div class="button-footer">
      <button class="button" @click="goBack()">Back</button>
      <button class="button button-blue" @click="buy()">Buy</button>
      </div>
    </div>
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
