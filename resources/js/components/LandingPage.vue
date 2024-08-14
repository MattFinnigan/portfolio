<template>
  <div class="landing-page">
    <div class="introduction-contain container">
      <div class="info-contain">
        <h1>Hello, I'm Matt. I'm a Full Stack Web Engineer</h1>
        <div class="buttons-contain">
          <router-link to="/projects" class="button secondary">See my work</router-link>
          <router-link to="/contact" class="button primary">Let's work together</router-link>
        </div>
      </div>
      <div class="pic-contain">
        <img src="@/assets/profile-pic.jpeg" alt="Matt" />
      </div>
    </div>
    <div class="quick-cv">
      <div class="container">
        <div class="img-contain">
          <img src="@/assets/skills-hero.png" alt="Hero image" />
        </div>
        <div class="skills-contain">
          <h1>Quick CV</h1>
          <p>Over 5 years of experience working both in a team & solo. I have a passion for creating highly functional, responsive, user-friendly websites & webapps.</p>
          <ul>
            <li>HTML5, CSS3 & SASS</li>
            <li>JavaScript (Vue.js, React, Node.js, jQuery)</li>
            <li>PHP (Laravel)</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
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
  margin: 0 auto;
  .introduction-contain {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 65vh;
    padding: 0 20px;
  }
  .introduction-contain {
    .info-contain {
      flex: 0.6;
      h1 {
        margin: 1em 0;
      }
    }
    .pic-contain {
      width: 150px;
      height: auto;
      img {
        padding: 5px;
        width: 100%;
        border-radius: 100%;
        background-image: linear-gradient(to right, $theme-blue, $theme-red);
      }
    }
  }
  .quick-cv {
    min-height: 65vh;
    background-color: $theme-blue;
    color: $white;
    > .container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
    }
    .img-contain {
      img {
        width: 100%;
        height: auto;
      }
    }
    .img-contain, .skills-contain {
      flex: 0.5;
    }
    .skills-contain {
      h1 {
        color: $white;
      }
      ul {
        padding-left: 1.65em;
        list-style: thumbs;
        li {
          margin: 0.25em 0;
          &::marker {
            font-size: 0.8em;
            font-weight: bold;
          }
        }
      }
    }
  }
  @include device('phone', 'all') {
    .introduction-contain, .quick-cv .container {
      flex-direction: column;
      max-width: 500px;
    }
    .introduction-contain {
      flex-direction: column-reverse;
      text-align: center;
    }
    .quick-cv {
       .img-contain, .skills-contain {
        flex: unset;
      }
    }
  }
  @include device('tablet', 'portrait') {
    .introduction-contain, .quick-cv .container {
      flex-direction: column;
      max-width: 500px;
    }
    .introduction-contain {
      flex-direction: column-reverse;
      text-align: center;
    }
    .quick-cv {
       .img-contain, .skills-contain {
        flex: unset;
      }
    }
  }
}
</style>
