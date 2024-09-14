import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'

import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification'

const options = {
  // You can set your default options here
  position: 'bottom-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
}

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(Toast, options)
app.mount('#app')
