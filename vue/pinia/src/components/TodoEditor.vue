<script setup>
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const { addTodo } = useTodoStore()
const text = ref('')

const handleSubmit = () => {
  addTodo(text.value)
  text.value = ''
}
</script>
<template>
  <form class="flex p-4 mb-3" @submit.prevent="handleSubmit">
    <input
      v-model="text"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 focus:outline-none border-2 border-[#2c8b73] rounded-l-md"
    />
    <button class="bg-[#2c8b73] text-[#ffffff] px-4 rounded-r-md cursor-pointer">Add</button>
  </form>
</template>
<style scoped></style>
