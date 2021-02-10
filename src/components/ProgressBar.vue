<template>
  <div class="progress-wrapper">
    <div :key="idx" v-for="idx in barCount" class="progress-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    currentBar: {
      type: Number,
      required: true,
    },
    barCount: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.progress-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 100%;
  animation: grow 5s linear;
  transform-origin: left;
  border-radius: 5px;
  margin-right: 5px;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}
</style>
