<template>
  <div class="home">
    
    <h1>Inicio</h1>

    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">success</button>

  </div>
</template>
<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>