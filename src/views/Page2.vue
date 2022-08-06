<template>
  <div>
    <h2>Tell us about yourself</h2>
    <div class="form-area">
      <InputBox title="Name" id="form_name" name="name" />
      <InputBox title="Age" id="form_age" name="age" type="number" />
      <DropDown title="Where do you live" id="form_country" name="country" :options="countryOptions" />
      <RadioGroup id="form_package" name="package" :options="packageOptions" />
    </div>
    <h4>Your premium is: {amount}HKD</h4>
    <button @click="backHome()">Back</button>
    <button @click="ProcessData()">Next</button>
  </div>
</template>

<script>
import InputBox from '@/components/form/InputBox.vue'
import DropDown from '@/components/form/DropDown.vue'
import RadioGroup from '@/components/form/RadioGroup.vue'

export default {
  name: 'HomePage',
  components: {
    InputBox,
    DropDown,
    RadioGroup
  },
  data () {
    return {
      countryOptions: [
        { id: 1, value: 'Hong Kong' },
        { id: 2, value: 'USA' },
        { id: 3, value: 'Australia' }
      ],
      packageOptions: [
        { id: 1, value: 'standard', label: 'Standard' },
        { id: 2, value: 'safe', label: 'Safe (+250HKB, 50%)' },
        { id: 3, value: 'super_safe', label: 'Super Safe (+375HKB, 75%)' }
      ]
    }
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
