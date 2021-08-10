<template>
<div class="flex justify-center w-full login bg-cover">
    <section class="p-10 grid grid-cols-1" v-if="encuestas !== null">  
    <!--Card 1-->
        <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10 border bg-white" v-for="(e,i) in encuestas.data.polls.reverse()" :key="i">
            <img class="w-full" src="img/poll.png" alt="Mountain">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{e.nombre}}</div>
                <p class="text-gray-700 text-base">
                {{e.descripcion}}
                </p>
                <div class="text-left">
                    <a :href="e.link" target="_blank" class="text-left text-blue-500">Contestar</a>
                </div>
            </div>
            <div class="px-6 pb-3 flex">
                <span v-for="(x,y) in e.hashtags" :key="y" class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{x}}</span>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import {getAllPolls} from '@/functions/axios'
export default {
    name:"Encuestas",
    data(){
        return {
            encuestas: null
        }
    },
    async created() {
        this.encuestas = await getAllPolls()
    }
}
</script>
<style>
  .login{
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  width: 98.5vw;
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: repeat;
  background-size: cover;
}
</style>