<template>
  <div>
    <landing-image :backgroundImage="backgroundImage"></landing-image>
    <div class="section"></div>
    <div class="section"></div>
    <div class="center-align">
      <img class="profile circle" :src="require('../../assets/images/home/profile.jpg')" alt="" />
    </div>
    <div class="section"></div>
    <br />
    Green moved to Sydney in 2013 to settle down with her partner. She was struggling to adjust to her new environment and went through a period of depression. During this time she was neglecting her health, became overweight, and was having issues with her relationships. She decided that she needs to make a change and was searching for something she can enjoy. This is when she remembered that at one point she really enjoyed practicing yoga.<br /><br />
    She started to take classes at a local yoga studio and instantly fell in love with the Vinyasa yoga practice. As Green used to be an urban dancer during her high school years and currently practices breakdance, she interprets Vinyasa yoga as a creative flow of movement. <br /><br />
    Green believes yoga has the power to change people's lives as she personally experienced dramatic improvement on her health and relationships as a result of her practice. She also practices meditation and breathing techniques every day and is very passionate to learn more about philosophy and the human body. <br /><br />
    Green’s teaching style is very energetic and focusing on each students’ body alignment. She loves to do hands-on assists to guide students to experience a deeper connection with their body and mind.<br /><br />
    <strong>Certifications:</strong><br />
    200 hrs yoga teacher training with Bodyminlife (Feb. 2017)<br />
    50 hrs Art of Alignment and Assists with Bodymindlife (Jun. 2017)<br />
    50 hrs Practical Teaching Skills with Bodymindlife (Jul. 2017)<br />
    <div class="section"></div>
  </div>
</template>

<script>
import LandingImage from './LandingImage'

const importAll = r => {
  return r.keys().map(r)
}

const images = importAll(require.context('../../assets/images/landing/', false, /\.jpg$/))

export default {
  mounted () {
    this.$nextTick(() => {
      this.changeBackground()
      if (images.length > 1) setInterval(this.changeBackground, 3500)
    })
  },
  components: {
    LandingImage
  },
  data () {
    return {
      backgroundImage: '',
      currentImageIndex: 0
    }
  },
  methods: {
    changeBackground () {
      this.backgroundImage = images[this.currentImageIndex]
      this.currentImageIndex = this.currentImageIndex === images.length - 1 ? 0 : this.currentImageIndex + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  width: 230px;
  border: solid #D1CFCC 1px;
}
</style>
