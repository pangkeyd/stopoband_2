<template>
  <!-- START MAIN SONG LIST -->
  <div class="album-content home-band-album wow fadeInUp" data-wow-duration=".7s">
    <div class="container">
      <div class="gallery-main gallery-main-2col">
        <div class="gallery-item-main featured">
          <div class="gallery-item2">
            <div class="col-md-6 no-padding">
              <a href="#"><img src="../assets/audio/thumb-list/coldplay-01.png" class="img-responsive" alt=""></a>
            </div>
            <div class="col-md-6">
              <span>2015</span>
              <h4>Something Just Like This</h4>
              <p>In 2008 I co-founded a blogging platform called MicControl, which was a community.</p>
              <a style="margin-right: 10px;" href="#" class="bttn"><i class="fa fa-facebook" aria-hidden="true"></i>    Share</a>
              <a href="#" class="bttn"><i class="fa fa-download" aria-hidden="true"></i></a>
              <a @click.prevent="playSound2" class="sound2-btn bttn-play"></a>
            </div>
          </div>
        </div>
        <div class="gallery-item-main new">
          <div class="gallery-item2">
            <div class="col-md-6 no-padding">
              <a href="#"><img src="../assets/audio/thumb-list/coldplay-01.png" class="img-responsive" alt=""></a>
            </div>
            <div class="col-md-6">
              <span>2015</span>
              <h4>Something Just Like This</h4>
              <p>In 2008 I co-founded a blogging platform called MicControl, which was a community.</p>
              <a style="margin-right: 10px;" href="#" class="bttn"><i class="fa fa-facebook" aria-hidden="true"></i>    Share</a>
              <a href="#" class="bttn"><i class="fa fa-download" aria-hidden="true"></i></a>
              <a @click.prevent="playSound2" class="sound2-btn bttn-play"></a>
            </div>
          </div>
        </div>
        <div class="gallery-item-main featured">
          <div class="gallery-item2">
            <div class="col-md-6 no-padding">
              <a href="#"><img src="../assets/audio/thumb-list/coldplay-01.png" class="img-responsive" alt=""></a>
            </div>
            <div class="col-md-6">
              <span>2015</span>
              <h4>Something Just Like This</h4>
              <p>In 2008 I co-founded a blogging platform called MicControl, which was a community.</p>
              <a style="margin-right: 10px;" href="#" class="bttn"><i class="fa fa-facebook" aria-hidden="true"></i>    Share</a>
              <a href="#" class="bttn"><i class="fa fa-download" aria-hidden="true"></i></a>
              <a @click.prevent="playSound2" class="sound2-btn bttn-play"></a>
            </div>
          </div>
        </div>
        <div class="gallery-item-main popular">
          <div class="gallery-item2">
            <div class="col-md-6 no-padding">
              <a href="#"><img src="../assets/audio/thumb-list/coldplay-01.png" class="img-responsive" alt=""></a>
            </div>
            <div class="col-md-6">
              <span>2015</span>
              <h4>$omething Just Like This</h4>
              <p>In 2008 I co-founded a blogging platform called MicControl, which was a community.</p>
              <a style="margin-right: 10px;" href="#" class="bttn"><i class="fa fa-facebook" aria-hidden="true"></i>    Share</a>
              <a href="#" class="bttn"><i class="fa fa-download" aria-hidden="true"></i></a>
              <a @click.prevent="playSound2()" class="sound2-btn bttn-play"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="space60"></div>
      <a href="#" class="bttn btn-gray btn-center">See All Albums</a>
    </div>

    <!-- LOAD MAIN SONG -->
    <!-- <div class="audio-player sound1">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound1" src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3" type="audio/mp3" controls="controls"></audio>
    </div>
    
    <div class="audio-player sound2">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound2" src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3" type="audio/mp3" controls="controls"></audio>
    </div>
    
    <div class="audio-player sound3">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound3" src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3" type="audio/mp3" controls="controls"></audio>
    </div>
    
    <div class="audio-player sound4">
      <div class="audio-close">X</div>
      <audio class="audioplayer" id="sound4" src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3" type="audio/mp3" controls="controls"></audio>
    </div> -->
  <!-- LOAD MAIN SONG -->
  </div>
  <!-- END MAIN SONG LIST -->
  
</template>

<script>
export default {
  methods: {
    playSound2: function() {
      console.log('masuk')

      $(".sound1-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound1").addClass("active");
      });

      $(".sound2-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound2").addClass("active");
      });

      $(".sound3-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound3").addClass("active");
      });

      $(".sound4-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound4").addClass("active");
      });

      $(".sound5-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound5").addClass("active");
      });

      $(".sound6-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound6").addClass("active");
      });

      $(".sound7-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound7").addClass("active");
      });

      $(".sound8-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound8").addClass("active");
      });

      $(".sound9-btn").on('click', function() {
          $(".audio-player").removeClass("active");
          $(".sound9").addClass("active");
      });

      $(function() {
        $('.audioplayer').mediaelementplayer({
            alwaysShowControls: true,
            features: ['playpause', 'progress', 'volume'],
            audioVolume: 'horizontal',
            audioWidth: 450,
            audioHeight: 70,
            iPadUseNativeControls: true,
            iPhoneUseNativeControls: true,
            AndroidUseNativeControls: true
        });
      });

      $(".audio-close").on('click', function() {
          $(".audio-player").removeClass("active");
          audio1.pause();
          audio2.pause();
          audio3.pause();
          audio4.pause();
          audio5.pause();
          audio6.pause();
          audio7.pause();
          audio8.pause();
          audio9.pause();
      });

        var audio1 = document.getElementById('sound1');
        var audio2 = document.getElementById('sound2');
        var audio3 = document.getElementById('sound3');
        var audio4 = document.getElementById('sound4');
        var audio5 = document.getElementById('sound5');
        var audio6 = document.getElementById('sound6');
        var audio7 = document.getElementById('sound7');
        var audio8 = document.getElementById('sound8');
        var audio9 = document.getElementById('sound9');

        if (audio1.paused !== true) {
            audio1.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio2.play();
        } else {
            audio2.play();
        }
    
      }
  }
}
</script>

<style>

</style>
