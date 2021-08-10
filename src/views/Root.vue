<template>
<!-- component -->
<div class="pt-4">
	<ul class='flex cursor-pointer'>
      <li class='py-2 px-6 bg-white rounded-t-lg text-gray-500' :class="(page !== 'encuestas' && page !== 'actualidad') ? 'bg-yellow-200' : 'bg-gray-200'" @click="changeQuery('proyectos')">Proyectos</li>
      <li class='py-2 px-6 bg-white rounded-t-lg text-gray-500 mx-1' :class="(page === 'encuestas') ? 'bg-blue-200' : 'bg-gray-200'" @click="changeQuery('encuestas') ">Encuestas</li>
      <li class='py-2 px-6 bg-white rounded-t-lg text-gray-500' :class="(page === 'actualidad') ? 'bg-red-200' : 'bg-gray-200'" @click="changeQuery('actualidad')">Actualidad</li>
	</ul>
</div>
<div class='w-screen'>
<!--encuestas -->
    <section v-if="page === 'encuestas'">
        <ul v-if="encuestas !== null">
            <li v-for="(e,i) in encuestas.data.polls" :key="i" class='py-2 flex flex-col items-center bg-white rounded-t-lg bg-gray-50'>
                <textarea class='w-11/12 px-5 block' rows="15" :class="`r-tx`" :value="JSON.stringify(e)" :id="'poll-'+i" ></textarea>
                <div>   
                    <button
                    type="button" @click="submitPoll(i)"
                    class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    >Actualizar</button>
                    <button v-if="encuestas.data.polls.length > 1"
                    type="button" @click="deletePoll(i)"
                    class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    >Borrar</button>
                    <button
                    type="button" @click="createPoll"
                    class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                    >Crear</button>
                </div>
            </li>
        </ul>
    </section>
    <!--encuestas -->
    <section v-else-if="actualidad !== null && page === 'actualidad'">
        jkk
    </section>
<!--proyectos -->
    <section v-else>
        <ul v-if="proyectos !== null ">
            <li v-for="(e,i) in proyectos.data.proyects" :key="i" class='py-2 flex flex-col items-center bg-white rounded-t-lg bg-gray-50'>
                <textarea class='w-11/12 px-5 block' rows="15" :class="`r-tx`" :value="JSON.stringify(e)" :id="i" ></textarea>
                <div>   
                    <button
                    type="button" @click="submitProyectos(i)"
                    class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    >Actualizar</button>
                    <button v-if="proyectos.data.proyects.length > 1"
                    type="button" @click="deletePro(i)"
                    class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    >Borrar</button>
                    <button
                    type="button" @click="postPro"
                    class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                    >Crear</button>
                </div>
            </li>
        </ul>
    </section>
</div>
</template>
<script>
import {getAllProjects,putProjects,putPolls,deleteProjects,postProjects,getAllPolls,postPolls,deletePolls} from '@/functions/axios'
export default {
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
    computed: {
        page(){
            return this.$route.query.q
        }
    },
    watch: {
        async page(now){
            if(now === 'encuestas') this.encuestas = await getAllPolls()
            if(now === 'actualidad') this.actualidad = true
            this.proyectos = await getAllProjects()
        }
    },
    methods: {
            changeQuery(now){
                this.$router.push("root?q="+now)
            },
            async submitProyectos(index){
                const d = document
                const token = localStorage.getItem('cee_isAuthenticated')
                const search = this.proyectos.data.proyects[index]
                const update = d.getElementById(index)
                
                let res = await putProjects(search,JSON.parse(update.value),token)

                if(res.data.message === "The token is not validated."){
                    localStorage.removeItem('cee_isAuthenticated')
                    this.$router.push("login")
                }

            },
            async deletePro(index){
                const token = localStorage.getItem('cee_isAuthenticated')
                const search = this.proyectos.data.proyects[index]
                
                let res = await deleteProjects(search,token)

                if(res.message === "The token is not validated."){
                localStorage.removeItem('cee_isAuthenticated')
                this.$router.push("login")
                }

                this.proyectos = await getAllProjects()
            },
            async postPro(){
                const token = localStorage.getItem('cee_isAuthenticated')

                let res = await postProjects(token) 
                if(res.data.message === "The token is not validated."){
                localStorage.removeItem('cee_isAuthenticated')
                this.$router.push("login")
                }
                console.log(res.data)
                this.proyectos = await getAllProjects()


            },
            async submitPoll(index){
                const d = document
                const token = localStorage.getItem('cee_isAuthenticated')
                const search = this.encuestas.data.polls[index]
                const update = d.getElementById('poll-'+index)
                
                let res = await putPolls(search,JSON.parse(update.value),token)
                console.log(res.data)
                if(res.data.message === "The token is not validated."){
                    localStorage.removeItem('cee_isAuthenticated')
                    this.$router.push("login")
                }
            },
            async createPoll(){
                const token = localStorage.getItem('cee_isAuthenticated')

                let res = await postPolls(token) 
                console.log(res.data)
                if(res.data.message === "The token is not validated."){
                localStorage.removeItem('cee_isAuthenticated')
                this.$router.push("login")
                }
                this.encuestas = await getAllPolls()


            },
            async deletePoll(index){
                const token = localStorage.getItem('cee_isAuthenticated')
                const search = this.encuestas.data.polls[index]
                
                let res = await deletePolls(search,token)

                if(res.message === "The token is not validated."){
                localStorage.removeItem('cee_isAuthenticated')
                this.$router.push("login")
                }

                this.encuestas = await getAllPolls()            
                },
        },
    }

</script>