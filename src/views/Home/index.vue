<template>
  <div>
    <landing-image :backgroundImage="backgroundImage"></landing-image>
    <div class="section"></div>
    <div class="section"></div>
    <div class="center-align">
      <img class="profile circle" :src="require('../../assets/images/home/profile.jpg')" alt="" />
    </div>
    <div class="section"></div>
    <br />Green moved to Australia in 2013 to settle down with her partner. She was struggling to adjust to her new environment and went through a period of depression. During this time, she was neglecting her health, suffering from carpal tunnel syndrome, and was having issues with her relationships. She decided that she needs to make a change and was searching for something she can enjoy. This is when she remembered that at one point she really enjoyed practicing yoga.
    <br />
    <br />As Green used to be an urban dancer during her high school years and currently practices breakdance, she instantly fell in love with Vinyasa yoga practice. She interprets yoga as a creative flow of movement which has healing powers both in physical and mental aspects. Green believes yoga can change people's lives as she personally experienced dramatic improvement on her health and relationships as a result of consistent practice.
    <br />
    <br />Green’s teaching style is very energetic and focuses on each students’ body alignment. Students love her creative and fun sequences and she always encourages students to challenge their limits and boundaries. She also loves to do hands-on assists to guide students to experience a deeper connection with their body and mind.
    <br />
    <br /><strong>Teacher Training (500 hours)</strong>
    <br />50 hours training with Simon Park
    <br />- Advanced Assisting and Energetics (April 2018)
    <br />
    <br />50 hours training with Shiva Rea
    <br />- Luna Arts Teacher Immersion (March 2018)
    <br />
    <br />400 hours training with BodyMindLife
    <br />- 50 hrs Embodying Philosophy and Theming (October 2017)
    <br />- 50 hrs Super Sequencing  (August 2017)
    <br />- 50 hrs Practical Teaching Skills (July 2017)
    <br />- 50 hrs Art of Alignment and Assists (June 2017)
    <br />- 200 hrs Yoga Teacher Training (February 2017)
    <br />
    <br /><strong>Teaching Style</strong>
    <br />- Vinyasa
    <br />- Power Vinyasa
    <br />- Gentle / Slow Flow
    <br />- Hatha
    <br />- Meditation
    <br />- Restorative / Yin
    <br />- Yoga Nidra
    <br />
    <br /><strong>Teaching Experience</strong>
    <br />Melbourne <em>(Permanent)</em>
    <br />- Anytime Fitness South Melbourne (Jul 2018 - Current)
    <br />- Mudita Yoga Studio (Jul 2018 - Current)
    <br />- Light Temple Yoga (Jul 2018 - Current)
    <br />- Yoga Hot Mix (Jul 2018 - Current)
    <br />
    <br />Melbourne <em>(Covers)</em>
    <br />- Anytime Fitness Travancore
    <br />- Fernwood Clayton
    <br />- Avirit Yoga & Wellbeing Centre
    <br />- Pinnacle Health Docklands
    <br />
    <br />Sydney <em>(Permanent)</em>
    <br />- Olympic Park Aquatic Centre (Feb 2018 - May 2018)
    <br />- Eliit Body Balance Studio (Jan 2018 - May 2018)
    <br />- Fernwood North Rock (Sep 2017 - May 2018)
    <br />- Plus Fitness North Sydney (Sep 2017 - May 2018)
    <br />- Olympic Park Aquatic Centre (Feb 2018 - May 2018)
    <br />
    <br />Sydney <em>(Covers)</em>
    <br />- Crunch Parramatta
    <br />- Crunch Liverpool
    <br />- Fernwood Parramatta
    <br />- Fernwood Blacktown
    <br />- Wholesome Yoga Studio
    <br />- Living Om Hornsby


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
