<template>
  <div class="d-flex justify-content-center"> 
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <the-fab
  @on:click="createNewEntry"
  ></the-fab>
</template>

<script>
import { defineAsyncComponent } from 'vue';
  export default {
    components: {
      TheFab: defineAsyncComponent( () => import('../components/TheFab.vue') )
    },
    methods: {
      createNewEntry() {
        this.$router.push({ name: 'entry', params: { id: 'new' } })
      }
    }
  }
</script>

<style lang="scss" scoped>
div{
  height: 100%;
}

</style>