<template>
  <div class="main-container">
    <div class="card">
      <h2>Tell us about yourself</h2>
      <div class="form-area">
        <InputBox
          title="Name"
          id="form_name"
          name="name"
          placeholder="Enter your name"
          v-model="name"
          required
        />
        <InputBox
          title="Age"
          id="form_age"
          name="age"
          type="number"
          v-model="age"
          required
        />
        <DropDown
          title="Where do you live"
          id="form_country"
          name="country"
          :options="countryOptions"
          v-model="selectedCountry"
          @change="countryChange"
        />
        <RadioGroup
          id="form_package"
          name="package"
          :options="packageOptions"
          v-model="selectedPackage"
        />
      </div>
      <p
        class="text-center premium-section"
        v-if="age && selectedPackageData && selectedPackageData.packageTotal"
      >
        Your premium is:
        <span class="text-bold"
          >{{ selectedPackageData.packageTotal }}
          {{ selectedCurrencyData.currency }}
        </span>
      </p>
      <div class="button-footer">
        <button class="button" @click="backHome()">Back</button>
        <button
          class="button button-blue"
          :disabled="!validForm"
          @click="ProcessData()"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      age: 18,
      selectedCountry: 1,
      countryOptions: [
        { id: 1, value: 'Hong Kong', currency: 'HKD', rate: 1 },
        { id: 2, value: 'USA', currency: 'USD', rate: 2 },
        { id: 3, value: 'Australia', currency: 'AUD', rate: 3 }
      ],
      selectedPackage: 1,
      packageOptions: [
        {
          id: 1,
          value: 'Standard',
          label: 'Standard',
          precentage: 0,
          disabled: false
        },
        {
          id: 2,
          value: 'Safe',
          label: 'Safe (+250HKB, 50%)',
          precentage: 50,
          disabled: true
        },
        {
          id: 3,
          value: 'Super Safe',
          label: 'Super Safe (+375HKB, 75%)',
          precentage: 75,
          disabled: true
        }
      ]
    }
  },
  watch: {
    age () {
      this.updatePackageRates()
    }
  },
  computed: {
    validForm () {
      return !!(this.name && this.age)
    },
    selectedPackageData () {
      return this.packageOptions.find(
        option => option.id === this.selectedPackage
      )
    },
    selectedCurrencyData () {
      return this.countryOptions.find(
        option => option.id === this.selectedCountry
      )
    }
  },
  created () {
    this.updatePackageRates()
  },
  methods: {
    ...mapActions(['UPDATE_WIZARD']),
    ProcessData () {
      if (this.age > 100) {
        this.$router.push('age-error')
      }
      if (this.age <= 100) {
        let wizardData = {
          name: this.name,
          age: this.age,
          selectedCountry: this.selectedCountry,
          selectedPackage: this.selectedPackage,
          packageTotal: this.selectedPackageData.packageTotal,
          selectedCountryName: this.selectedCurrencyData.value,
          selectedCurrency: this.selectedCurrencyData.currency,
          selectedPackageName: this.selectedPackageData.value
        }
        this.UPDATE_WIZARD(wizardData).then(() => {
          this.$router.push('page-3')
        })
      }
    },
    countryChange () {
      this.updatePackageRates()
    },
    updatePackageRates () {
      if (!this.age) this.selectedPackage = 1
      const currencyData = this.selectedCurrencyData
      this.packageOptions.forEach((packageOption, index) => {
        const premium = this.calculatePremium(currencyData.rate)
        const premiumExtra = this.calculatePackageExra(
          premium,
          packageOption.precentage
        )

        packageOption.disabled = !this.age
        packageOption.premium = premium
        packageOption.packageExtra = premiumExtra
        packageOption.packageTotal = premium + premiumExtra
        packageOption.label = this.packageLabel(packageOption, currencyData)
      })
    },
    calculatePremium (rate) {
      let premiumAmount
      if (this.age) {
        const ageAmount = 10 * this.age
        premiumAmount = ageAmount * rate
      }
      return premiumAmount
    },
    calculatePackageExra (premiumAmount, precent) {
      if (premiumAmount) {
        return premiumAmount * (precent / 100)
      }
      return 0
    },
    packageLabel (packageData, currencyData) {
      if (packageData.packageExtra) {
        return `${packageData.value} ( +${packageData.packageExtra} ${currencyData.currency}, ${packageData.precentage}% )`
      }
      return packageData.value
    },
    getSelectedCurrencyData () {
      const currencyData = this.countryOptions.find(
        option => option.id === this.selectedCountry
      )
      return currencyData
    },
    getSelectedPackageData () {
      const packageData = this.packageOptions.find(
        option => option.id === this.selectedPackage
      )
      return packageData
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
