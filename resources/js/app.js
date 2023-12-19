
import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
import App from './App.vue';
import router from './routes';
import store from "./components/store"

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(store);

app.mount('#app');
