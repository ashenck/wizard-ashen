<template>
  <div class="main-container">
    <div class="card text-center">
      <img src="https://img.freepik.com/premium-vector/family-standing-insurance-umbrella-together-shield-protection-parents-children-flat-vector-illustration-health-life-insurance-concept-banner-website-design-landing-web-page_179970-6637.jpg?w=2000" height="250px" />
      <h1>Hello There!</h1>
      <p>Lets buy some insurance. It is going to take only a few steps</p>
      <button class="button button-blue" @click="startWizard()">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    startWizard () {
      this.$router.push('page-2')
    }
  }
}
</script>
