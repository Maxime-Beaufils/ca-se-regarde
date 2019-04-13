<template>
  <nav class="nav is-flex">
      <!-- <nuxt-link to="/"> -->
        <i class="fas fa-arrow-circle-left" @click="$router.back()"></i>
      <!-- </nuxt-link> -->
    </nav>
</template>

<style scoped>
  .nav{
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    width: 100%;
    padding: 20px;
  }
  .nav i{
    color: white;
    font-size: 1.5em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
</style>
