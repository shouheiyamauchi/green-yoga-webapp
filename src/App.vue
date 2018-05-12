<template>
  <transition name="fade">
    <div v-if="!this.mounted">
      <nav-bar :routes="routes"></nav-bar>
      <transition name="fade">
        <main-content :key="$route.name"></main-content>
      </transition>
    </div>
  </transition>
</template>

<script>
import 'materialize-css/sass/materialize.scss'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import routes from './router/routes'

export default {
  components: {
    NavBar,
    MainContent
  },
  data () {
    return {
      mounted: true,
      routes
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.mounted = false
    })
  },
  watch: {
    $route () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/colors.scss';

@font-face {
  font-family: 'Open Sans Condensed';
  src: url('./assets/fonts/OpenSansCondensed-Light.ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'Amatic SC';
  src: url('./assets/fonts/AmaticSC-Regular.ttf');
}

@font-face {
  font-family: 'Muli';
  src: url('./assets/fonts/Muli-Regular.ttf');
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/MaterialIcons-Regular.eot');
  src: local("Material Icons"), local("MaterialIcons-Regular"), url('./assets/fonts/MaterialIcons-Regular.woff2') format("woff2"), url('./assets/fonts/MaterialIcons-Regular.woff') format("woff"), url('./assets/fonts/MaterialIcons-Regular.ttf') format("truetype");
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

* {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
}

body {
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
