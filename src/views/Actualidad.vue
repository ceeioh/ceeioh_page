<template>
    <div class="m-auto w-screen">
        <QuieroParticipar2022/>
        <GanadoresAlianzas/>
        <NuevaPagina/>
    </div>
</template>
<script>
import NuevaPagina from '@/components/articles/actualidad/NuevaPagina'
import GanadoresAlianzas from '@/components/articles/actualidad/GanadoresAlianzas'
import QuieroParticipar2022 from '@/components/articles/actualidad/QuieroParticipar2022'
export default {
    name: 'Actualidad',
    components: {
        NuevaPagina,
        GanadoresAlianzas,
        QuieroParticipar2022
    }
}
</script>