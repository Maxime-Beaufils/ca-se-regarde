import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      movies: [],
      genres: {},
      url: "http://image.tmdb.org/t/p/w500/",
    },
    mutations: {
      setMovies(state, movieData) {
        state.movies = movieData.results
      },
      setGenres(state, genreData) {
        state.genres = genreData
      },
    },
    actions: {
      async nuxtServerInit ({ commit }, { $axios }) {
        const movieData = await $axios.$get('https://api.themoviedb.org/3/discover/movie?api_key=6826192083758777324271fcce50a01c&sort_by=popularity.desc&certification_country=FR&include_adult=false&include_video=false&page=1&release_date.gte=2010');
        const genreData = await $axios.$get('https://api.themoviedb.org/3/genre/movie/list?api_key=6826192083758777324271fcce50a01c&language=en-US');
        commit('setMovies', movieData)
        commit('setGenres', genreData)
      }
    },
    getters: {
      movies(state){
        return state.movies
      },
      genres(state){
        return state.genres
      },
    }
  })
}

export default createStore