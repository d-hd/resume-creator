<template>
  <h2>{{ subtitle }}</h2>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      desc: 'Текст подзаголовока'
    }
  }
}
</script>