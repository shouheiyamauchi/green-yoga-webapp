<template>
  <div>
    <page-title title="Class Types"></page-title>
    <card v-for="classType in classTypes" :key="classType.title" :image="classType.image" :title="classType.title" :description="classType.description"></card>
  </div>
</template>

<script>
import PageTitle from '../../components/PageTitle'
import Card from './Card'

import imageVinyasa from '../../assets/images/types/vinyasa.jpg'
import imagePower from '../../assets/images/types/power.jpg'
import imageGentle from '../../assets/images/types/gentle.jpg'
import imageRestorativeYin from '../../assets/images/types/restorative-yin.jpg'

export default {
  components: {
    PageTitle,
    Card
  },
  data () {
    return {
      classTypes: [
        {
          image: imageVinyasa,
          title: "Vinyasa Flow",
          description: "In Vinyasa flow classes, students coordinate movement with their breath to flow from one pose to the another in a dance-like way. Vinyasa flow is a modern style of yoga influenced from all types of traditional yoga including Ashtanga and Iyengar. It starts off slow to warm up the body and will lead you to experience challenging poses with a deeper connection with the breath. There will be a section at the end to cool the body down so that you are able to fully relax and absorb all the sensations."
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
        },
        {
          image: imageRestorativeYin,
          title: "Restorative / Yin and Yoga Nidra",
          description: "In Restorative and Yin classes, poses are held for about three to five minutes at a time in order to the stretch the connective tissue around the joints which also brings the practitioner to a state of mental calmness. You will use props like bolster, blocks and blankets to support your body. Yoga Nidra is a systematic form of guided relaxation that typically is done for 15 to 30 minutes at a time. It will lead you to a deep relaxation state of consciousness between waking and sleeping, like the \"going-to-sleep\" stage which has a effect on the body, the energies and the mind."
        }
      ]
    }
  }
}
</script>
