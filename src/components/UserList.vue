<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-6 lg:mx-4" v-if="users.length">
    <user-card v-for="user in users" :key="user.id" :users="user" />
  </div>
  <div class="flex justify-center items-center h-screen" v-else>
    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
</template>
<script>
import UserCard from './UserCard.vue';

export default {
  name: 'UserList',
  components: {
    UserCard,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('getUsers');
  },
};
</script>
