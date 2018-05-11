<template>
  <div class="transition-image-container">
    <transition name="fade">
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
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
