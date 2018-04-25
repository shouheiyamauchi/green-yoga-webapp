<template>
  <div>
    <landing-image :backgroundImage="backgroundImage"></landing-image>
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

const images = importAll(require.context('../../assets/images/landing/', false, /\.jpg$/))

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

<style>
</style>
