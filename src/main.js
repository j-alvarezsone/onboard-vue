import { createApp } from 'vue';
import DataddoTask from './DataddoTask.vue';
import axios from 'axios';
import store from './store';
import './assets/css/tailwind.css';

const app = createApp(DataddoTask);
app.provide('$axios', axios);
app.use(store);

app.mount('#app');
