<template>
  <div class="container">
    <Alert 
      :alert="alert"
      @close="alert = null" />
    <div class="column">
      <FieldSelectionForm 
        @addBlock="setBlocksData"
        @clear="clearResume"/>
      <ResumeArea :blocksData="blocksData"/>
    </div>
    <Comments @showAlert="(message) => alert = message" />
  </div>
</template>

<script>
import ResumeArea from './components/ResumeArea.vue'
import FieldSelectionForm from './components/FieldSelectionForm.vue'
import Comments from './components/Comments.vue'
import Alert from './components/base/Alert.vue'

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
      blocksData: [],
      alert: null,
      resumeIdOnFirebase: null
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
    Alert
  },
  methods: {
    setBlocksData(data) {
      this.blocksData.push(data)

      this.sendToFirebase()
    },
    async sendToFirebase() {
      try {
        let respons

        if (this.resumeIdOnFirebase) {
          const responsDelete = await fetch(`https://resume-creator-7aa3e-default-rtdb.firebaseio.com/resume/${this.resumeIdOnFirebase}.json`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })

          respons = await fetch(`https://resume-creator-7aa3e-default-rtdb.firebaseio.com/resume/${this.resumeIdOnFirebase}.json`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.blocksData)
          })
        } else {
          respons = await fetch('https://resume-creator-7aa3e-default-rtdb.firebaseio.com/resume.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.blocksData)
          })
        }

        const firebaseData = await respons.json()

        if (!this.resumeIdOnFirebase) {
          this.resumeIdOnFirebase = firebaseData.name
        }
      } catch (error) {
          this.alert = {
            type: 'danger',
            title: 'Ошибка', 
            text: 'Данные не были загружены на сервер. Попробуйте позже или обратитесь к администратору.'
          }
      }
    },
    async loadResume() {
      try {
        const respons = await fetch('https://resume-creator-7aa3e-default-rtdb.firebaseio.com/resume.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const firebaseData = await respons.json()

        Object.keys(firebaseData).map((key, index) => {
          this.resumeIdOnFirebase = key
        })

        this.blocksData = firebaseData[this.resumeIdOnFirebase]
      } catch (error) {
        this.alert = {
          type: 'warning',
          title: 'Предупреждение', 
          text: 'Данные с сервера не были получены. Составьте резюме заново.'
        }
      }
    },
    async clearResume() {
      try {
        let url

        if (this.resumeIdOnFirebase) {
          url = `https://resume-creator-7aa3e-default-rtdb.firebaseio.com/resume/${this.resumeIdOnFirebase}.json`
        } else {
          url = 'https://resume-creator-7aa3e-default-rtdb.firebaseio.com/resume.json'
        }

        const responsDelete = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await responsDelete.json()

        if (data === null) {
          this.blocksData = []
          this.alert = {
            type: 'primary',
            title: 'Успешно',
            text: 'Резюме удалено.'
          }
        } else {
          throw new Error()
        }
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка', 
          text: 'Не удалось очистить резюме.'
        }
      }        
    }
  },
  mounted() {
    this.loadResume()
  }
}
</script>

<style>

</style>
