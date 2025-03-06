<template>
  <div class="nav-wrapper">
    <nav class="container">
      <div class="logo">
        <img src="@/assets/logo-primary.png" alt="Vue logo" />
        <div>MFWEBDESIGN</div>
      </div>
      <div class="desktop nav-items">
        <router-link class="button" to="/" :class="{ active: currRoute === '/' }">Home</router-link>
        <router-link class="button" to="/experience" :class="{ active: currRoute === '/experience' }">Experience</router-link>
        <router-link class="button" to="/projects" :class="{ active: currRoute === '/projects' }">Projects</router-link>
        <a class="button secondary" to="/cv">CV</a>
        <a class="button primary" to="/contact">Contact</a>
      </div>
      <!-- <div class="mobile nav-items">
        <button class="menu-button" @click="showItems = !showItems"></button>
        <div v-show="showItems" class="items">
          <router-link to="/projects">Projects & Skills</router-link>
          <router-link class="button primary" to="/contact">Contact</router-link>
        </div>
      </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      showItems: false
    }
  },
  computed: {
    currRoute () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@use "sass:color";
.nav-wrapper {
  border-bottom: 1px solid colours.$grey-300;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 45px;
        margin-right: 1em;
      }
      div {
        font-weight: bold;
      }
    }
    a {
      color: colours.$textColour;
      &.active {
        background: colours.$textColour;
        color: colours.$background;
        padding: 0.4em 1em;
      }
    }
    .nav-items {
      &.desktop {
        display: none;
        @include devices.device('tablet', 'landscape') {
          display: block;
        }
        @include devices.device('desktop', 'all') {
          display: block;
        }
      }
      &.mobile {
        display: block;
        @include devices.device('tablet', 'landscape') {
          display: none;
        }
        @include devices.device('desktop', 'all') {
          display: none;
        }
        .menu-button {
          width: 30px;
          height: 30px;
          background: colours.$grey-300;
          border-color: colours.$grey-400;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
        .items {
          background: colours.$white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 0.5em;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 60px;
          right: 0;
          a {
            margin: 10px 20px;
            text-align: center;
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
}
</style>
