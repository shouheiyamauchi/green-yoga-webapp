<template>
  <div class="wrapper">
    <div ref="header-image" class="header-image" :style="style"></div>
  </div>
</template>

<script>
const importAll = r => {
    let images = {}
    r.keys().map(item => { images[item.replace('./', '')] = r(item) })
    return images
}

const images = importAll(require.context('../../../../assets/images/header/', false, /\.jpg$/));

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
  props: ['headerImage'],
  computed: {
    style () {
      return 'background-image: url(' + images[this.headerImage + '.jpg'].replace(/ /g,"%20") + ')'
    }
  },
  methods: {
    adjustBackgroundPosition () {
      this.$refs['header-image'].style.transform = `translate3d(0px, ${window.scrollY / 3}px, 0px)`
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  overflow: hidden;
}

.header-image {
  height: 350px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
