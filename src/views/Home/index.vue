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
    <strong>Teacher Training (500 hours)</strong>
    <br />50 hours training with Simon Park<br />
    - Advanced Assisting and Energetics (April 2018)<br />
    <br />50 hours training with Shiva Rea<br />
    - Luna Arts Teacher Immersion (March 2018)<br />
    <br />400 hours training with BodyMindLife<br />
    - 50 hrs Embodying Philosophy and Theming (October 2017)<br />
    - 50 hrs Super Sequencing  (August 2017)<br />
    - 50 hrs Practical Teaching Skills (July 2017)<br />
    - 50 hrs Art of Alignment and Assists (June 2017)<br />
    - 200 hrs Yoga Teacher Training (February 2017)<br />
    <br><strong>Teaching Experience</strong>
    <br />Olympic Park Aquatic Centre (Feb 2018 - May 2018)<br />
    - Vinyasa / Gentle Yoga / Meditation / Pranayama<br />
    <br />Eliit Body Balance Studio (Jan 2018 - May 2018)<br />
    - Vinyasa / Restorative / Yin / Meditation / Pranayama<br />
    <br />Fernwood North Rock (Sep 2017 - May 2018)<br />
    - Vinyasa / Gentle Yoga / Meditation / Pranayama<br />
    <br />Plus Fitness North Sydney (Sep 2017 - May 2018)<br />
    - Vinyasa / Gentle Yoga / Meditation / Pranayama<br />
    <br />Olympic Park Aquatic Centre (Feb 2018 - May 2018)<br />
    - Vinyasa / Gentle Yoga / Meditation / Pranayama<br />

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
@import 'src/assets/scss/colors.scss';

.profile {
  width: 230px;
  border: solid #D1CFCC 1px;
}

strong {
  color: $darker-grey-color;
}
</style>
