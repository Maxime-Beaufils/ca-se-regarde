import Vuex from 'vuex'


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
      shuffleMovie(state) {
        state.movies = state.movies.sort( () => Math.random() - 0.5)
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { $axios }) {
        const movieData = await $axios.$get('https://api.themoviedb.org/3/discover/movie?api_key=6826192083758777324271fcce50a01c&?sort_by=popularity.desc&page='+Math.floor(Math.random() * 10) + 1  );
        const genreData = await $axios.$get('https://api.themoviedb.org/3/genre/movie/list?api_key=6826192083758777324271fcce50a01c&language=en-US');
        commit('setMovies', movieData)
        commit('setGenres', genreData)
      },
      shuffleMovie({commit}){
        commit('shuffleMovie')
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