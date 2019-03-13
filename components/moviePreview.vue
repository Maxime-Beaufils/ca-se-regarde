<template>
  <div id="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div v-for="i in numberMoviePreview" :key="i">
          <div :class="'countainer page-'+(i+1)+' page'">
            <nuxt-link :to="'/'+i">
              <div class="columns" :style="'top:'+(75+i*100)+'vh'">
                <div class="column thumbnail">
                  <figure class="image">
                    <img :src="url+movie[i].poster_path">
                  </figure>
                </div>
                <div class="column description">
                  <p style="font-weight: bold; color: #4a4a4a; font-size: 3vw; margin-bottom: 5px">{{movie[i].title}}</p>
                  <p><b>Rate: </b>{{movie[i].vote_average}} /10 <i class="fab fa-imdb"  style="color: #f5c518; font-size:3vw"></i></p>
                  <p v-if="movie[i].genre_ids[1]"><b>Genre: </b>{{genre["genres"].find(o => o.id == movie[i].genre_ids[0])["name"]}}, {{genre["genres"].find(o => o.id == movie[i].genre_ids[1])["name"]}}</p>
                  <p v-else><b>Genre: </b>{{genre["genres"].find(o => o.id == movie[i].genre_ids[0])["name"]}}</p>
                  <p><b>Release: </b>{{movie[i].release_date}}</p>
                </div>
              </div>
            </nuxt-link>
            <img :src="url+movie[i].poster_path">
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  components: {
    },
    props: {
      movie: {
        type: Array,
        default: false
      },
      genre: {
        type: Object,
        default: false
      }
    },
    data(){
      return{ 
        url : this.$store.state.url,
            numberMoviePreview: [0,1,2,3,4,5,6,7,8],
            opts: {
              start: 0,
              dir: 'v',
              loop: true,
              movingFlag: true,
              duration: 50,
              beforeChange: function (prev, next) {
                },
              afterChange: function (prev, next) {
                }
            }
          }
    },
}

</script>


<style scoped>
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
    left: 12.5vw;
    width: 80vw;
    height: 16vh;
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
    font-size: 2.5vw;
  }
  .column figure img{
    box-shadow: 5px 5px 10px rgba(10, 10, 10, 0.4);
    position: relative;
    left: 20px;
    top: -40px;
    height: 22vh;
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
  @keyframes panX {
    0%{
      opacity: 0;
      transform: translateX(-400px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>