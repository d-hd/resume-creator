import './assets/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import VButton from './components/base/VButton.vue';
// import VSelect from './components/base/VSelect.vue'

const app = createApp(App)

app.component('VButton', VButton)
// app.component('VSelect', VSelect)
app.mount('#app')
