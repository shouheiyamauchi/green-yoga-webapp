<template>
  <div>
    <div class="nav-bar">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path" tag="button" :data-text="route.name">
            <span v-for="(letter, index) in route.name" :key="index">{{ letter === ' ' ? '&nbsp;' : letter }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="padding" class="nav-bar-padding"></div>
  </div>
</template>

<script>
export default {
  props: ['routes', 'padding']
}
</script>

<style lang="scss" scoped>
.nav-bar-padding {
  height: 64px;
}

.nav-bar {
  z-index: 1;
  position: fixed;
  height: 64px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    height: 100%;
    float: right;

    li {
      display: inline;

      button {
        position: relative;
        font-size: 1em;
        height: 100%;
        border-width: 0px;
        background: transparent;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;

        span {
          display: inline-block;
          opacity: 0;
          color: #fff;
          -webkit-transform: translate3d(0, -10px, 0);
          transform: translate3d(0, -10px, 0);
          -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
          transition: transform 0.3s, opacity 0.3s;
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }

        &:before {
          content: attr(data-text);
          position: absolute;
          margin: auto;
          padding: 0;
          -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
          transition: transform 0.3s, opacity 0.3s;
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }

        &:hover {
          background-color: red;

          &:before {
            opacity: 0;
            -webkit-transform: translate3d(0, 40%, 0);
            transform: translate3d(0, 40%, 0);
          }

          span {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

            &:nth-child(1) {
              -webkit-transition-delay: 0.05s;
              transition-delay: 0.05s;
            }
            &:nth-child(2) {
              -webkit-transition-delay: 0.1s;
              transition-delay: 0.1s;
            }
            &:nth-child(3) {
              -webkit-transition-delay: 0.15s;
              transition-delay: 0.15s;
            }
            &:nth-child(4) {
              -webkit-transition-delay: 0.2s;
              transition-delay: 0.2s;
            }
            &:nth-child(5) {
              -webkit-transition-delay: 0.25s;
              transition-delay: 0.25s;
            }
            &:nth-child(6) {
              -webkit-transition-delay: 0.3s;
              transition-delay: 0.3s;
            }
            &:nth-child(7) {
              -webkit-transition-delay: 0.4s;
              transition-delay: 0.4s;
            }
            &:nth-child(8) {
              -webkit-transition-delay: 0.45s;
              transition-delay: 0.45s;
            }
            &:nth-child(9) {
              -webkit-transition-delay: 0.5s;
              transition-delay: 0.5s;
            }
            &:nth-child(10) {
              -webkit-transition-delay: 0.55s;
              transition-delay: 0.55s;
            }
            &:nth-child(11) {
              -webkit-transition-delay: 0.6s;
              transition-delay: 0.6s;
            }
            &:nth-child(12) {
              -webkit-transition-delay: 0.65s;
              transition-delay: 0.65s;
            }
          }
        }
      }

      .router-link-exact-active {
        background-color: orange !important;
      }
    }
  }
}

// .button--nina {
// 	padding: 0 2em;
// 	background: #7986cb;
// 	color: #fff;
// 	overflow: hidden;
// 	-webkit-transition: background-color 0.3s;
// 	transition: background-color 0.3s;
// }
// .button--nina.button--inverted {
// 	background: #fff;
// 	color: #7986cb;
// }
// .button--nina > span {
// 	display: inline-block;
// 	// padding: 1em 0;
// 	opacity: 0;
// 	color: #fff;
// 	-webkit-transform: translate3d(0, -10px, 0);
// 	transform: translate3d(0, -10px, 0);
// 	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
// 	transition: transform 0.3s, opacity 0.3s;
// 	-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
// 	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
// }
// .button--nina::before {
// 	content: attr(data-text);
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	padding: 1em 0;
// 	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
// 	transition: transform 0.3s, opacity 0.3s;
// 	-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
// 	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
// }
// .button--nina:hover {
// 	background-color: #3f51b5;
// }
// .button--nina:hover::before {
// 	opacity: 0;
// 	-webkit-transform: translate3d(0, 100%, 0);
// 	transform: translate3d(0, 100%, 0);
// }
// .button--nina:hover > span {
// 	opacity: 1;
// 	-webkit-transform: translate3d(0, 0, 0);
// 	transform: translate3d(0, 0, 0);
// }
// .button--nina:hover > span:nth-child(1) {
// 	-webkit-transition-delay: 0.045s;
// 	transition-delay: 0.045s;
// }
</style>
