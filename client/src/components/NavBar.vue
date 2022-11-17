<template>
  <header>
    <nav>
      <div class="logo-contain"><i class="logo"></i></div>
      <div class="icons">
        <i class="github"></i>
        <i class="linkdin"></i>
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
    width: 100%;
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
        &.logo {
          mask-image: url('../assets/img/outlook.svg');
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
      }
    }
  }

</style>
