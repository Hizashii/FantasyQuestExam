import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'



const app = createApp(App) // Creating Vue application instance
app.use(MotionPlugin)
app.mount('#app') // Mounting Vue application to the DOM

