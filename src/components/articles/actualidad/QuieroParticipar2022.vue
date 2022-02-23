<template>
    <article id="nueva_pagina" class="py-5">
<!-- component -->
<!-- This is an example component -->
            <div class="container mx-auto my-5">
                <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
                    
                    <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                        <div class="absolute inset-0 w-full h-full object-fill object-center bg-cover bg-bottom">
                                  
                        <img class="object-cover w-full h-full"
                        src="@/assets/centroalumnos.jpg"
                        >
                        </div>
                        <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                            <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Quiero Participar</h3>
                            <h4 class="w-full text-xl text-gray-100 leading-tight">CEE 2022</h4>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>

                    <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                        <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                            <h4 class="hidden md:block text-xl text-gray-400">CEE 2022</h4>
                            <h3 class="hidden md:block font-bold text-2xl text-gray-700">Quiero Participar</h3>
                            <p class="text-gray-600 text-justify">
                                Aquí adjuntamos el archivo para que las próximas listas que quieren ser parte de la carrera del CEE 2022, puedan encontrar que estudiantes de nuestra comunidad les gustaría ser parte de su gran equipo.
                            </p>
                            <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" 
                            :href="'https://docs.google.com/spreadsheets/d/1N4XAapBophIu2ZCAVLx_WrWCf3_Nm0uG/edit?usp=sharing&ouid=115297937751802069552&rtpof=true&sd=true'" target="_blank">
                                <span>Ver el archivo</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
    </article>
</template>
<script>
export default {
    name: 'QuieroParticipar2022',
}
</script>
<style>
 .r-img {
     
     background-image: url("/img/banner/0.jpg");
     background-blend-mode: multiply;

 }
</style>