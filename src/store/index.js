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
        commit('setUsers', resp.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
