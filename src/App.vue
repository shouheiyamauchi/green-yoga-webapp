<template>
  <div>
    <nav-bar :routes="routes"></nav-bar>
    <main-content></main-content>
  </div>
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
      routes
    }
  }
}
</script>

<style>
</style>
