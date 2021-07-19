import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    loading: false,
  },
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        this.state.loading = true;

        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        const update = resp.data.map((user) => ({
          ...user,
          selected: false,
        }));

        setTimeout(() => {
          this.state.loading = false;
        }, 2000);

        commit('setUsers', update);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
