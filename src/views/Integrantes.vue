<template>



<div class="grid xl:grid-cols-3 xl:grid-rows-7 | grid-cols-1 grid-rows-21 ">
 <div v-for="(e,i) in info.integrantes" class="card border w-11/12 lg:w-10/12 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5" :key="i">
    <img class="max-h-20 w-full opacity-80 absolute top-0" style="z-index:-1" :src="getImg()" />
    <div class="profile w-full flex my-3 text-white mb-6">
      <img class="w-28 h-28 p-1 bg-white rounded-full" :src="`/img/people/${e.foto}`" alt=""/>
      <div class="title mt-11 ml-3 px-2 font-bold text-left">
        <div class="name break-words">{{e.name}}</div>
        
        <div class="text text-green-500">{{e.puesto}}</div>
      </div>
    </div>
    <div class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
      <a :href="`https://www.instagram.com/${e.contacto}/`" target="_blank"><div class="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">@{{e.contacto}}</div></a>
      
    </div>
  </div>
</div>
</template>
<script>

const img = {
    0 : "img/banner/1.jpg",
    1 : "img/banner/2.jpg",
    2 : "img/banner/3.jpg",
    3 : "img/banner/4.jpg",
    4 : "img/banner/5.jpg",
    5 : "img/banner/6.jpg"
}

import info from '@/functions/areas'

export default {
name: "integrantes", 
  data(){
    return {
      info
    }
  },
  methods: {
      getImg(){
          let r = Math.floor(Math.random() * 5);

          return img[r];
      }
  }
}
</script>