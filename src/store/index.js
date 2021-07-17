import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    userList: [],
  },
  mutations: {
    setUsers: (state, userList) => {
      state.userList = userList;
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
