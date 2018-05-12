<template>
  <div class="wrapper">
    <div class="center-align">
      <a href="https://www.facebook.com/greenyoga.com.au/" target="_blank">
        <font-awesome-icon class="social-icons" :icon="facebook" />
      </a>
      <a href="https://www.instagram.com/yoginigreen/" target="_blank">
        <font-awesome-icon class="social-icons" :icon="instagram" />
      </a>
      <a href="mailto:namaste@greenyoga.com.au">
        <font-awesome-icon class="social-icons" :icon="email" />
      </a>
      <br>
      <small>&copy; Green Yoga {{ new Date().getFullYear() }}</small>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/fontawesome-free-solid'
import { faFacebookF, faInstagram } from '@fortawesome/fontawesome-free-brands'

export default {
  components: {
    FontAwesomeIcon
  },
  computed: {
    email () {
      return faEnvelopeOpen
    },
    facebook () {
      return faFacebookF
    },
    instagram () {
      return faInstagram
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/colors.scss';

.wrapper {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: $background-color;
  border-top: solid 1px $border-color;
}

.social-icons {
  background-color: transparent;
  height: 17px;
  width: 17px;
  transition: all 1s ease;
  color: $faded-color;
  margin: 0 4px;
  padding: 2px;
  border-radius: 3px;
  border: 1px solid $border-color;
  line-height: 15px;

  &:hover {
    background-color: $faded-color;
    color: white;
    border-color: white;
  }
}

small {
  color: $faded-color;
}
</style>
