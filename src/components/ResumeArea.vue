<template>
  <div class="card card-w70">
    {{ blockData }}
    <h3 v-if="!blockData.length">Добавьте первый блок, чтобы увидеть результат</h3>
    <component
      v-else
      v-for="({type, value}, index) in blockData" 
      :key="index"
      :is="getCurrentComponent(type)"
      v-bind="value"></component>
  </div>
</template>

<script>
import Avatar from './ResumeBlocks/Avatar.vue'
import Subtitle from './ResumeBlocks/Subtitle.vue'
import Text from './ResumeBlocks/Text.vue'
import Title from './ResumeBlocks/Title.vue'

export default {
  props: {
    blockData: {
      type: Array,
      desc: 'Массив с элементами-данными о блоке, где type - тип блока, value - значение',
      // validator(arr) {
      //   if (arr.length) return true
        
      //   return false
      // }
    }
  },
  methods: {
    getCurrentComponent(type) {
      switch (type) {
        case 'title':
          return 'Title'
          break
        case 'subtitle':
          return 'Subtitle'
          break
        case 'avatar':
          return 'Avatar'
          break
        case 'text':
          return 'Text'
          break
      }
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