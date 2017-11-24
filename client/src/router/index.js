import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

// load css
import '@/assets/css/custstyle.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/icons/fontawesome/css/style.css'
import '@/assets/js/slick/slick.css'
import '@/assets/css/animate.css'
import '@/assets/js/swipebox/css/swipebox.min.css'
import '@/assets/js/audio/css/styles.css'
import '@/assets/css/style.css'

//load js
import '@/assets/js/jquery.js'
import '@/assets/js/bootstrap.min.js'
import '@/assets/js/slick/slick.min.js'
import '@/assets/js/tweecool.js'
import '@/assets/js/audio.js'
import '@/assets/js/isotope/isotope.pkgd.js'
import '@/assets/js/isotope/main.js'
import '@/assets/js/wow.min.js'
import '@/assets/js/swipebox/js/jquery.swipebox.min.js'
import '@/assets/js/jquery.easing.min.js'
import '@/assets/js/audio/mediaelement-and-player.min.js'
import '@/assets/js/audio/main.js'
import '@/assets/js/main.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
