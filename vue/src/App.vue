<script setup>
import Todo from './components/Todo.vue'
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-[#faf3dd]">
    <div
      class="w-full max-w-md h-[580px] bg-[#ffffff] rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <Todo />
    </div>
  </div>
</template>
<style scoped></style>
