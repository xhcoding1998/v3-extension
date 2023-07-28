import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/plugins/popup.ts'

import App from '@/popup/pages/App.vue';
const app = createApp(App)

app.use(createPinia())

app.mount('#app')