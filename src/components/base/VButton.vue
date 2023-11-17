<template>
  <button 
    class="btn"
    :class="color"
    :disabled="disabled"
    @click.prevent="$emit('action')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    color: {
      type: String,
      desc: 'Цвет кнопки',
      validator(value) {
        return ['primary', 'danger'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      desc: 'Заблокировать кнопку'
    }
  }
}
</script>