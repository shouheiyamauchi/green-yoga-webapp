<template>
  <div :style="style"></div>
</template>

<script>
export default {
  props: ['backgroundImage'],
  computed: {
    style () {
      return 'background-image: url(' + this.backgroundImage + ')'
    }
  }
}
</script>

<style scoped>
div {
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
