import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Headers from './components/Header/Headers.vue';

import './assets/scss/index.scss';
import './plugins/lib-flexible';

const app = createApp(App);
app.component('Headers', Headers);

app.use(store).use(router).mount('#app');
