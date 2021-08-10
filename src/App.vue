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
  ]"/>
  <div class="container">
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
//import {getAllProjects} from '@/functions/axios'

export default {
  name: 'app',
  components: {
    NavBar
  },
  /*
  data(){
      return {
          proyecto: true
      }
  },
  async created() {
    const res = await getAllProjects()
    this.proyecto = res.data
    provide('proyecto', this.proyecto)
  }*/

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
