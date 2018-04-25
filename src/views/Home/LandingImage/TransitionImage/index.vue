<template>
  <div class="landing-image" :style="style"></div>
</template>

<script>
export default {
  props: ['backgroundImage'],
  computed: {
    style () {
      return 'background-image: url(' + this.backgroundImage + ')'
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-image {
  height: calc(100vh - 56px);
  width: 100vw;
  position: absolute;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media only screen and (min-width: 601px) {
    height: calc(100vh - 64px);
  }
}
</style>
