import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt"
import Fastclick from "fastclick"
// import Vuelazyload from "vue-lazyload"

let app = createApp(App)

app.config.globalProperties.$bus = new mitt()
app.use(store).use(router).mount('#app')
// app.use(Vuelazyload)

Fastclick.attach(document.body)


