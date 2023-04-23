import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/popup/components/App.vue';
import '@/plugins/inject.ts'
import request from '@/request/inject'

const app = createApp(App)

app.use(createPinia())
app.use(request)

app.mount('#app')