<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10}})"
  >
    <!-- titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5"> Octubre </span>
      <span class="mx-2 fw-light"> 2023, Viernes</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas esse eaque atque aspernatur? Fugit labore tenetur ab ad magnam, tempore temporibus nostrum incidunt aliquid similique sint quia vero blanditiis provident beatae velit qui repudiandae enim assumenda odio! Deserunt, minus distinctio. Impedit recusandae inventore nulla. Magnam, accusantium? Optio, ex.
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: rgb(114, 114, 114), $amount: 45);
    transition: 0.2 all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}

</style>