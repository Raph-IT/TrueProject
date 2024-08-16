// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateCV from '../views/CreateCV.vue'
import MyCVs from '../views/MyCVs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-cv',
    name: 'CreateCV',
    component: CreateCV
  },
  {
    path: '/my-cvs',
    name: 'MyCVs',
    component: MyCVs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router