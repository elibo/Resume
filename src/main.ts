import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import App from './App.vue'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en: en,
    es: es
  }
})

app.use(i18n)
app.mount('#app')
