<template>
  <div class="transition-image-container">
    <transition name="landing-image-fade">
      <transition-image :backgroundImage="backgroundImage" :key="backgroundImage"></transition-image>
    </transition>
  </div>
</template>

<script>
import TransitionImage from './TransitionImage'

export default {
  components: {
    TransitionImage
  },
  props: ['backgroundImage']
}
</script>

<style lang="scss" scoped>
.transition-image-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.landing-image-fade-enter-active, .landing-image-fade-leave-active {
  transition: opacity 2s
}

.landing-image-fade-enter, .landing-image-fade-leave-to {
  opacity: 0;
}
</style>
