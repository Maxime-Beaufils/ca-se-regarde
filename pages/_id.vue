<template>
  <div class="wrap">
    <navTopReturn />
    <img :src="url+movie[$route.params.id].backdrop_path" class="image">
    <p class="title is-bold has-text-white has-text-centered is-size-5">{{movie[$route.params.id].title}}</p>
    <div class="has-text-centered">
      <a class="button is-info is-inverted" v-on:click='isActive = !isActive'>
        <span class="icon is-small">
          <i class="fas fa-plus-circle has-text-info is-size-5"></i>
        </span>
        <span><b>to my view list</b></span>
      </a>
    </div>
    <article class="message is-info">
      <div class="message-body">
        <p class="is-size-7"><b>Overview</b><br>{{movie[$route.params.id].overview}}</p>
      </div>
    </article>
    <article class="message is-info">
      <div class="message-body is-flex" style="justify-content: space-around; align-items: center">
        <i class="fas fa-info-circle has-text-info is-size-5"></i>
        <p class="is-size-7"><b>Genre</b><br>{{genre["genres"].find(o => o.id == movie[$route.params.id].genre_ids[0])["name"]}} - {{genre["genres"].find(o => o.id == movie[$route.params.id].genre_ids[1])["name"]}}</p>
        <p class="is-size-7"><b>Release</b><br>{{movie[$route.params.id].release_date}}</p>
        <p class="is-size-7"><b>Duration</b><br>2h01</p>
      </div>
    </article>
    <article class="message is-info">
      <div class="message-header">
        <p>Rate</p>
      </div>
      <div class="message-body is-flex" style="justify-content: space-around; align-items: baseline">
        <i class="fab fa-imdb"  style="color: #f5c518; font-size:8vw"></i>
        <span class="is-size-3">&nbsp;<b>{{movie[$route.params.id].vote_average}}</b> /10 </span>
        <p>with {{movie[$route.params.id].vote_count}} votes</p>
      </div>
    </article>
    <div v-bind:class="{'is-active': isActive}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content has-background-white">
        <i class="far fa-check-circle has-text-success is-size-3 validate"></i>
        <p class="is-bold has-text-grey-dark has-text-centered is-size-6">Successfully add <br/>to your view list ! </p>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click='isActive = !isActive'></button>
    </div>
  </div>
</template>
<script>

import navTopReturn from '@/components/navTopReturn'

export default {

  transition: {
    name: 'page',
    mode: 'out-in'
  },
  components: {
    navTopReturn
    },
    data() {
      return {
        isActive: false
      }
    },
  async asyncData({ $axios }) { 
    const movies = await $axios.$get('https://api.themoviedb.org/3/discover/movie?api_key=6826192083758777324271fcce50a01c&sort_by=popularity.desc&certification_country=FR&include_adult=false&include_video=false&page=1&release_date.gte=2010')
    const genres = await $axios.$get('https://api.themoviedb.org/3/genre/movie/list?api_key=6826192083758777324271fcce50a01c&language=en-US');
  return {
          movie : movies.results,
          genre : genres,
          url : "http://image.tmdb.org/t/p/w500/"}
  }
}
</script>

<style scoped>
.wrap{
  height: 100vh;
  background-color:  rgb(248, 248, 248);
}
.image{
  border-radius: 0 0 200px 200px / 0 0 10px 10px;
  box-shadow: 0px 3px 10px #4e4e4e9b;
}
.button {
  position: relative;
  top: -12vh;
}
.title {
  position: relative;
  top: -20vw;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.message {
  position: relative;
  top: -14vw;
  margin: auto;
  margin-bottom: 10px;
  padding: 0;
  width: 90vw;
  background-color:  rgb(255, 255, 255);
  box-shadow: 0px 5px 15px #4e4e4e1f;
  font-size: 3vw;
}
.modal-content {
  width: 65vw;
  height: 25vh;
  border-radius: 5%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: bounce 1.5s ease;
}
.validate {
  position: relative;
  top: -5vw;
  animation: reveale 2s ease;
}
.modal-content p{
  animation: fadeIn 1s ease 1s, fade 2s ease 2s infinite;
  opacity: 0;
}

@keyframes bounce {
        0%   { transform: scale(1,1)    translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1) translateY(-100px); }
        50%  { transform: scale(1,1)    translateY(0); }
        100% { transform: scale(1,1)    translateY(0); }
    }
@keyframes reveale {
        0%   { transform: scale(1,1)    translateY(-100px) ; }
        10%  { transform: scale(1.1,.9) translateY(-100px); }
        30%  { transform: scale(.9,1.1) translateY(-100px); }
        50%  { transform: scale(1,1)    translateY(0); }
        100% { transform: scale(1,1)    translateY(0); }
    }
@keyframes fadeIn {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }
@keyframes fade {
        0%   { opacity: 1; }
        100% { opacity: 1; }
    }
</style>
