import './assets/styles/main.css';

import { createApp } from 'vue';

import App from './components/App.vue';
import { router } from './routes';

const app = createApp(App);

app.use(router);
app.mount('#app');
