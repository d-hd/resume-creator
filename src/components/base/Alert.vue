<template>
  <div 
    class="alert"
    v-if="alert"
    :class="alert.type"
  >
    <h3>{{ alert.title }}</h3>
    <p>{{ alert.text }}</p>
    <VButton 
      :color="alert.type"
      @action="$emit('close')"
    >
      Закрыть
    </VButton>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    alert: {
      type: Object,
      desc: 'Объект с ошибкой, где type - тип уведомления, title - заголовок уведомления, text - текст уведомления'
    }
  },
}
</script>