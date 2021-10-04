<template>
    <section id="proyectos" class="w-screen">
        <div class="my-5">
            <label for="area">Escoge una area: </label>
            <select id="area" name="area" v-model="busqueda" class="rounded border-2 border-gray-300">
                <option :value="false">Todas las area</option>
                <option :value="e" v-for="e in proyectos.areas" :key="e">{{e}}</option>
            </select>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 | px-4">

            <article v-for="(i,e) in proyectos.lista_proyectos" :key="e"
            class="mt-3 rounded overflow-hidden shadow-lg mt-10 border bg-white"
            :class="{
                'hidden': search(busqueda,proyectos.areas[i.ar]),
            }"
            >
                <div>
                    <h3 class="pt-2 pl-5 text-left font-semibold	">
                        <p class="text-left">{{i.n}}</p>
                        <p class="text-rigth">{{proyectos.areas[i.ar]}}</p>
                    </h3>
                    <p  class="p-2 pl-5 pr-5 text-justify pb-0">{{i.d}}</p>
                </div>
                <div class="px-5 pb-3 pt-1 flex h-0">
                    <div class=" rounded-md text-xs border-2 border-gray-200 bg-gray-100 leading-none py-1 text-center text-black mr-2" :style="`width: 100%;`">
                    <div class=" rounded-md text-xs leading-none py-1 text-center text-black mr-2 -my-1" 
                        :style="`width: ${i.pr}%; background-color: #42b983`"             
                        ></div>
                    </div>
                    <div class="-my-1 -mx-1 font-medium">
                        {{i.pr}}%
                    </div>
                </div>
                <div class="text-left text-blue-500 px-5 pb-2 pt-1">
                    <button @click="more_info(e)">Ver más</button>
                </div>
                <div class="bg-gray-100 opacity-0 h-1 | transition-height duration-500 overflow-auto"  :id="'more-'+e">
                    <div class="bg-gray-400 h-1 mb-2"></div>
                    <div class="text-justify px-5 bg-scroll	">
                    <p>Objetivo: {{i.o}}</p>
                    <p class="pb-2">Lugar: {{i.lu}}</p>
                    </div>
                </div>
            </article>

        </div>
    </section>

</template>

<script>
import proyectos from '@/functions/proyectos'
const d = document
export default {
    data(){
        return {
            proyectos: proyectos,
            busqueda: null
        }
    },
    methods: {
        more_info(index){
            const div = d.getElementById("more-"+index)
            div.classList.toggle("h-32")
            div.classList.toggle("opacity-0")
        },
        search(busqueda, buscado){

            if(busqueda === buscado || !busqueda) {
                return false
            }
            return true

        }
    },
    computed: {
        page(){
            return this.$route.query.q
        }
    },
}
</script>