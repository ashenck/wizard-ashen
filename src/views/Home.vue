<template>
  <div>
    <h2>Hello There!</h2>
    <p>Lets buy some insurance. It is going to take only a few steps</p>
    <button @click="startWizard()">Start</button>
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
