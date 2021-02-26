<template>
  <div class="wrapper">
    <div class="top-section">
      <div v-if="avatar" class="avatar-img">
        <img :src="avatar" alt="">
      </div>
      <div v-if="quiz.title" class="title">{{ quiz.title }}</div>
      <div v-if="quiz.subtitle" class="sub-title">{{ quiz.subtitle }}</div>
    </div>
    <div class="bottom-section">
      <button
          :disabled="disableButtons"
          @click="clickHandler(button, idx)"
          class="btn"
      >
        {{ quiz.actionText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeadForm',

  props: {
    quiz: {
      type: Object,
      required: true,
    },
    avatar: {
      type: String,
    },
    disableButtons: {
      required: true,
      type: Boolean,
    },
  },

  methods: {
    clickHandler (button, idx) {
      this.selectedBtnIdx = idx
      this.$emit('clickOnButton', button)
    },
  },
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 40px;
  position: absolute;
}

.top-section {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.avatar-img {
  height: 85px;
  width: 85px;
  border: 3px solid white;
  /*border-radius: 50%;*/
  overflow: hidden;
  margin-bottom: 15px;
}

.avatar-img img {
  /*border-radius: 50%;*/
  height: 100%;
  width: 100%;
}

.title {
  font-weight: bold;
  line-height: 1rem;
  margin-bottom: 10px;
}

.sub-title {
  color: var(--var-btn-color);
  font-size: 12px;
}

.bottom-section {
  width: 100%;
  margin-bottom: 20px;
}

.btn {
  background-color: white;
  border-radius: 25px;
  color: black;
  outline: none;
  border: 2px solid var(--var-btn-color);
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
}

.btn:active, .btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.99);
}

.btnFill {
  background-color: var(--var-btn-color);
  border: 2px solid transparent;
  color: white;
}
</style>
