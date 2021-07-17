import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers: (state, userList) => {
      state.users = userList;
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
