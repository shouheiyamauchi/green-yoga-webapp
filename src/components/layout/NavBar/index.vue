<template>
  <div>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper white">
          <a href="#!" class="brand-logo">Green Yoga</a>
          <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li v-for="(route, index) in routes" :key="index">
              <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <ul class="sidenav" id="mobile-menu">
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import M from 'materialize-css'

export default {
  mounted () {
    this.$nextTick(function () {
      M.Sidenav.init($('.sidenav'))
    })
  },
  props: ['routes']
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/colors.scss";

.navbar-fixed {
  position: fixed;
}

nav {
  background-color: transparent;

  .brand-logo {
    font-family: 'Amatic SC';
    color: $primary-color;
    padding-left: 10px;

    @media only screen and (max-width: 992px) {
      padding-left: 0px;
    }
  }

  ul a {
    color: $primary-color;

    &:hover {
      background-color: $secondary-color;
      color: white;
    }
  }

  .sidenav-trigger i {
    color: $secondary-color;
  }
}

.sidenav li > a {
  -webkit-transition: background-color .3s;
  transition: background-color .3s;

  &:hover {
    background-color: $secondary-color;
    color: white;
  }
}

.router-link-exact-active {
  background-color: $secondary-color;
  color: white;
}
</style>
