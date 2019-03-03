<template>
  <div class="countainer">
    <p>{{movie[$route.params.id].title}}</p>
    <img :src="url+movie[$route.params.id].backdrop_path">
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