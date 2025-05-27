<script setup>
import { onMounted, ref, watch } from 'vue'
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

const todos = ref([])

const addTodo = (text) => {
  todos.value.push({
    id: Date.now(),
    text,
    done: false,
  })
}

const toggleTodo = (id) => {
  todos.value = todos.value.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
}

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

// 저장
watch(
  todos,
  (newTodos) => {
    sessionStorage.setItem('todos', JSON.stringify(newTodos))
  },
  { deep: true },
)

// 복원
onMounted(() => {
  const saved = sessionStorage.getItem('todos')
  if (saved) {
    todos.value = JSON.parse(saved)
  }
})
</script>
<template>
  <TodoHeader />
  <TodoEditor @addTodo="addTodo" />
  <div class="overflow-y-auto flex-1">
    <TodoList :todos="todos" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo" />
  </div>
</template>
<style scoped></style>
