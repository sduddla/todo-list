<script setup>
import TodoListItem from './TodoListItem.vue'

const props = defineProps({
  todos: {
    type: Array,
  },
})

const emit = defineEmits(['toggleTodo', 'deleteTodo'])

const toggleTodo = (id) => {
  emit('toggleTodo', id)
}

const deleteTodo = (id) => {
  emit('deleteTodo', id)
}
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @toggleTodo="toggleTodo"
      @deleteTodo="deleteTodo"
    />
  </ul>
</template>
<style scoped></style>
