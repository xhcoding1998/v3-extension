import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/plugins/inject.ts'
import request from '@/request/inject'

import App from '@/popup/components/App.vue';
const app = createApp(App)

app.use(createPinia())
app.use(request)

app.mount('#app')