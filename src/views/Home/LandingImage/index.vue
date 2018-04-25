<template>
  <div class="container">
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
.container {
  height: calc(100vh - 64px);
  width: 100vw;
  position: relative;
  margin: 0px;
}
</style>
