import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        setTimeout(() => {
          commit('setUsers', resp.data);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
