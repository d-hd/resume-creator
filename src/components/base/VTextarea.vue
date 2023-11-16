<template>
  <div class="form-control">
    <label :for="id">{{ labelText }}</label>
    <textarea 
      :id="id"
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      desc: 'Значение',
    },
    labelText: {
      type: String,
      desc: 'Текст лейбла',
      default: 'Значение'
    },
    placeholder: {
      type: String,
      desc: 'Текст плейсхолдера',
      default: 'Введите значение'
    },
    rows: {
      type: Number,
      desc: 'Количество строк',
      default: 3
    }
  },
  data() {
    return {
      id: 'textarea' + Math.random(),
    }
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>