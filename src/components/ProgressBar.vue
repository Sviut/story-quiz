<template>
  <div class="progress-wrapper">
    <div class="progress-bar" :key="idx" v-for="idx in barCount">
      <div
          class="progress-bar__white"
          :class="{'progress-bar__animation': isCurrent(idx - 1)}"
      ></div>
    </div>
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
  methods: {
    isCurrent (idx) {
      return idx === this.currentBar
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
  background-color: darkgray;
  height: 4px;
  width: 100%;
  border-radius: 5px;
  margin-right: 5px;
}

.progress-bar__white {
  height: 4px;
  width: 100%;
  border-radius: 5px;
}

.progress-bar__animation {
  background-color: white;
  animation: grow 5s linear;
  transform-origin: left;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}
</style>
