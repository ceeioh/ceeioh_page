<template>
    <div class="m-auto w-screen">
        <GanadoresAlianzas/>
        <NuevaPagina/>
    </div>
</template>
<script>
import NuevaPagina from '@/components/articles/actualidad/NuevaPagina'
import GanadoresAlianzas from '@/components/articles/actualidad/GanadoresAlianzas'

export default {
    name: 'Actualidad',
    components: {
        NuevaPagina,
        GanadoresAlianzas
    }
}
</script>