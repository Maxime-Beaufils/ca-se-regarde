<template>
  <div>
    <nav class="nav is-flex">
      <i class="fas fa-bars"></i>
      <div class="cinema">
        <i class="fas fa-film"></i>
        <h2 class="has-text-white has-text-weight-bold has-text-centered">Cinema Lux</h2>
      </div>
      <i class="fas fa-user-ninja has-text-right"></i>
    </nav>
    <section class="countainer">
      <img :src="url+movie[0].poster_path">
    </section>
  </div>
</template>

<script>
export default {
  components: {
    },
  async asyncData({ $axios }) {
    const movies = await $axios.$get('https://api.themoviedb.org/3/discover/movie?api_key=6826192083758777324271fcce50a01c&sort_by=popularity.desc&certification_country=FR&include_adult=false&include_video=false&page=1&release_date.gte=2005&vote_average.gte=4')
  return {movie : movies.results,
          url : "http://image.tmdb.org/t/p/w500/"}
  }
}
</script>


<style>
  .countainer{
    height: 100vh;
    padding: 0px;
    margin: 0px;
  }
  .nav{
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }
  .nav i{
    margin: 20px;
    color: white;
    font-size: 1.5em;
  }
  .cinema{
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    top: -25px;
  }
  .countainer img{
    width: auto;
    height: 100vh;
  }
</style>
