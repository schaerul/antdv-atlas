import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import '../src/assets/css/antd.css'
import '../src/assets/font/gothamrounded.css'


const app = createApp(App)
app.config.productionTip = false

app.use(Antd)
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app')
