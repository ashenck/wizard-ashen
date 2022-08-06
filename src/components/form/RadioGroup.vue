<template>
  <div v-if="options.length" class="form-input-area">
    <div v-if="title" class="form-input-title">{{ title }}</div>
    <div class="form-radio-input" v-for="option in options" :key="option.id">
      <input
        :value="option.id"
        type="radio"
        :name="name"
        :id="`${id}-${option.id}`"
        v-model="model"
        @change="$emit('change', $event)"
      />
      <label :for="`${id}-${option.id}`">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    id: [String, Number]
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  data () {
    return {
      selectedRadio: 1
    }
  }
}
</script>
