<template functional>
  <ul>
    <li v-for="(route, index) in props.routes" :key="index">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['routes']
}
</script>
