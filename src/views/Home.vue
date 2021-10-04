<template>
<div class="w-screen">
  <section class="flex justify-center items-center h-3/5" id="carrusel">
      <div class="max-w-full transition duration-700 ease-in-out"
      :class="{'opacity-0' : viendo === 1 ? false : true,
              'opacity-100' : viendo === 1 ? true : false,
      }">
          <img src="@/assets/centroalumnos.jpg" alt="centro de alumnos actual del cee ioh" class="object-cover">
      </div>
      <div class="absolute transition duration-700 ease-in-out flex items-center justify-center 	"
        :class="{'opacity-0' : viendo === 2 ? false : true}"
      >


                    <div class="z-10 order-2 md:order-1 border-2 border-gray-300 rounded-lg	bg-gray-100		 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                        <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full  rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                            <h4 class="hidden md:block text-xl text-gray-400">Bienvenido a</h4>
                            <h3 class="hidden md:block font-bold text-2xl text-gray-700">Página oficial del CEE</h3>
                            <p class="text-gray-600 text-justify">
                                En este lugar se publicará la información oficial del centro de alumnos, llámese encuestas, proyectos con su estado de avance, grupos de estudio, entre otros temas importantes para la actualidad de colegio, todo esto para fomentar la participación y ser más transparentes y democráticos.
                            </p>
                            <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="https://www.instagram.com/_ceeiohmaristas/" target="_blank">
                                <span>Conocer más sobre el CEE</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                    </div>

        
      </div>
      <div class="absolute flex w-screen pr-10 pl-10 z-100">
        <button class="rounded-full bg-white w-16 h-16 flex items-center justify-center text-3xl" @click="prev()">
          <h1>🢘</h1>
        </button>
        <div class="flex-grow">
        </div>
        <button class="rounded-full bg-white w-16 h-16 flex items-center justify-center text-3xl	" @click="next()">
          <h1 class="">🢚</h1>
        </button>
      </div>
  </section>
  <section class="">
  <div class="grid grid-cols-3 mb-5">
    
    <div class="lg:col-span-2 col-span-3 p-2">
      <table class="rounded-lg w-full mt-4 bg-gray-200 text-gray-800 border-gray-300 border-2		">
        <tr class="text-left border-b-2 border-gray-300">
           <router-link to="/proyectos"><th class="px-4 py-3 underline text-teal-dark uppercase tracking-wide font-bold text-base ">Proyectos</th> </router-link>
        </tr>
        <template v-for="i in 3" :key="i">

          <tr v-if="i <= 3" class="bg-gray-100 border-b border-gray-200" >


            <td class="px-4 py-3 text-left w-1/6">{{proyectos.lista_proyectos[i].n}}</td>

            <td class="px-4 py-3 text-justify hidden md:block ">{{proyectos.lista_proyectos[i].o}}</td>

            <td class="px-4 py-3 w-3/6">
                      <div class=" rounded-md text-xs border-2 border-gray-200 bg-gray-100 leading-none py-1 text-center text-black mr-2" :style="`width: 100%;`">
                      <div class=" rounded-md text-xs leading-none py-1 text-center text-black mr-2 -my-1" 
                          :style="`width: ${proyectos.lista_proyectos[i].pr}%; background-color: #42b983`"             
                          ></div>
                      </div>
                      <p>
                        {{proyectos.lista_proyectos[i].pr}}%
                      </p>
            </td>
        </tr> 
        </template>
        


      </table>
    </div>
  <div class="lg:col-span-1 col-span-3 p-2" >
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
  </section>
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
            viendo: 1,
            total_slides: 2 //cambiar segun el total de slides
        }
    },
    created(){
      setInterval(() => {
          this.next()
      }, 12000);
    },
    methods: {
      next(){
        this.viendo++;
        if(this.total_slides < this.viendo) this.viendo = 1
      },
      prev(){
        this.viendo--;
        if(this.viendo === 0) this.viendo = this.total_slides
      }
    }
}
</script>
