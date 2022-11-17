<template>
  <div>
    <p>Hello</p>
    <div></div>
  </div>
</template>

<script>
import { getAllProjects } from './utils/actions'

export default {
  name: 'App',
  mounted () {
    getAllProjects().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
</style>
