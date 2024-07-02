<template>
  <div class="nav-wrapper">
    <nav class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Vue logo" />
        <h4>MFWEBDESIGN</h4>
      </div>
      <div class="desktop nav-items">
        <router-link to="/projects">Projects & Skills</router-link>
        <router-link class="button primary" to="/contact">Contact</router-link>
      </div>
      <div class="mobile nav-items">
        <button class="menu-button" @click="showItems = !showItems"></button>
        <div v-show="showItems" class="items">
          <router-link to="/projects">Projects & Skills</router-link>
          <router-link class="button primary" to="/contact">Contact</router-link>
        </div>
      </div>
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
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  nav {
    display: flex;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 20px;
      }
      h4 {
        padding: 0;
        margin: 0;
        margin-left: 5px;
        letter-spacing: 1px;
      }
    }
    a {
      font-size: $fontSize-s;
      margin: 0 15px;
      color: $textColour;
      text-transform: uppercase;
      font-weight: 600;
    }
    .nav-items {
      &.desktop {
        display: none;
        @include device('tablet', 'landscape') {
          display: block;
        }
        @include device('desktop', 'all') {
          display: block;
        }
      }
      &.mobile {
        display: block;
        @include device('tablet', 'landscape') {
          display: none;
        }
        @include device('desktop', 'all') {
          display: none;
        }
        .menu-button {
          width: 30px;
          height: 30px;
          background: $grey-300;
          border-color: $grey-400;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
        .items {
          background: $white;
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
