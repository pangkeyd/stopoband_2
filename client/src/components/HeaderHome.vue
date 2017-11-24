<template>
  <div>
    <!-- start loader -->
  <div class="loader-wrapper">
			<div class="loader">
				<svg class="circular" viewBox="25 25 50 50">
					<circle class="loader-animation" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
				</svg>
			</div>
		</div>
	<!-- end loader-->

  <!-- START HEADER -->
  <header class="no-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="navbar-header pull-left">
            <!-- Logo -->
            <a class="navbar-brand" href="index.html"><img src="../assets/images/logo-lite-01.png" class="img-responsive" alt=""/></a>
          </div>
        </div>
  
        <div class="col-md-8">
          <div class="lang-search pull-right">
            <div class="site-search"><i style="color:white;" class="fa fa-user" aria-hidden="true"></i></div>
          </div>
  
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        
          <!-- MENU -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="index.html">Home</a></li>
              <li class="dropdown">
                <a href="#">Pages</a>
                <ul class="dropdown-menu">
                  <li><a href="#">music</a></li>
                  <li><a href="#">Videos</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- END HEADER -->

  <!-- STRART HEADER INTRO -->
<div class="home-header-info home-header-intro">
    <div class="container">
      <div class="content-head white-text text-center">Next Events in New Year 2018</div>
    </div>
  
    <div class="mainContainer">
      <div class="container">
        <div class="containerPlayer">
          <div id="listContainer" class="playlistContainer">
            <ul id="playListContainer">
              <li class="activeAudio" data-src="https://storage.googleapis.com/bucket-stopoband/aerosmith - crazy.mp3">
                <a href="#">
                  <img src="../assets/audio/baberexha-01.png" width="90" alt=""/>
                  <h5>Bebe Rexha - The Way I Are<span>Music - Dance With Somebody</span></h5>
                </a>
              </li>
              <li data-src="static//MOANA-HowFarIllGo.mp3">
                <a href="#">
                  <img src="../assets/audio/jonathanyoung-01.png" width="90" alt=""/>
                  <h5>MOANA - How Far Ill Go<span>Jonathan Young Disney Cover</span></h5>
                </a>
              </li>
              <li data-src="static/TheChainsmokers&Coldplay-SomethingJustLikeThis(Lyric).mp3">
                <a href="#">
                  <img src="../assets/audio/coldplay-01.png" width="90" alt=""/>
                  <h5>Something Just Like This<span>The Chainsmokers & Coldplay</span></h5>
                </a>
              </li>
            </ul>
          </div>
  
          <div id="playerContainer">
            <div id="controlContainer">
              <ul class="controls">
                <li>
                  <a class="left" data-attr="prevAudio"></a>
                </li>
                <li>
                  <a class="play" data-attr="playPauseAudio"></a>
                </li>
                <li>
                  <a class="right" data-attr="nextAudio"></a>
                </li>
                <li>
                  <div class="progress">
                    <div data-attr="seekableTrack" class="seekableTrack"></div>
                    <div class="updateProgress"></div>
                  </div>
                </li>
                <li>
                  <span data-attr="timer" class="audioTime">0:00</span>
                </li>
                <li>
                  <div class="volumeControl">
                    <div class="volume volume1"></div>
                    <input class="bar volume-hidden" id="bar" data-attr="rangeVolume" type="range" min="0" max="1" step="0.1" value="0.7" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END HEADER INTRO -->

  <!-- START STICKY HEADER / WOW -->
  <header class="header-scroll wow fadeInUp" data-wow-duration=".7s">
      <div style="margin-top: 11px;" class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="navbar-header pull-left">
              <!-- Logo -->
              <a class="navbar-brand" href="#"><img src="../assets/images/logo-lite-01.png" class="img-responsive" alt=""/></a>
            </div>
          </div>
          <!-- user-->
          <div class="col-md-8">
            <div class="lang-search pull-right">
              <div class="site-search"><i style="color:white;" class="fa fa-user" aria-hidden="true"></i></div>
            </div>
    
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          
            <!-- MENU -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Home</a></li>
                <li class="dropdown">
                  <a href="#">Pages</a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Videos - Single</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  <!-- END STICKY HEADER / WOW -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
