import { createApp } from 'vue'
import router from './router'
import store from './store/store'
import App from './App.vue'
import './styles/main.scss'

const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')