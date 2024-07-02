<template>
  <div>
    <NavigationBar/>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import NavigationBar from './components/layout/NavigationBar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 1080px;
    padding: 20px;
  }
</style>