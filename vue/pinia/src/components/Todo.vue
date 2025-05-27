<script setup>
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
</script>
<template>
  <TodoHeader />
  <TodoEditor />
  <div class="overflow-y-auto flex-1">
    <TodoList />
  </div>
</template>
<style scoped></style>
