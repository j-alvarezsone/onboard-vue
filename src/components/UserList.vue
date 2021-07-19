<template>
  <div v-if="!loading">
    <!-- Search -->
    <div class="p-4">
      <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-4 my-6">
        <search-box v-model="search" :selectedUsers="selectedUsers" :unselectedUsers="unselectedUsers" />
      </div>
      <p
        class="text-black text-base font-semibold"
        :style="[users.length ? { visibility: 'visible' } : { visibility: 'hidden' }]"
        v-if="!filteredUserName.length"
      >
        We could not find any user by name <span class="font-extrabold">"{{ search }}"</span>
      </p>
    </div>

    <!-- User card -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-4 lg:mx-6">
      <user-card
        v-for="user in filteredUserName"
        :key="user.id"
        :users="user"
        @click.prevent="selectedCounts(user.id)"
      />
    </div>
  </div>

  <div class="flex justify-center items-center h-screen" v-else>
    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue';
import SearchBox from './SearchBox.vue';

export default {
  name: 'UserList',
  components: {
    UserCard,
    SearchBox,
  },
  data() {
    return {
      search: '',
      selectedUsers: 0,
      unselectedUsers: 0,
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    loading() {
      return this.$store.state.loading;
    },
    filteredUserName() {
      return this.users.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    selectedCounts(uid) {
      const selectedUser = this.users.find((user) => user.id === uid);

      selectedUser.selected = !selectedUser.selected;

      if (selectedUser.selected === true) {
        this.selectedUsers++;
        this.unselectedUsers--;
      } else {
        this.unselectedUsers++;
        this.selectedUsers--;
      }
    },
  },
  async created() {
    await this.$store.dispatch('getUsers');

    this.unselectedUsers = this.$store.state.users.length;
  },
};
</script>
