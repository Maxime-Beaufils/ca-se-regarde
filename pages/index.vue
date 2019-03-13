<template>
  <div id="wrap">
    <navTop />
    <moviePreview/>
  </div>
</template>

<script>
import moviePreview from "@/components/moviePreview"
import navTop from "@/components/navTop"
import mapActions from 'vuex'
export default {
  created () {
      if (process.browser) { 
          window.addEventListener('transitionend', function() {
            let animColumns = document.getElementsByClassName("columns");
            let animThumbnail = document.getElementsByClassName("image");
            for (var x = 0; x < animColumns.length; x++) {
              animColumns[x].style.animation = "";
              animThumbnail[x].style.animation = "";
              animColumns[x].style.animation = "panXYZ2 0.3s ease";
              animThumbnail[x].style.animation = "panX2 0.5s ease";
            }
            setTimeout(function(){
            for (var x = 0; x < animColumns.length; x++) {
              animColumns[x].style.animation = "";
              animThumbnail[x].style.animation = "";
            }}, 500);
      }), false}
  },
  transition: {
    name: 'pageDown',
    mode: 'out-in'
  },
  components: {
    moviePreview,
    navTop
  },
  
}
</script>

<style>

  @keyframes panXYZ2 {
    0%{
      transform: translate3d(0);
    }
    50%{
      transform: translate3d(25px, 0px, 0px);
    }
    100% {
      transform: translate3d(0);
    }
  }
  @keyframes panX2 {
    0%{
      transform: translateX(0px);
    }
    50%{
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>

