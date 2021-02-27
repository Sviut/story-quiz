<template>
  <div class="progress-wrapper">
    <div class="progress-bar" :key="idx" v-for="idx in barCount">
      <div
          :style="{animationPlayState: animationState}"
          class="progress-bar__white"
          :class="{'progress-bar__animation': isCurrent(idx - 1), 'fulled': isFull(idx -1) }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    animationStopped: {
      type: Boolean,
    },
    currentBar: {
      type: Number,
      required: true,
    },
    barCount: {
      type: Number,
      required: true,
    },
  },

  data: function () {
    return {
      animationState: '',
    }
  },

  methods: {
    isCurrent (idx) {
      return idx === this.currentBar
    },
    isFull (idx) {
      return idx < this.currentBar
    },
  },
  watch: {
    animationStopped () {
      this.animationState = this.animationStopped ? 'paused' : 'running'
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
  background-color: gainsboro;
  height: 5px;
  width: 100%;
  border-radius: 5px;
  margin-right: 5px;
}

.progress-bar__white {
  background-color: white;
  height: 5px;
  width: 0;
  border-radius: 5px;
}

.fulled {
  width: 100%;
}

.progress-bar__animation {
  animation: grow 7s linear forwards;
}

@keyframes grow {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
