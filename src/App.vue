<template>
  <div class="container column">
    <FieldSelectionForm @addBlock="setBlocksData"/>
    <ResumeArea :blocksData="blocksData"/>
  </div>
  <div class="container">
    <p>
      <VButton color="primary">Загрузить комментарии</VButton>
    </p>
    <Comments />
  </div>
</template>

<script>
import ResumeArea from './components/ResumeArea.vue'
import FieldSelectionForm from './components/FieldSelectionForm.vue'
import Comments from './components/Comments.vue'

export default {
  data() {
    return {
      blockTypes: [
        {
          text: 'Заголовок',
          value: 'title',
        },
        {
          text: 'Подзаголовок',
          value: 'subtitle',
        },
        {
          text: 'Аватар',
          value: 'avatar',
        },
        {
          text: 'Текст',
          value: 'text',
        },
      ],
      blocksData: []
    }
  },
  provide() {
    return {
      options: this.blockTypes
    }
  },
  components: {
    ResumeArea,
    FieldSelectionForm,
    Comments,
  },
  methods: {
    setBlocksData(data) {
      this.blocksData.push(data)
    }
  },
}
</script>

<style>

</style>
