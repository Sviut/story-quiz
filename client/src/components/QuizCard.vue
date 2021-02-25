<template>
  <div class="wrapper">
    <div class="top-section">
      <div v-if="quiz.avatar" class="avatar-img">
        <img
            :src="quiz.avatar"
            alt="">
      </div>
      <div v-if="quiz.title" class="title">{{ quiz.title }}</div>
      <div v-if="quiz.subtitle" class="sub-title">{{ quiz.subtitle }}</div>
    </div>

    <div v-if="quiz.actionButtons" class="bottom-section">
      <button :key="idx" v-for="(button, idx) in quiz.actionButtons" class="btn">{{ button.text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizCard',

  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  height: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 40px;
}

.top-section {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: var(--var-btn-color);
  border-radius: 25px;
  color: white;
  outline: none;
  border: transparent;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.btn:active, .btn:focus {
  outline: none;
}
</style>
