import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/popup/components/App.vue';
import '@/plugins/inject.ts'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')