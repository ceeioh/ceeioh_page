<template>
  <NavBar :pages="[
    {
      name:'Inicio',
      link:'/'
    },
    {
      name:'Proyectos',
      link:'/proyectos'
    },
    {
      name:'Encuestas',
      link:'/encuestas'
    },
    {
      name:'Actualidad',
      link:'/actualidad'
    },
    {
      name:'¿Cómo actúo?',
      link:'/actuar'
    },
    {
      name:'Integrantes',
      link:'/integrantes'
    }
  ]">
  <div class="flex justify-center items-center flex-grow">
    <router-link to="/actualidad#ganadores">
    <span class="tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
      <i class="fas fa-award" aria-hidden="true"></i> Ganadores
    </span>
    </router-link>
  </div>
  </NavBar>
  <div class="container">
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
