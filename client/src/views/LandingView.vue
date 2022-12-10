<template>
  <div class="landing-container">
    <p class="mono">Hello, my name is</p>
    <h1 class="name-heading">Matt Finnigan.</h1>
    <h1 class="role-heading">I build things for the web.</h1>
    <p>I'm a full-stack web developer based in Melbourne, VIC Australia. I have developed many types of websites from internationally recognized companys to small local businesses.</p>
    <div class="cta-button">
      <ButtonComp text="Learn More" />
    </div>
  </div>
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
  p {
    font-family: $font-sans;
    color: $primary;
    font-size: $fs-med;
    line-height: 1.3;
    &.mono {
      font-family: $font-mono;
      color: $green-tint;
      font-size: $fs-med;
    }
  }
  h1 {
    font-family: $font-sans;
    color: $heading;
    font-size: $fs-largest;
    margin-top: 20px;
    margin-bottom: 5px;
    &.role-heading {
      color: $primary;
      margin-top: 5px;
      margin-bottom: 20px;
      font-size: $fs-large;
    }
  }
  .cta-button {
    margin-top: 35px;
  }
</style>
