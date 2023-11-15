<template>
  <button 
    class="btn"
    :class="color"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      desc: 'Цвет кнопки',
      validator(value) {
        return ['primary', 'danger'].includes(value)
      }
    }
  }
}
</script>