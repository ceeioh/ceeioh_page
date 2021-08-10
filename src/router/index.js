import { createRouter, createWebHistory } from 'vue-router'

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
  {
    path: '/root',
    name: 'root',
    component: () => import('../views/Root.vue'),
    beforeEnter: (to, from, next) => {
      let isAuthenticated = localStorage.getItem('cee_isAuthenticated')
      if(to.name !== 'login' && !isAuthenticated) next({name: 'login'})
      else next()
    }
   },
   {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      let isAuthenticated = localStorage.getItem('cee_isAuthenticated')
      if(isAuthenticated) next({name: 'root'})
      else next()
    }
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
