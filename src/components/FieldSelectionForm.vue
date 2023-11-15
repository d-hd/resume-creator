<template>
  <form class="card card-w30">
    <VSelect/>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3"></textarea>
    </div>

    <button class="btn primary">Добавить</button>
  </form>
</template>

<script>
import VSelect from './base/VSelect.vue';

export default {
    components: { VSelect }
}
</script>