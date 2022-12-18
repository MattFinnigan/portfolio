<template>
  <header>
    <nav>
      <div class="logo-contain"><i class="logo"></i></div>
      <div class="icons">
        <a href="https://github.com/MattFinnigan" target="_blank"><i class="github"></i></a>
        <a href="https://www.linkedin.com/in/matt-finnigan-13987a192/" target="_blank"><i class="linkdin"></i></a>
        <ButtonComp text="Resume"/>
      </div>
    </nav>
  </header>
</template>

<script>
import ButtonComp from '../components/ui/ButttonComp.vue'

export default {
  components: {
    ButtonComp
  }
}
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 60px;
    nav {
      display: flex;
      justify-content: space-between;
      width:100%;
      padding: 0.785em 0;
      .logo-contain {
        padding-left: 0.785em;
      }
      .icons {
        display: flex;
        padding-right: 0.785em;
        > * {
          margin:0 5px;
        }
      }
      i {
        display:block;
        mask-position: center center;
        mask-repeat: no-repeat;
        background-color: $primary;
        width: 2.25em;
        height: 2.25em;
        mask-size: 70%;
        cursor: pointer;
        &.logo {
          mask-image: url('../assets/img/logo.png');
          background-color: $green;
          mask-size: 100%;
        }
        &.email {
          mask-image: url('../assets/img/outlook.svg');
        }
        &.github {
          mask-image: url('../assets/img/github.svg');
        }
        &.linkdin {
          mask-image: url('../assets/img/linkdin.svg');
        }
        &:hover {
          background: $green;
        }
      }
    }
  }

</style>
