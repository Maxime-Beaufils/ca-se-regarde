<template>
  <div id="wrap">
    <nav class="nav is-flex">
      <i class="fas fa-bars"></i>
      <div class="cinema is-flex">
        <i class="fas fa-film"></i>
        <h2 class="has-text-white has-text-weight-bold is-family-code">Cinema Lux</h2>
      </div>
      <i class="fas fa-user-ninja has-text-right"></i>
    </nav>
    <div id="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="countainer page-1 page">
          <nuxt-link to="/0">
          <div class="columns">
            <div class="column thumbnail">
              <figure class="image">
                <img :src="url+movie[0].poster_path">
              </figure>
            </div>
            <div class="column description">
              <p style="font-weight: bold; color: #4a4a4a; font-size: 3vw; margin-bottom: 5px">{{movie[0].title}}</p>
              <p>Rate: {{movie[0].vote_average}}<i class="fas fa-star" style="color: #FFFF66"></i></p>
              <p>Genre: {{genre["genres"].find(o => o.id == movie[0].genre_ids[0])["name"]}}, {{genre["genres"].find(o => o.id == movie[0].genre_ids[1])["name"]}}</p>
              <p>Release: {{movie[0].release_date}}</p>
            </div>
          </div>
          </nuxt-link>
          <img :src="url+movie[0].poster_path">
        </div>
        <div class="countainer page-2 page">
          <div class="columns" style="top: 175vh">
            <div class="column thumbnail">
              <figure class="image">
                <img :src="url+movie[1].poster_path">
              </figure>
            </div>
            <div class="column description">
              <p style="font-weight: bold; font-size: 3vw; margin-bottom: 5px">{{movie[1].title}}</p>
              <p>Rate: <i class="fas fa-star" style="color: #FFFF66"></i> {{movie[1].vote_average}}</p>
              <p>Genre: {{genre["genres"].find(o => o.id == movie[1].genre_ids[0])["name"]}}, {{genre["genres"].find(o => o.id == movie[1].genre_ids[1])["name"]}}</p>
              <p>Release: {{movie[1].release_date}}</p>
            </div>
          </div>
          <img :src="url+movie[1].poster_path" >
        </div>
        <div class="countainer page-3 page">  
          <div class="columns" style="top: 278vh">
            <div class="column thumbnail">
              <figure class="image">
                <img :src="url+movie[2].poster_path">
              </figure>
            </div>
            <div class="column description">
              <p style="font-weight: bold; font-size: 3vw; margin-bottom: 5px">{{movie[2].title}}</p>
              <p>Rate: <i class="fas fa-star" style="color: #FFFF66"></i> {{movie[2].vote_average}}</p>
              <p>Genre: {{genre["genres"].find(o => o.id == movie[2].genre_ids[0])["name"]}}, {{genre["genres"].find(o => o.id == movie[2].genre_ids[1])["name"]}}</p>
              <p>Release: {{movie[2].release_date}}</p>
            </div>
          </div>
          <img :src="url+movie[2].poster_path" >
        </div>
        <div class="countainer page-4 page">  
          <div class="columns" style="top: 375vh">
            <div class="column thumbnail">
              <figure class="image">
                <img :src="url+movie[3].poster_path">
              </figure>
            </div>
            <div class="column description">
              <p style="font-weight: bold; font-size: 3vw; margin-bottom: 5px">{{movie[3].title}}</p>
              <p>Rate: <i class="fas fa-star" style="color: #FFFF66"></i> {{movie[3].vote_average}}</p>
              <p>Genre: {{genre["genres"].find(o => o.id == movie[3].genre_ids[0])["name"]}}, {{genre["genres"].find(o => o.id == movie[3].genre_ids[1])["name"]}}</p>
              <p>Release: {{movie[3].release_date}}</p>
            </div>
          </div>
          <img :src="url+movie[3].poster_path" >
        </div>
        <div class="countainer page-5 page">  
          <div class="columns" style="top: 475vh">
            <div class="column thumbnail">
              <figure class="image">
                <img :src="url+movie[4].poster_path">
              </figure>
            </div>
            <div class="column description">
              <p style="font-weight: bold; font-size: 3vw; margin-bottom: 5px">{{movie[4].title}}</p>
              <p>Rate: <i class="fas fa-star" style="color: #FFFF66"></i> {{movie[4].vote_average}}, {{genre["genres"].find(o => o.id == movie[4].genre_ids[1])["name"]}}</p>
              <p>Genre: {{genre["genres"].find(o => o.id == movie[4].genre_ids[0])["name"]}}</p>
              <p>Release: {{movie[4].release_date}}</p>
            </div>
          </div>
          <img :src="url+movie[4].poster_path" >
        </div>
        <div class="countainer page-6 page">  
          <div class="columns" style="top: 575vh">
            <div class="column thumbnail">
              <figure class="image">
                <img :src="url+movie[5].poster_path">
              </figure>
            </div>
            <div class="column description">
              <p style="font-weight: bold; font-size: 3vw; margin-bottom: 5px">{{movie[5].title}}</p>
              <p>Rate: <i class="fas fa-star" style="color: #FFFF66"></i> {{movie[5].vote_average}}</p>
              <p>Genre: {{genre["genres"].find(o => o.id == movie[5].genre_ids[0])["name"]}}, {{genre["genres"].find(o => o.id == movie[5].genre_ids[1])["name"]}}</p>
              <p>Release: {{movie[5].release_date}}</p>
            </div>
          </div>
          <img :src="url+movie[5].poster_path" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  components: {
    },
  async asyncData({ $axios }) {
    const movies = await $axios.$get('https://api.themoviedb.org/3/discover/movie?api_key=6826192083758777324271fcce50a01c&sort_by=popularity.desc&certification_country=FR&include_adult=false&include_video=false&page=1&release_date.gte=2005&vote_average.gte=4');
    const genres = await $axios.$get('https://api.themoviedb.org/3/genre/movie/list?api_key=6826192083758777324271fcce50a01c&language=en-US');
    return {movie : movies.results,
            genre : genres,
          url : "http://image.tmdb.org/t/p/w500/"}
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        loop: true,
        movingFlag: true,
        duration: 300,
        beforeChange: function (prev, next) {
          },
        afterChange: function (prev, next) {
          }
      }
    }
  },
}

</script>


<style>
  .fullpage-wp{
    height: 100vh;
  }
  .countainer{
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
  .countainer img{
    width: auto;
    height: 100%;
  }
  .columns {
    background-color: white;
    border-radius: 2px 2px 15px 2px;
    display: flex;
    flex-direction: row;
    z-index: 22;
    position: fixed;
    top: 75vh;
    left: 12.5vw;
    width: 80vw;
    height: 18.5vh;
    animation: panXYZ 0.3s ease;
  }
  .column {
    flex-basis: 1;
  }
  .description {
    margin-left: -30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .description p{
    font-size: 3vw;
  }
  .column figure img{
    box-shadow: 5px 5px 10px rgba(10, 10, 10, 0.4);
    position: relative;
    left: 20px;
    top: -40px;
    height: 22vh;
    animation: panY 0.4s ease;
  }
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

  @keyframes panXYZ {
    0%{
      opacity: 0.5;
      transform: translate3d(600px, 0px, -400px);
    }
    100% {
      opacity: 1;
      transform: translate3d(0);
    }
  }
  @keyframes panY {
    0%{
      opacity: 0;
      transform: translateY(-200px);
      transform: translateX(-1200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      transform: translateX(0);
    }
  }
</style>
