<template>
  <div class="w-full">
    <!-- input -->
    <input
      class="rounded p-2 border-2 border-gray-200 w-full"
      type="text"
      placeholder="Search user by name..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
  <!-- Selected -->
  <div class="flex w-full ml-4">
    <span class="w-full bg-blue-700 p-2 mr-4 rounded-md text-center text-white"
      >Selected Users: {{ selectedUsers }}</span
    >
    <span class="w-full bg-blue-700 p-2 mr-4 rounded-md text-center text-white"
      >Unselected Users: {{ unselectedUsers }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    selectedUsers: {
      type: Number,
      required: true,
    },
    unselectedUsers: {
      type: Number,
      required: true,
    },
  },
};
</script>
