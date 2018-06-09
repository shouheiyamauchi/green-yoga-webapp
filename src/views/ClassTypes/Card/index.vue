<template>
  <div class="col s12 m12">
    <div class="card">
      <div class="card-stacked">
        <div class="card-content">
          <div class="row valign-wrapper">
            <div class="col s3">
              <img :src="image" alt="" class="circle responsive-img" />
            </div>
            <div class="col s9">
              <span class="card-title">{{ title }}</span>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'description']
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/colors.scss';

.card-title {
  font-family: 'Muli', sans-serif;
}

.card {
  background-color: $background-color;
}
</style>
