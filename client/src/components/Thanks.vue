<template>
  <div class="bg-white rounded-3xl max-w-2xl">
    <div>
      <img src="../assets/images/lazer.jpg" class="rounded-t-3xl">
    </div>
    <div class="p-5 flex flex-col items-center">
      <h3>Спасибо!</h3>
      <h4>Мы свяжемся с Вами <br> в ближайшее время!</h4>
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
