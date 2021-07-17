<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-6 lg:mx-4">
    <user-card v-for="user in users" :key="user.id" :users="user" />
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
