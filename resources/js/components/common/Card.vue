<template>
  <div class="card">
    <div class="card-image">
      <slot name="image"></slot>
    </div>
    <div class="card-heading">
      <slot name="heading"></slot>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  background: colours.$secondary;
  box-shadow: 0 0 12px rgb(0 0 0 / 59%);
  border-radius: 10px;
  width: 300px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 12px colours.$primary;
    cursor: pointer;
  }
  .card-image {
    :deep(img) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
      max-height: 200px;
    }
  }
  .card-heading, .card-content {
    padding: 4px 10px;
    :deep(p) {
      margin: 0;
      font-weight: 500;
    }
  }
}
</style>