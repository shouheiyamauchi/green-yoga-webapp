<template>
  <div>
    <page-title title="Gallery"></page-title>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="gallery-grid">
      <div v-for="(thumbnail, imageIndex) in thumbnails" :key="thumbnail" @click="index = imageIndex" class="hoverable pointer thumbnail" :style="setThumbnail(thumbnail)" />
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import PageTitle from '../../components/PageTitle'

const importAll = r => {
  return r.keys().map(r)
}

const images = importAll(require.context('../../assets/images/gallery/', false, /.jpg$/))

export default {
  components: {
    PageTitle,
    'gallery': VueGallery
  },
  data () {
    return {
      index: null,
      images: images.filter(image => image.indexOf('thumb') === -1),
      thumbnails: images.filter(image => image.indexOf('thumb') === -1)
    }
  },
  methods: {
    setThumbnail (thumbnail) {
      return `background-image: url(${thumbnail})`
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.thumbnail {
  width: 25%;
  padding-top: 25%;
  margin: 0.5em;
  cursor: pointer;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
