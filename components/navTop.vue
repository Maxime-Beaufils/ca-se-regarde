<template>
  <nav class="nav is-flex">
      <button class="button is-info is-size-7" @click="$router.go({path:'/', force: true})"><i class="fas fa-random"></i></button>
      <div class="cinema is-flex">
        <i class="fas fa-film"></i>
        <h2 class="has-text-white has-text-weight-bold is-family-code">Cinema Lux</h2>
      </div>
      <i style="visibility: hidden" class="fas fa-user-ninja has-text-right"></i>
    </nav>
</template>
<script>

import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'shuffleMovie', 
    ]),
  }
}
</script>

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
  }
  .cinema{
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    top: -25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
</style>
