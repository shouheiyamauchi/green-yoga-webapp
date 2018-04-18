<template>
  <div>
    <transition name="fade">
      <landing-image :backgroundImage="backgroundImage" :key="backgroundImage"></landing-image>
    </transition>
    <div class="content-spacer">
    </div>
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
import LandingImage from './LandingImage'

const importAll = r => {
  return r.keys().map(r)
}

const images = importAll(require.context('../../../public/landing/', false, /\.jpg$/))

export default {
  components: {
    LandingImage
  },
  data () {
    return {
      backgroundImage: '',
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.changeBackground()
      setInterval(this.changeBackground, 3500)
    })
  },
  methods: {
    changeBackground () {
      let backgroundImage = this.backgroundImage

      // prevent randomly selecting the same as previous image
      while (backgroundImage === this.backgroundImage) {
        this.backgroundImage = images[Math.floor(Math.random() * images.length)]
      }
    }
  }
}
</script>

<style scoped>
.content-spacer {
  height: 100vh;
}
</style>
