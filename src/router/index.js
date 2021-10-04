import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')  },
  {
    path: '/integrantes',
    name: 'integrantes',

    component: () => import('../views/Integrantes.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',

    component: () => import('../views/Proyectos.vue')
  },
  {
    path: '/encuestas',
    name: 'encuestas',

    component: () => import('../views/Encuestas.vue')
  },{
   path: '/actualidad',
   name: 'actualidad',
   component: () => import('../views/Actualidad.vue')
  },
  {
    path: '/actuar',
    name: 'actuar',
    component: () => import('../views/Actuar.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
