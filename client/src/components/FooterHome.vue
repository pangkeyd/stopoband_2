<template>
  <div>
    <!-- FOOTER -->
  <footer class="footer2 wow fadeInUp" data-wow-duration=".7s">
    <div class="container">
      <div class="clearfix"></div>
      <div class="row copyright">
        <div class="col-md-12 text-center">
          <p>&copy; experimental vuejs | dpangkey, chandra, adit</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- LOAD MAIN SONG -->
    <div class="audio-player sound1">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound1" src="https://storage.googleapis.com/bucket-stopoband/aerosmith - crazy.mp3" type="audio/mp3" controls="controls"></audio>
    </div>
    
    <!-- <div class="audio-player sound2">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound2" src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3" type="audio/mp3" controls="controls"></audio>
    </div>
    
    <div class="audio-player sound3">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound3" src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3" type="audio/mp3" controls="controls"></audio>
    </div>
    
    <div class="audio-player sound4">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound4" src="https://storage.googleapis.com/bucket-stopoband/aerosmith - crazy.mp3" type="audio/mp3" controls="controls"></audio>
    </div> -->
  <!-- LOAD MAIN SONG -->
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
import axios from 'axios'
export default {
  computed:{
    ...mapState([
      "detail"
    ])
  },
  mounted: function() {
    console.log(this.detail)
  }
}
</script>

<style>

</style>
