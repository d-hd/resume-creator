<template>
  <div class="form-control">
    <label :for="id">Тип блока</label>
    <select 
      :id="id"
      :value="modelValue"
      @change="change"
    >
      <option
        v-for="({text, value}) in options"
        :key="value"
        :value="value"
      >
        {{ text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  inject: ['options'],
  data() {
    return {
      id: 'option' + Math.random(),
    }
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>