<template>
  <div id="setopo-music" class="header2 setopo-music-main">
    <header-el/>
      <main-page/>
    <footer-el/>
  </div>
</template>

<script>
// component mainpage
import HeaderHome from './HeaderHome.vue'
import MainpageHome from '@/components/MainpageHome'
import Footer_home from '@/components/FooterHome'

export default {
  components : {
      'header-el': HeaderHome,
      'main-page': MainpageHome,
      'footer-el': Footer_home
    },
    mounted () {
      $(".loader-wrapper").fadeOut();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
