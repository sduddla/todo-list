<script>
export default {
  name: 'TodoEditor',

  data() {
    return {
      text: '',
    }
  },

  emits: ['addTodo'],

  methods: {
    handleSubmit() {
      this.$emit('addTodo', this.text)
      this.text = ''
    },
  },
}
</script>
<template>
  <form class="flex p-4 mb-3" @submit.prevent="handleSubmit">
    <input
      v-model="text"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border-2 border-[#2c8b73] rounded-l-md focus:outline-none"
    />
    <button class="bg-[#2c8b73] text-[#ffffff] px-4 rounded-r-md cursor-pointer">Add</button>
  </form>
</template>
<style scoped></style>
