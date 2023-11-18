<template>
  <div class="card card-w70">
    <template v-if="blocksData.length">
      <component
      v-for="({type, value}, index) in blocksData" 
      :key="`${type}_${index}`"
      :is="type"
      v-bind="{value: value}"></component>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import Avatar from './ResumeBlocks/Avatar.vue'
import Subtitle from './ResumeBlocks/Subtitle.vue'
import Text from './ResumeBlocks/Text.vue'
import Title from './ResumeBlocks/Title.vue'

export default {
  props: {
    blocksData: {
      type: Array,
      desc: 'Массив с элементами-данными о блоке, где type - тип блока, value - значение',
    }
  },
  components: {
    Avatar,
    Subtitle,
    Text,
    Title,
  }
}
</script>