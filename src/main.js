import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import buttonbar from './components/buttonbar.vue'

const app = createApp(App)

app.component('buttonbar', buttonbar)


app.mount('#app')
