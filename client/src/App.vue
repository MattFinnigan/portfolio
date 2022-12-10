<template>
  <div class="wrapper">
    <div class="container">
      <NavBar/>
      <main>
        <div class="page">
          <LandingView/>
        </div>
        <div class="page">
          <WorkHistoryView/>
        </div>
      </main>
    </div>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingView from './views/LandingView.vue'
import WorkHistoryView from './views/WorkHistoryView.vue'

export default {
  components: {
    NavBar,
    LandingView,
    WorkHistoryView
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
        height: 100vh;
        display:flex;
        align-items:center;
      }
    }
  }
</style>
