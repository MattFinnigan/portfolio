<template>
  <div class="landing-page">
    <div class="info-contain">
      <h1>Hello, I'm Matt. I'm a Full Stack Web Engineer</h1>
      <div class="buttons-contain">
        <router-link to="/projects" class="button secondary">See my work</router-link>
        <router-link to="/contact" class="button primary">Let's work together</router-link>
      </div>
    </div>
    <div class="pic-contain">
      <img src="@/assets/logo.png" alt="Matt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
  .landing-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    margin: 0 auto;
    .info-contain {
      flex: 0.6;
      h1 {
        margin: 1em 0;
      }
    }
    @include device('phone', 'all') {
      flex-direction: column-reverse;
      text-align: center;
      max-width: 500px;
    }
    @include device('tablet', 'portrait') {
      flex-direction: column-reverse;
      max-width: 500px;
      text-align: center;
    }
  }
</style>
