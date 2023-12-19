import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import veeValidatePlugins from './plugins/vee-validate'
const app = createApp(App)

import VueTheMask from "vue-the-mask"
app.use(createPinia())
app.use(router)
app.use(VueTheMask)
app.use(ElementPlus)
app.use(veeValidatePlugins)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
export default app;

