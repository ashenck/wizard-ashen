<template>
  <div class="form-input-area">
    <div v-if="title" class="form-input-title">{{ title }}</div>
    <select @change="$emit('change', $event)" v-bind="{ name, required, disabled, id }">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
        >{{ option.value }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
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
    required: Boolean,
    disabled: Boolean,
    id: [String, Number]
  }
}
</script>
