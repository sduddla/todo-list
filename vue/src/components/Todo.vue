<script setup>
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
</script>
<template>
  <TodoHeader />
  <TodoEditor />
  <div class="overflow-y-auto">
    <TodoList />
  </div>
</template>
<style scoped></style>
