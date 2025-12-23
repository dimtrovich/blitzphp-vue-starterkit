import './assets/css/main.css'
import './assets/js/main.js'

import { createApp } from 'vue'

import App from './App.vue'
import initPlugin from './plugins'

initPlugin(createApp(App)).mount('#app')
