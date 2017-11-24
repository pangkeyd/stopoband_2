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
              <div class="site-search"><img width="16px" src="../assets/images/icon/user-1.png" alt=""/></div>
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

    <!-- MUSIC HOME INTRO -->
    <div class="music-home-intro">
      <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 containerlogin">
        <div class="search-wrap">
          <div style="text-align:left;" class="content-head text-center">
            <span>All music in here</span>
            <h5 style="font-weight: 400;">Free download music and High Streaming</h5>
          </div>
          <div class=" sb-form orlogin">
            <input type="text" placeholder="username">
            <input type="password" placeholder="password">
          </div>
          <div class="sb-form">
              <button style="margin-top: 5%; margin-bottom: 5px;" type="submit" class="btn btn-lg btn-block">login</button>
              <button type="submit" class="btn btn-lg btn-block">via facebook</button>
          </div>
        </div>
        
      </div>
      
      
      <div style="text-align:center;" class="music-home-list wow fadeInUp" data-wow-duration=".7s">
          <div class="container-fluid no-padding">
              
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: [] 
    }
  },
  methods : {
    in_date : function(){
      let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
      let day = new Date();
      let date = day.getDate()
      let obj = {
        day: day,
        date: date
      }
      this.date.push(obj)
      // return `${date} ${monthNames[day.getMonth()]} ${day.getFullYear()}`
    }
  },
  mounted () {
    this.in_date()
  }
}
</script>

<style>

</style>
