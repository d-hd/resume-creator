<template>
  <form class="card card-w30">
    <VSelect v-model="typeBlock" />
    <VTextarea v-model="blockValue" />
    <button class="btn primary">Добавить</button>
  </form>
</template>

<script>
import VSelect from './base/VSelect.vue';
import VTextarea from './base/VTextarea.vue';

export default {
  components: { VSelect, VTextarea },
  data() {
    return {
      typeBlock: 'title',
      blockValue: '',
    }
  },
  computed: {
    valueSelect() {
      return this.typeBlock
    },
    valueTextarea() {
      return this.blockValue
    }
  }
}
</script>