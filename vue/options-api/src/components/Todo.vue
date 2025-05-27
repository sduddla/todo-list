<script>
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'Todo',
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },

  data() {
    return {
      todos: [],
    }
  },

  methods: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false,
      })
    },

    toggleTodo(id) {
      this.todos = this.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
  },

  // 저장
  watch: {
    todos: {
      deep: true,
      handler(newTodos) {
        sessionStorage.setItem('todos', JSON.stringify(newTodos))
      },
    },
  },

  // 복원
  mounted() {
    const saved = sessionStorage.getItem('todos')
    if (saved) {
      this.todos = JSON.parse(saved)
    }
  },
}
</script>
<template>
  <TodoHeader />
  <TodoEditor @addTodo="addTodo" />
  <div class="overflow-y-auto flex-1">
    <TodoList :todos="todos" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo" />
  </div>
</template>
<style scoped></style>
