<template>
  <div style="height: 100vh;">
    <div class="transition-image-container">
      <transition name="landing-image-fade">
        <transition-image :backgroundImage="backgroundImage" :key="backgroundImage"></transition-image>
      </transition>
    </div>
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
  position: absolute;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.landing-image-fade-enter-active, .landing-image-fade-leave-active {
  transition: opacity 2.5s
}

.landing-image-fade-enter, .landing-image-fade-leave-to {
  opacity: 0;
}
</style>
