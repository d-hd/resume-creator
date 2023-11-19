<template>
  <form class="card card-w30">
    <VSelect v-model="typeBlock" />
    <VTextarea v-model="blockValue" />
    <VButton
      class="addBtn"
      color="primary"
      :disabled="isDisabledBtn"
      @action="$emit('addBlock', block), resetForm()"
    >
      Добавить
    </VButton>
    <VButton
      class="clearBtn"
      color="danger"
      @action="$emit('clear')"
    >
      Очистить резюме
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
    clear: null
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
  },
  methods: {
    resetForm() {
      this.typeBlock = 'title'
      this.blockValue = ''
    }
  }
}
</script>

<style scoped>
.clearBtn {
  width: 100%;
  margin: 20px 0 0 0;
}

.addBtn {
  width: 100%;
  margin: 0;
}
</style>