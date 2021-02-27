<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div class="image-container">
        <img src="../assets/images/lazer.jpg" alt="">
      </div>
      <div class="text-container">
        <h3>Спасибо!</h3>
        <h4>Вы свяжемся с Вами <br> в ближайшее время!</h4>
      </div>
    </div>
  </div>
</template>

<script>
const { COLORS } = require('@/constants')
export default {
  name: 'FirstPage',
  data: function () {
    return {
      disabled: false,
    }
  },
  computed: {
    getGradient () {
      return `linear-gradient(to right, rgb(${COLORS[0].from}), rgb(${COLORS[0].to}))`
    },
  },
  methods: {
    clickHandler () {
      this.disabled = true
      this.$emit('clickOnButton')
    },
  },
}
</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100%;
}

.card-wrapper {
  border-radius: 25px;
  background-color: white;
}

.image-container {
  margin-bottom: 40px;
  border-radius: 20px;
}

.image-container img {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  max-width: 100%;
  object-fit: cover;
}

.text-container {
  padding-bottom: 20px;
}

.text-title {
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 20px;
}

.text-subtitle {
  font-size: 0.5rem;
  margin-bottom: 10px;
  color: white;
}

.btn {
  border: none;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 25px;
  font-size: 1rem;
  -webkit-tap-highlight-color: transparent;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
</style>
