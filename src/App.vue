<template>
  <NavBarVue></NavBarVue>
  <router-view />
  <Guardar></Guardar>

</template>

<script>
import NavBarVue from './modules/inscripcion/components/NavBar.vue'
import Guardar from './modules/inscripcion/components/Guardar.vue';

export default {
  name: 'App',
  components: {
    NavBarVue,
    Guardar

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
