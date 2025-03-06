<template>
  <div>
    <NavigationBar/>
    <main>
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
  body {
    margin: 0;
    padding: 0;
    background-color: colours.$background;
    color: colours.$textColour;
    font-size: typography.$fontSize-m;
  }
</style>