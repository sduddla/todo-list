<script>
export default {
  name: 'TodoListItem',

  props: {
    todo: {
      type: Object,
    },
  },

  emits: ['toggleTodo', 'deleteTodo'],

  methods: {
    handleToggle() {
      this.$emit('toggleTodo', this.todo.id)
    },

    handleDelete() {
      this.$emit('deleteTodo', this.todo.id)
    },
  },
}
</script>
<template>
  <li class="flex items-center justify-between p-3">
    <div class="flex items-center">
      <input
        type="checkbox"
        class="mr-3 h-4 w-4 accent-[#35495e]"
        @change="handleToggle"
        :checked="todo.done"
      />
      <span :class="{ 'line-through text-gray-400': todo.done }">{{ todo.text }}</span>
    </div>
    <button class="text-red-500 cursor-pointer" @click="handleDelete">Delete</button>
  </li>
</template>
<style scoped></style>
