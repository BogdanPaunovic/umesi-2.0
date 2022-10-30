<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <button type="button" class="btn btn-orange">{{ text }}</button>
</template>

<style scoped lang="scss">
.btn-orange {
  background-color: #fd7e14;
  border: #fd7e14;
  color: white;
  &:active {
    color: white;
    background-color: #ca6510;
    border: #ca6510;
  }
}
</style>
