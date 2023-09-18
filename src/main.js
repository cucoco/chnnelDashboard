import '@/assets/styles.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(PrimeVue, { ripple: true });
app.use(createPinia())
app.use(router)

app.mount('#app')
