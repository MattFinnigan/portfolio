<template>
  <div class="wrapper">
    <div class="container">
      <NavBar/>
      <main>
        <div class="page">
          <LandingView/>
        </div>
      </main>
    </div>
  </div>

</template>

<script>
import { getAllProjects } from './utils/actions'
import NavBar from './components/NavBar.vue'
import LandingView from './views/LandingView.vue'

export default {
  components: {
    NavBar,
    LandingView
  },
  mounted () {
    getAllProjects().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background: $background;
    overflow: hidden;
    .container {
      align-items: center;
      position: relative;
      padding: 0.785em;
      .page {
        height: 100vh;
        display:flex;
        align-items:center;
      }
    }
  }
</style>
