<template>
  <div class="avatar">
    <img 
      :src="src" 
      :alt="alt"
    >
  </div>
</template>

<script>
export default {
  props: {
    scr: {
      type: String,
      desc: 'Ссылка на картинку'
    }
  },
  alt: {
    type: String,
    desc: 'Альт картинки'
  }
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>