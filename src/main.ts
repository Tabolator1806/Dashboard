import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './styles/main.css'
// @ts-ignore
import router from './router/index.js'
const app = createApp(App)
app.use(router).mount('#app')
