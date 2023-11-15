<template>
  <div class="form-control">
    <label for="type">Тип блока</label>
    <select id="type">
      <option
        v-for="({text, value}) in options"
        :key="value"
        :value="value"
      >
        {{ text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inject: ['options']
}
</script>