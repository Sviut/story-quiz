<template>
  <div class="progress-wrapper">
    <div class="progress-bar" :key="idx" v-for="idx in barCount" :class="{'fulled': isFull(idx -1) }"></div>
  </div>
</template>

<script>
export default {
  name: 'SimpleProgressBar',
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
    isFull (idx) {
      return idx < this.currentBar
    },
  },
}
</script>

<style scoped>
.progress-wrapper {
  position: absolute;
  top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 0px 10px;
}

.progress-bar {
  background-color: lightsteelblue;
  height: 5px;
  width: 100%;
  border-radius: 5px;
  margin-right: 5px;
}

.fulled {
  background-color: white;
}
</style>
