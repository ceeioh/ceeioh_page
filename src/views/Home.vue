<template>
<div class="w-screen">
  <section class="flex justify-center items-center h-3/5 r-color text-black	" id="carrusel">
      <div class="max-w-full transition duration-700 ease-in-out"
      :class="{'opacity-0' : viendo === 1 ? false : true,
              'opacity-100' : viendo === 1 ? true : false,
      }">
          <img src="@/assets/centroalumnos.jpg" alt="centro de alumnos actual del cee ioh maristas rancagua" class="object-cover">
      </div>
      <div class="absolute flex w-screen z-100 | md:pr-10 md:pl-10 | pr-2 pl-2">
        <button class="rounded-full bg-white flex items-center justify-center | md:text-3xl md:w-16 md:h-16 | text-xl w-8 h-8" @click="prev()">
          <h1>&#8592;</h1>
        </button>
        <div class="flex-grow">
        </div>
        <button class="rounded-full bg-white flex items-center justify-center | md:text-3xl md:w-16 md:h-16 | text-xl w-8 h-8 	" @click="next()">
          <h1 class="">&#8594;</h1>
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
            total_slides: 1 //cambiar segun el total de slides
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
<style>
.r-color {
    background-color:  #2c3e50;
}
</style>