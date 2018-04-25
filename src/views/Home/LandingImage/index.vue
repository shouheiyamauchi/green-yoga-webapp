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

<style scoped>
.transition-image-container {
  perspective: 1px;
  height: calc(100vh - 64px);
  width: 100vw;
  position: relative;
}
</style>
