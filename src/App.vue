<template>
  <transition name="fade">
    <div v-if="!this.mounted">
      <nav-bar :routes="routes" :padding="navPadding"></nav-bar>
      <transition name="fade">
        <main-content></main-content>
      </transition>
    </div>
  </transition>
</template>

<script>
import NavBar from './components/layout/NavBar'
import MainContent from './components/layout/MainContent'
import routes from './router/routes'

export default {
  name: 'app',
  components: {
    NavBar,
    MainContent
  },
  data () {
    return {
      mounted: true,
      routes,
      navPadding: !(this.$route.name === 'HOME')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = false
    })
  },
  watch: {
    $route () {
      this.navPadding = !(this.$route.name === 'HOME')
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Open Sans Condensed";
  src: url('./assets/OpenSansCondensed-Light.ttf');
}

* {
  font-family: 'Open Sans Condensed', sans-serif;
}

body {
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
