import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from "axios";
import '@vuepic/vue-datepicker/dist/main.css';
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

loadFonts()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(CkeditorPlugin)

app.config.globalProperties.axios = axios
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
