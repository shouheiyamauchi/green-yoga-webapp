<template>
  <div>
    <transition name="fade">
      <landing-image :backgroundImage="backgroundImage" :key="backgroundImage"></landing-image>
    </transition>
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
      setInterval(this.changeBackground, 3000)
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
