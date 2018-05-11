<template>
  <div ref="landing-image" class="landing-image" :style="style"></div>
</template>

<script>
export default {
  created () {
    window.addEventListener('scroll', this.adjustBackgroundPosition);
  },
  mounted () {
    this.adjustBackgroundPosition()
  },
  destroyed () {
    window.removeEventListener('scroll', this.adjustBackgroundPosition);
  },
  props: ['backgroundImage'],
  computed: {
    style () {
      return 'background-image: url(' + this.backgroundImage + ')'
    }
  },
  methods: {
    adjustBackgroundPosition () {
      this.$refs['landing-image'].style.transform = `translate3d(0px, ${window.scrollY / 3}px, 0px)`
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-image {
  height: 100vh;
  width: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
