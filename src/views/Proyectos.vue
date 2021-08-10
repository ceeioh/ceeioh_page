<template>
<div v-if="proyectos !== null">
        <select class="center w-1/3 border border-gray-300 mt-2" v-model="search">
            <option value="0">Todas las Areas</option>
            <template v-for="(e,i) in info.areas" :key="i">
            <option :value="i+1">{{e}}</option>
            </template>
        </select> 
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
         
            <template v-for="(e,i) in proyectos.data.proyects.reverse()" :key="i">
                <!-- left -->

                <template v-if="(Math.floor(Math.random() * (1 - 0 + 1) + 0))">
            
                    <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md w-4/5">
                        <h3 class="text-left">Numero: {{i+1}}</h3>
                        <h2 class="font-semibold text-lg mb-1">{{e.nombre}}</h2>
                        <p class="leading-tight text-justify">
                            {{e.descripcion}}
                        </p>
                        <p class="leading-tight text-right">
                            Area: {{e.area}}
                        </p>
            <div class="border rounded-lg border-gray-500 w-full bg-gray-200 mt-2">
              <div class=" rounded-l-md text-xs leading-none py-1 text-center text-black" 
              :style="`width: ${e.avance}%`"
              :class="{
                'rounded-lg': e.avance > 97 ? true : false,
                'bg-red-300':  e.avance > -1 ? true : false,
                'bg-yellow-400':  e.avance > 39 ? true : false,
                'bg-green-400':  e.avance > 59 ? true : false,

                }"
             
              >{{e.avance}}%</div>
            </div>
                        
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                        ></div>
                    </div>
                    </div>
                </template>
                <template v-else>
                    <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-pink-500 pointer-events-none"></div>
                        </div>
                        <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow"
                        ></div>
                    </div>
                    <div
                        class="bg-pink-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-4/5"
                    >
                        <h3 class="text-left">Numero: {{i+1}}</h3>
                        <h2 class="font-semibold text-lg mb-1">{{e.nombre}}</h2>
                        <p class="leading-tight text-justify">
                            {{e.descripcion}}.
                        </p>
                                                <p class="leading-tight text-right">
                            Area: {{e.area}}
                        </p>
             <div class="border rounded-lg border-gray-500 w-full bg-gray-200 mt-2">
              <div class=" rounded-l-md text-xs leading-none py-1 text-center text-black" 
              :style="`width: ${e.avance}%`"
              :class="{
                'rounded-lg': e.avance > 97 ? true : false,
                'bg-red-300':  e.avance > -1 ? true : false,
                'bg-yellow-400':  e.avance > 39 ? true : false,
                'bg-green-400':  e.avance > 59 ? true : false,
                }"
             
              >{{e.avance}}%</div>
            </div>

                    </div>
                    </div>
                </template>
            </template>
        </div>
</div>
</template>

<script>
import {getAllProjects} from '@/functions/axios'
import info from '@/functions/areas'

export default {
    data(){
        return {
            proyectos: null,
            info,
            search: 0,
        }
    },
    async created() {
            if(this.page === 0) return this.proyectos = await getAllProjects()
            this.proyectos = await getAllProjects({
                area: info.areas[this.page-1]
            })
    },
    computed: {
        page(){
            return this.$route.query.q
        }
    },
    watch: {
        async search(now) {
            console.log(info.areas[now-1])
            this.$router.push("proyectos?q="+now)
        },
        async page(now){
            if(!info.areas[now-1]) return this.proyectos = await getAllProjects()
            this.proyectos = await getAllProjects({
                area: info.areas[now-1]
            })
        }
    }
}
</script>