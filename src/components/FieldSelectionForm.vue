<template>
  <form class="card card-w30">
    <VSelect v-model="typeBlock" />
    <VTextarea v-model="blockValue" />
    <VButton
      color="primary"
      :disabled="isDisabledBtn"
      @action="$emit('addBlock', block)"
    >
      Добавить
    </VButton>
  </form>
</template>

<script>
import VSelect from './base/VSelect.vue';
import VTextarea from './base/VTextarea.vue';

export default {
  emits: {
    addBlock(block) {
      if (!Object.keys(block).length) {
        console.warn('Нет параметра block для emit addBlock')
        return false
      }

      if (!block.type?.length) {
        console.warn('Нет параметра type в объекте block для emit addBlock')
        return false
      }

      if (!block.value?.length) {
        console.warn('Нет параметра value в объекте block для emit addBlock')
        return false
      }

      return true
    },
  },
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
    },
    isDisabledBtn() {
      return this.blockValue.length < 3
    },
    block() {
      return {
        type: this.typeBlock,
        value: this.blockValue
      }
    }
  }
}
</script>