import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { defineRule, configure, ErrorMessage, Form, Field } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize({ Zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
const app = createApp(App)
app.component('ErrorMessage', ErrorMessage)
app.component('Form', Form)
app.component('Field', Field)

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
