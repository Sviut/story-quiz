<template>
  <div class="progress-wrapper">
    <div class="progress-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
}
</script>

<style scoped>
.progress-wrapper {
  width: 100%;
}

.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 100%;
  animation: grow 5s linear;
  transform-origin: left;
  border-radius: 5px;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}
</style>
