<template>
<!-- component -->
<!-- component -->
<!-- This is an example component -->
<div class="h-screen w-screen font-sans login bg-cover">
<div class="h-full flex justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <div class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
              <div class="">
                <label class="block text-sm text-white" for="email">Usuario</label>
                <input v-model="username" class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="text" placeholder="Usuario" aria-label="email" required>
              </div>
              <div class="mt-2">
                <label class="block  text-sm text-white">Clave Maestra</label>
                 <input v-model="password" class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Clave Maestra" arial-label="password" required>
              </div>

              <div class="mt-4 items-center flex justify-between">
                <button @click="auth" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">Entrar</button>
              </div>
        </div>

      </div>
    </div>
  </div>
</div>

</template>
<script>
import {login} from '@/functions/axios'
export default {
    data(){
        return {
            username: undefined,
            password: undefined,
        }
    },
    methods: {
        async auth() {
            function sleep(ms) {
                return new Promise((resolve) => {
                setTimeout(resolve, ms);
                });
            }   

            let res = await login(this.username, this.password)
            if(res.status !== 200) return
            
            await localStorage.setItem('cee_isAuthenticated',res.data.token)

            await sleep(1000)

            this.$router.push({ path: '/root' })     
        }
    }
}
</script>
<style>
  .login{
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>