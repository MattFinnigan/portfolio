<template>
  <div class="about-view">
    <h2>About Me</h2>
    <div class="content-contain">
      <div class="text-contain">
        <div>
          <p>Hello! My name is Matt and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try to automate some tasks at my old data entry job — turns out hacking together few scripts taught me a lot about web development fundamentals!</p>
          <p>Fast forward to today I've had the privilege of working with small mum & pop businesses to large internationally recognized cooperations. My main focus these days is solidifying my fundamental web development skills by developing highly functional, performative & accessible websites & web tools.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
        </div>
        <ul>
          <li>Javascript (ES6+)</li>
          <li>Vue.js</li>
          <li>Node.js (Express)</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </div>
      <div class="profile-pic">
        <img src="@/assets/img/profile_pic.jpg" alt="Profile Pic">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import '../assets/styles/theme.scss';
  .content-contain {
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
      flex-direction: row;
    }
    .text-contain {
      flex: 0.8;
      @media (min-width: 900px) {
        margin-right: 2.5em;
      }
      ul {
        padding: 0;
        padding-left: 1em;
        list-style: disclosure-closed;
        li {
          margin: 0.75em 0;
          padding-left: 0.75em;
          &::marker {
            color: $green;
          }
        }
      }
    }
    .profile-pic {
      flex: 0.2;
      margin: 0 auto;
      img {
        width: 100%;
        max-width: 200px;
      }
    }
  }
</style>
