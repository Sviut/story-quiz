<template>
  <div class="wrapper">
    <h3>Спасибо!</h3>
    <h4>Вы свяжемся с Вами <br> в ближайшее время!</h4>
    <small v-if="quiz.url" class="message">Сейчас мы перенаправим Вас на нашу страничку</small>
  </div>
</template>

<script>
export default {
  name: 'ThanksCard',
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  mounted () {
    if (this.quiz.url) {
      setTimeout(() => {
        window.location.href = this.quiz.url
      }, 3000)
    }
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

.message {
  color: var(--var-main-color);
}
</style>
