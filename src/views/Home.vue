<template>

      <div class="w-screen">
          <img src="@/assets/centroalumnos.jpg" alt="centro de alumnos actual del cee ioh">
      </div>
  <div class="grid grid-cols-3 m-auto">
    
    <div class="lg:col-span-2 col-span-3 p-2" v-if="proyectos !== null">
      <table class="rounded-t-lg w-full mt-4 bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
          <th class="px-4 py-3">Proyectos</th>
        </tr>
        
        <tr class="bg-gray-100 border-b border-gray-200" v-for="(e,i) in proyectos.data.proyects.reverse()" :key="i" :class="{'hidden': (i >= 3) ? true : false}">
          <td class="px-4 py-3 w-2/12">{{e.nombre}}</td>
          <td class="px-4 py-3 leading-tight text-justify w-7/12">{{e.descripcion}}</td>
          <td class="px-4 py-3 hidden lg:block">
            <div class="border rounded-lg border-black w-full bg-grey-light mt-2">
              <div class=" rounded-l-lg text-xs leading-none py-1 text-center text-black" 
              :style="`width: ${e.avance}%`"
              :class="{
                'rounded-lg': e.avance > 97 ? true : false,
                'bg-red-400':  e.avance > -1 ? true : false,
                'bg-yellow-200':  e.avance > 39 ? true : false,
                'bg-green-400':  e.avance > 59 ? true : false,
                'bg-blue-300':  e.avance == 100 ? true : false,
                }"
             
              >{{e.avance}}%</div>
            </div>
          </td>
        </tr> 
        


      </table>
    </div>
  <div class="lg:col-span-1 col-span-3 p-2" v-if="encuestas !== null">
    <table class="rounded-t-lg w-full mt-4 bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
          <th class="px-4 py-3">Encuestas</th>
        </tr>
        <tr class="bg-gray-100 border-b border-gray-200" v-for="(e,i) in encuestas.data.polls" :key="i" :class="{'hidden': (i > 3) ? true : false}">
          <td class="px-4 py-3">{{e.nombre}}</td>
          <td class="px-4 py-3 text-blue-500">                <div class="text-left">
                    <a :href="e.link" target="_blank" class="text-left text-blue-500">Contestar</a>
                </div></td>
        </tr> 
      </table>
  </div>
</div>
</template>

<script>
/*
 <h1 class="pl-10 pt-2 sm:pt-5 text-white sm:pl-80  pt-5 ">Html <span class=" text-xs text-yellow-400">80%</span></h1>
    <div class="mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
        <div class=" w-full h-full bg-gray-200 absolute "></div>
        <div class=" h-full bg-yellow-400 sm:bg-green-500 absolute" style="width:80%"></div>
    </div>
*/
import {getAllProjects,getAllPolls} from '@/functions/axios'

export default {
  name: 'Home',
  data(){
        return {
            proyectos: null,
            encuestas: null,
            actualidad: null
        }
    },
    async created(){
        this.encuestas = await getAllPolls()
        this.proyectos = await getAllProjects()
    },
}
</script>
