<template>
  <div class="wrapper">
    <div class="container">
      <NavBar/>
      <main>
        <div class="page landing">
          <LandingView/>
        </div>
        <div class="page">
          <WorkHistoryView/>
        </div>
        <div class="page">
          <ProjectsView/>
        </div>
      </main>
    </div>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingView from './views/LandingView.vue'
import WorkHistoryView from './views/WorkHistoryView.vue'
import ProjectsView from './views/ProjectsView.vue'

export default {
  components: {
    NavBar,
    LandingView,
    WorkHistoryView,
    ProjectsView
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
      .page {
        display:flex;
        align-items:center;
        min-height: 50vh;
        &.landing {
          min-height: 100vh;
        }
      }
    }
  }
</style>
