<template >
  <p>
    <VButton 
      v-if="!showComments"
      color="primary"
      @action="getComments"
    >
      Загрузить комментарии
    </VButton>
  </p>
  <template v-if="showComments">
    <div 
      class="card"
      v-if="!isLoading">
      <h2>Комментарии</h2>
      <ul class="list">
        <li 
          class="list-item"
          v-for="{email, body, id} in comments"
         :key="id"
        >
          <div>
            <p><strong>{{ email }}</strong></p>
            <small>{{ body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <Loader v-if="isLoading" />
  </template>
</template>

<script>
import Loader from './Loader.vue';

export default {
  emits: ['showAlert'],
  data() {
    return {
      comments: [],
      isLoading: false,
      showComments: false,
      alert: null,
    }
  },
  methods: {
    async getComments() {
      try {
        this.showComments = true
        this.isLoading = true

        const respons = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const comments = await respons.json()
        if (!comments || !comments.length) {
          throw new Error('Список комментариев пуст')
        }

        this.comments = comments

        this.isLoading = false
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка', 
          text: error.message
        }

        this.$emit('showAlert', this.alert)
        this.showComments = false
        this.isLoading = false
      }
    }
  },
  components: {
    Loader
  }
}
</script>