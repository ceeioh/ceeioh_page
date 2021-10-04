<template>
    <article id="ganadores" class="py-5">
<!-- component -->
<!-- This is an example component -->
            <div class="container mx-auto my-5">
                <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
                    
                    <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                         <iframe class="absolute inset-0 w-full h-full object-fill object-center bg-cover bg-bottom" width="560" height="315" src="https://www.youtube.com/embed/LpYGPSV1nQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                        <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                            <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Ganadores de las Alianzas</h3>
                            <h4 class="w-full text-xl text-gray-100 leading-tight">Información</h4>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>

                    <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                        <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                            <h4 class="hidden md:block text-xl text-gray-400">Información</h4>
                            <h3 class="hidden md:block font-bold text-2xl text-gray-700">Ganadores de las Alianzas</h3>
                            <p class="text-gray-600 text-justify">
                                Hace algunos dias las alianzas del 2021, finalizaron dando como ganar a Los 2000's, felicitaciones a ellos y tambien a los 80's por su empeño, el puntaje fue de 244.970 para los 2000's y de 196.680 para los 80's
                            </p>
                            <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="https://www.instagram.com/tv/CUaQjA5gD4c/?hl=es-la" target="_blank">
                                <span>Conocer más sobre las alianzas 2021</span>
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
    name: 'GanadoresAlianzas',
}
</script>
