<template>
  <div class="form-input-area">
    <div v-if="title" class="form-input-title">{{ title }}</div>
    <input
      v-bind="{ name, placeholder, required, disabled, type, min, max, id }"
      @keypress="$emit('keypress', $event)"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: {
    title: String,
    name: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    type: String,
    placeholder: String,
    min: [Number, String],
    max: [Number, String],
    displayName: String,
    required: Boolean,
    disabled: Boolean,
    id: [String, Number]
  }
}
</script>
