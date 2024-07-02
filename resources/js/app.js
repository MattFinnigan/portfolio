import './bootstrap'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage }
  ]
})

createApp(App).use(router).mount('#app')