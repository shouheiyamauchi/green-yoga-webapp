<template>
  <div>
    <page-title title="Class Types"></page-title>
    <card v-for="classType in classTypes" :key="classType.title" :image="classType.image" :title="classType.title" :description="classType.description"></card>
  </div>
</template>

<script>
import PageTitle from '../../components/PageTitle'
import Card from './Card'

import imageVin1 from '../../assets/images/types/vin1.jpg'
import imageVin2 from '../../assets/images/types/vin2.jpg'
import imagePower from '../../assets/images/types/power.jpg'
import imageGentle from '../../assets/images/types/gentle.jpg'

export default {
  components: {
    PageTitle,
    Card
  },
  data () {
    return {
      classTypes: [
        {
          image: imageVin1,
          title: "Vinyasa Flow Level 1",
          description: "In Vinyasa flow classes, students coordinate movement with their breath to flow from one pose to the another in a dance-like way. Vinyasa flow is a modern style of yoga influenced from all types of traditional yoga including Ashtanga and Iyengar. It starts off slow to warm up the body and will lead you to experience challenging poses with a deeper connection with the breath. There will be a section at the end to cool the body down so that you are able to fully relax and absorb all the sensations. Level 1 class is for both new yogis who have never practiced yoga before as well as those who have been practicing yoga for a while. This class focuses on each pose and the alignments including sun salutation A & B and standing balancing poses. You will also learn how to use props like blocks and straps to support your body."
        },
        {
          image: imageVin2,
          title: "Vinyasa Flow Level 2",
          description: "In Vinyasa flow classes, students coordinate movement with their breath to flow from one pose to the another in a dance-like way. Vinyasa flow is a modern style of yoga influenced from all types of traditional yoga including Ashtanga and Iyengar. It starts off slow to warm up the body and will lead you to experience challenging poses with a deeper connection with the breath. There will be a section at the end to cool the body down so that you are able to fully relax and absorb all the sensations. Level 2 class is for more experienced students who have practiced yoga for a while and are already aware of a number of poses. It consists of flowing sequences with advanced asanas including arm balances, backbending and inversions."
        },
        {
          image: imagePower,
          title: "Power Vinyasa",
          description: "Power Vinyasa is a combination with athletic based exercise and Vinyasa yoga practice. It has many qualities and benefits, including building core strength, increased stamina, and flexibility, as well as stress reduction. Like Vinyasa flow yoga, poses will be performed in a flowing sequence with a strong attention to linking breath to movement. This practice will also help to increase energy and vitality as well as building resilience and the ability to stay focused and calm in stressful situations. Focusing on your breath will help to calm and centre your mind."
        },
        {
          image: imageGentle,
          title: "Gentle Flow",
          description: "These classes are designed to accommodate people who have limited strength, flexibility or stamina by providing gentler and modified versions of the poses. The sequence is simple, balanced in its variety and, most importantly, provides safe and approachable steps with props like blocks, straps and blankets. Gentle flow is slower-paced but still require concentration and effort. Subtle doesn’t necessarily mean easy. They will gradually stretch and strengthen, and build outer and inner balance. Perfect for beginners to Yoga, those coming back from injury, pre/post natal mothers, our more mature members and of course those who just want to experience a gentler and slower paced Yoga practice."
        }
      ]
    }
  }
}
</script>
