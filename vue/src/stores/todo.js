import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const loadTodos = () => {
  const saved = sessionStorage.getItem('todos')
  return saved ? JSON.parse(saved) : []
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref(loadTodos())

  const addTodo = (text) => {
    if (!text.trim()) return;
    
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

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
})
