<template>
  <div class="contact-view">
    <h2>Get In Touch</h2>
    <p>I'm currently looking for new opportunities. Whether you have a question or would like to offer an opportunity please don't hesitate to say hello!</p>
    <div class="cta-button">
      <ButtonComp text="Say Hello" @click="openEmail"/>
    </div>
  </div>
</template>

<script>
import ButtonComp from '../components/ui/ButttonComp.vue'
export default {
  components: {
    ButtonComp
  },
  methods: {
    openEmail () {
      window.location.href = 'mailto:mattf1993@hotmail.com'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/styles/theme.scss';
  .contact-view {
    text-align: center;
    width: 100%;
    p {
      font-size: $fs-lg;
    }
    .cta-button {
      margin-top: 35px;
    }
  }
</style>
