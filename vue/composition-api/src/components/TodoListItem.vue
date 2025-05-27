<script setup>
const props = defineProps({
  todo: {
    type: Object,
  },
})

const emit = defineEmits(['toggleTodo', 'deleteTodo'])

const handleToggle = () => {
  emit('toggleTodo', props.todo.id)
}

const handleDelete = () => {
  emit('deleteTodo', props.todo.id)
}
</script>
<template>
  <li class="flex items-center justify-between p-3">
    <div class="flex items-center">
      <input
        type="checkbox"
        class="mr-3 h-4 w-4 accent-[#35495e]"
        @change="handleToggle"
        :checked="props.todo.done"
      />
      <span :class="{ 'line-through text-gray-400': props.todo.done }">{{ props.todo.text }}</span>
    </div>
    <button class="text-red-500 cursor-pointer" @click="handleDelete">Delete</button>
  </li>
</template>
<style scoped></style>
