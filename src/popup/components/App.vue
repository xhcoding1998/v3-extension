<template>
  <div class="popup-view">
    {{ aaa }}
    <button @click="aaa = '23123123'">3213</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const aaa = ref('3123123')
</script>

<style scoped>
  .popup-view {
    width: 200px;
    height: 200px;
  }
</style>