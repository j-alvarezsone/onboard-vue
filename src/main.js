import { createApp } from 'vue';
import DataddoTask from './DataddoTask.vue';
import axios from 'axios';
import './assets/css/tailwind.css';

const app = createApp(DataddoTask);
app.provide('$axios', axios);

app.mount('#app');
