<template>
  <button @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {}
  }
}
</script>

<style lang="scss" scoped>
  button {
    background: $background;
    font-family: $font-mono;
    border: 1px solid $green-tint;
    color: $green-tint;
    outline: none;
    border-radius: 5px;
    padding: 0.5em 0.785em;
    height:36px;
    line-height: 0;
    font-size: $fs-med;
    &:hover {
      cursor: pointer;
      background: $green-tint;
      color: $background;
    }
  }
</style>
