import { createApp } from 'vue'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './routes';
createApp(App).use(router).mount('#app')
