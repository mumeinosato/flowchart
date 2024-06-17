import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCodemirror from 'vue-codemirror'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCodemirror)

app.mount('#app')
