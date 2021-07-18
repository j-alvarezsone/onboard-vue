<template>
  <div class="flex my-6">
    <input
      class="rounded p-2 w-3/5 border-2 border-gray-200"
      type="text"
      placeholder="Search user by name..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchBox',
  props: {
    modelValue: {
      type: String,
    },
  },
};
</script>
