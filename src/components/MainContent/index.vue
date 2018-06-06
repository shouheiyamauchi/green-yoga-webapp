<template>
  <div class="wrapper">
    <header-image v-if="!($route.name === 'HOME')" :header-image="headerImage"></header-image>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="section"></div>
    <content-footer></content-footer>
  </div>
</template>

<script>
import HeaderImage from './HeaderImage'
import ContentFooter from './ContentFooter'

export default {
  components: {
    HeaderImage,
    ContentFooter
  },
  computed: {
    headerImage () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100vw;
}

.container {
  min-height: calc(100vh - 650px);
}
</style>
