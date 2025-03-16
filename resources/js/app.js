import './bootstrap'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import axios from 'axios'

import LandingPage from './components/LandingPage.vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage }
  ]
})

const axiosInstance = axios.create({
  withCredentials: true
})

const app = createApp(App)
app.config.globalProperties.$axios = axiosInstance
app.use(router).mount('#app')