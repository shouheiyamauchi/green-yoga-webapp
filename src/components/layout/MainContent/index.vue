<template>
  <div class="container">
    <header-image v-if="!($route.name === 'HOME')" :header-image="headerImage"></header-image>
    <router-view></router-view>
    <div style="height: 100vh;">
      HELLO
      <br />
      HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />HELLO
      <br />
    </div>
  </div>
</template>

<script>
import HeaderImage from './HeaderImage'

export default {
  components: {
    HeaderImage
  },
  computed: {
    headerImage () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
}
</style>
