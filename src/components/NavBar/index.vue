<template>
  <div>
    <div class="fade-animation navbar-fixed">
      <nav :class="{ 'transparent-nav': transparentNav }">
        <div class="nav-wrapper" :class="{ white: !transparentNav }">
          <a href="#" class="brand-logo" :class="{ 'white-logo': transparentNav }" v-on:click="scrollToTop">Green Yoga</a>
          <a href="#" data-target="mobile-menu" class="sidenav-trigger" :class="{ 'white-menu-trigger': transparentNav }"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li v-for="(route, index) in routes" :key="index">
              <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <ul class="sidenav" :class="{ 'white-menu': transparentNav }" id="mobile-menu">
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path" v-on:click.native="closeSideNav">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import M from 'materialize-css'

export default {
  created () {
    window.addEventListener('scroll', this.toggleNavTransparency)
  },
  mounted () {
    this.$nextTick(function () {
      const sidenav = M.Sidenav.init($('.sidenav'))
      window.sidenav = sidenav[0]
    })
  },
  detroyed () {
    window.removeEventListener('scroll', this.toggleNavTransparency)
  },
  props: ['routes'],
  data () {
    return {
      transparentNav: true
    }
  },
  methods: {
    toggleNavTransparency () {
      this.transparentNav = window.scrollY < 300
    },
    closeSideNav () {
      window.sidenav.close()
    },
    scrollToTop (e) {
      e.preventDefault()

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/colors.scss';

.fade-animation * {
  transition: all 0.5s ease;
}

.transparent-nav {
  background-color: transparent;
  -webkit-box-shadow: initial;
  box-shadow: initial;

  a {
    background-color: transparent;
    color: $faded-grey-color;

    &:hover {
      color: white;
    }
  }

  .router-link-exact-active {
    background-color: transparent;
    color: white;
  }
}

.white-logo {
  color: white !important;
}

.white-menu-trigger {
  i {
    color: white !important;
  }
}

.navbar-fixed {
  position: fixed;
}

nav {
  background-color: transparent;

  .brand-logo {
    font-family: 'Amatic SC';
    color: $faded-blue-color;
    padding-left: 10px;

    @media only screen and (max-width: 992px) {
      padding-left: 0px;
    }
  }

  ul a {
    color: $lighter-blue-color;
    font-size: small;

    &:hover {
      background-color: transparent;
      color: $faded-blue-color;
    }
  }

  .sidenav-trigger i {
    color: $faded-blue-color;
  }
}

.sidenav li {
  > a {
    color: $lighter-blue-color;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    font-weight: 300;

    &:hover {
      background-color: $faded-blue-color;
      color: white;
    }
  }

  .router-link-exact-active {
    background-color: $faded-blue-color;
    color: white;
  }
}

.router-link-exact-active {
  color: $faded-blue-color;
  background-color: transparent;
}
</style>
