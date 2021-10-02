<template>

      <div class="w-screen">
          <img src="@/assets/centroalumnos.jpg" alt="centro de alumnos actual del cee ioh">
      </div>
  <div class="grid grid-cols-3 m-auto mb-5">
    
    <div class="lg:col-span-2 col-span-3 p-2" v-if="proyectos !== null">
      <table class="rounded-lg w-full mt-4 bg-gray-200 text-gray-800 border-gray-300 border-2		">
        <tr class="text-left border-b-2 border-gray-300">
           <router-link to="/proyectos"><th class="px-4 py-3 underline text-teal-dark uppercase tracking-wide font-bold text-base ">Proyectos</th> </router-link>
        </tr>
        
        <tr class="bg-gray-100 border-b border-gray-200" v-for="(e,i) in proyectos.lista_proyectos.reverse()" :key="i" :class="{'hidden': (i >= 3) ? true : false}">


          <td class="px-4 py-3 text-left w-1/6">{{e.n}}</td>

          <td class="px-4 py-3 text-justify hidden md:block ">{{e.o}}</td>

          <td class="px-4 py-3 w-3/6">
                    <div class=" rounded-md text-xs border-2 border-gray-200 bg-gray-100 leading-none py-1 text-center text-black mr-2" :style="`width: 100%;`">
                    <div class=" rounded-md text-xs leading-none py-1 text-center text-black mr-2 -my-1" 
                        :style="`width: ${e.pr}%; background-color: #42b983`"             
                        ></div>
                    </div>
                    <p>
                      {{e.pr}}%
                    </p>
          </td>
        </tr> 
        


      </table>
    </div>
  <div class="lg:col-span-1 col-span-3 p-2" v-if="encuestas !== null">
    <table class="rounded-t-lg w-full mt-4 bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
          <th class="px-4 py-3">Encuestas</th>
        </tr>
        <tr class="bg-gray-100 border-b border-gray-200" v-for="(e,i) in encuestas.polls" :key="i" :class="{'hidden': (i > 3) ? true : false}">
          <td class="px-4 py-3">{{e.n}}</td>
          <td class="px-4 py-3 text-blue-500">                <div class="text-left">
                    <a :href="e.l" target="_blank" class="text-left text-blue-500">Contestar</a>
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
import proyectos from '@/functions/proyectos'
import encuestas from '@/functions/encuestas'

export default {
  name: 'Home',
  data(){
        return {
            proyectos,
            encuestas,
        }
    },
}
</script>
