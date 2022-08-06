<template>
  <div>
    <h2>Tell us about yourself</h2>
    <div class="form-area">
      <InputBox title="Name" id="form_name" name="name" v-model="name" required />
      <InputBox title="Age" id="form_age" name="age" type="number" v-model="age" required />
      <DropDown title="Where do you live" id="form_country" name="country" :options="countryOptions" v-model="selectedCountry" />
      <RadioGroup id="form_package" name="package" :options="packageOptions" v-model="selectedPackage" />
    </div>
    <h4>Your premium is: {amount}HKD</h4>
    <button @click="backHome()">Back</button>
    <button :disabled="!validForm" @click="ProcessData()">Next</button>
  </div>
</template>

<script>
import InputBox from '@/components/form/InputBox.vue'
import DropDown from '@/components/form/DropDown.vue'
import RadioGroup from '@/components/form/RadioGroup.vue'

export default {
  name: 'Page2',
  components: {
    InputBox,
    DropDown,
    RadioGroup
  },
  data () {
    return {
      name: '',
      age: undefined,
      selectedCountry: 1,
      countryOptions: [
        { id: 1, value: 'Hong Kong', currency: 'HKD' },
        { id: 2, value: 'USA', currency: 'USD' },
        { id: 3, value: 'Australia', currency: 'AUD' }
      ],
      selectedPackage: 1,
      packageOptions: [
        { id: 1, value: 'standard', label: 'Standard' },
        { id: 2, value: 'safe', label: 'Safe (+250HKB, 50%)' },
        { id: 3, value: 'super_safe', label: 'Super Safe (+375HKB, 75%)' }
      ]
    }
  },
  computed: {
    validForm () {
      if (this.name && this.age) {
        return true
      }
      return false
    }
  },
  methods: {
    ProcessData () {
      this.ageCheck()
      // this.$router.push('page-3')
    },
    ageCheck () {
      if (this.age > 100) {
        this.$router.push('age-error')
      }
    },
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>
