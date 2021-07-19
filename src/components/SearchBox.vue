<template>
  <div class="w-full sm:col-span-2 lg:col-span-2 mb-6 md:mb-0">
    <!-- input -->
    <input
      class="rounded p-2 border-2 border-gray-200 w-full lg:w-11/12"
      type="text"
      placeholder="Search user by name..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>

  <!-- Selected -->
  <div class="flex sm:mt-5 lg:mt-0 min-w-full md:col-span-1 lg:col-span-1 lg:px-2 mb-4 sm:mb-0 md:mb-0">
    <span class="w-full sm:w-11/12 lg:w-full bg-blue-700 p-2 rounded-md text-center text-white"
      >Selected Users: {{ selectedUsers }}</span
    >
  </div>

  <div class="flex justify-end lg:pr-2 sm:mt-5 lg:mt-0 min-w-full md:col-span-1 lg:col-span-1 lg:px-2">
    <span class="w-full sm:w-11/12 lg:w-full bg-blue-700 p-2 rounded-md text-center text-white"
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
