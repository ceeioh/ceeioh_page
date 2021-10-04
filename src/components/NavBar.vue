<template>
<nav class="bg-white lg:px-8 px-1 pt-2 shadow-md flex pb-3  min-w-full">
      <router-link to="/">
    <div class="flex justify-center items-center">
          <img src="@/assets/logo.png" width="50" alt="Logo CEEIOH">
          <h1 class="ml-2 font-bold text-2xl">CEEIOH</h1>
    </div></router-link>
    <div class="lg:flex lg:justify-center lg:items-center md:flex-grow hidden" id="r-activo">
            <div v-for="(e,i) in pages" :key="i" class="no-underline text-teal-dark uppercase tracking-wide font-bold text-base py-3 mr-8 " href="#">
                <router-link :to="`${e.link}`">{{e.name}}</router-link>
            </div>
    </div>
    <div class="lg:hidden">
        <button @click="menu()" class="z-20 fixed right-2 px-3 py-3 bg-green-500 md:hover:bg-green-200 transform duration-500 ease-in-out md:hover:scale-110 motion-reduce:transform-none text-white focus:outline-none" >
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path  :class="{'hidden' : !see}"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            <path  :class="{'hidden' : see}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
            <div class="flex">
                <slot>
                    
                </slot>
            </div>
</nav>
<ul :class="{'opacity-0':see,'r-click': see}" class="lg:hidden z-50 top-0 transition-opacity duration-700 ease-in-out h-full w-full | r-flex | bg-gray-800 text-center z-10 fixed sm:px-3 sm:py-2  md:px-8 md:py-4 overflow-y-auto" >
    <div class="m-auto">
        <li v-for="(e,i) in pages" :key="i" class="text-xl font-bold py-4" @click="link()">
            <router-link class="px-2 text-green-500 hover:text-gray-200" :to="`${e.link}`">{{e.name}}</router-link>
        </li>
    </div>
</ul>


</template>
<script>

export default {
    name: "NavBar",
    props: {
        pages: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            see: true
        }
    },
    methods: {
        menu(){
            this.see ? this.see = false : this.see = true
        },
        link(){
            if(this.see == false){
               this.see = true;
            }
        }
    }
}
</script>
<style>
    #r-activo a{
        border-bottom: 3px solid #afbdb7;
    }
    #r-activo a.router-link-exact-active{
        border-bottom: 3px solid #42b983;
    }
    .r-click {
        pointer-events: none;
    }
    .r-flex {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
</style>
