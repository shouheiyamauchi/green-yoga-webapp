<template>
  <div class="center-align">
  <div class="section"></div>
    <h4>{{ title }}</h4>
    <em>
      "{{ quote.text }}"<br />
      -{{ quote.author }}
    </em>
    <div class="section"></div>
  </div>
</template>

<script>
const quotes = [
  {
    text: 'The rhythm of the body, the melody of the mind & the harmony of the soul create the symphony of life.',
    author: 'B.K.S Iyengar'
  },
  {
    text: 'Speak the Satya, follow the Dharma, from Svadhyaya never cease.',
    author: 'Taittiriya Upanishad, 1.11.1-2'
  },
  {
    text: 'Yoga is the stilling of the fluctuations of the mind.',
    author: 'Yoga Sutra 1.2'
  },
  {
    text: 'Atha Yoga anushasanam. - Here and now is where yoga begins.',
    author: 'Yoga Sutra'
  }
]

export default {
  props: ['title'],
  computed: {
    quote () {
      return quotes[Math.floor(Math.random() * quotes.length)]
    }
  }
}
</script>

<style lang="scss" scoped>
h4 {
  font-family: 'Muli', sans-serif;
}
</style>
