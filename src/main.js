import {createApp} from 'vue'
import App from './App.vue'
import './assets/style/index.scss'
import './assets/style/bulma-variables.scss'
import GAuth from 'vue3-google-oauth2'

const app = createApp(App)

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "147702823987-fjgdvrk3f2e5vjqsr8tehtug4g4rmiu0.apps.googleusercontent.com"

const gAuthOptions = {clientId: GOOGLE_CLIENT_ID, scope: 'email', prompt: 'consent', fetch_basic_profile: true}

app.use(GAuth, gAuthOptions)
app.mount('#app')
