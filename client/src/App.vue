<template>
  <div class="wrapper">
    <div class="container">
      <NavBar/>
      <main>
        <section class="landing">
          <LandingView @scrollToAbout="scrollToAbout"/>
        </section>
        <section class="about">
          <AboutView/>
        </section>
        <section>
          <WorkHistoryView/>
        </section>
        <section>
          <ProjectsView/>
        </section>
        <section>
          <ContactView/>
        </section>
      </main>
    </div>
    <footer>
      <p>Built by Matt Finnigan</p>
    </footer>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingView from './views/LandingView.vue'
import WorkHistoryView from './views/WorkHistoryView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
import AboutView from './views/AboutView.vue'

export default {
  components: {
    NavBar,
    LandingView,
    WorkHistoryView,
    ProjectsView,
    ContactView,
    AboutView
  },
  methods: {
    scrollToAbout () {
      document.querySelectorAll('.about')[0].scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background: $background;
    overflow: hidden;
    .container {
      position: relative;
      padding: 0.785em;
      max-width: 1000px;
      margin: 0 auto;
      section {
        display:flex;
        align-items:center;
        padding: 100px 0;
        &.about {
          padding-top: 0;
        }
        &.landing {
          min-height: 100vh;
          padding: 0;
        }
        &:last-child {
          margin-bottom: 100px;
        }
      }
    }
    footer {
      margin: 0 auto;
      text-align: center;
      color: $secondary;
      font-family: $font-sans;
    }
  }
</style>
