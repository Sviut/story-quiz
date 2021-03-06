<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div class="image-container">
        <img v-if="image" :src="image" @load="onLoaded">
      </div>
      <div class="text-container">
        <div class="text-title">
          Ответьте на несколько простых вопросов и мы запишем вас на процедуру за 190 руб.
        </div>
        <div class="text-subtitle">
          Опрос займет всего 30 секунд!
        </div>

        <button
            :disabled="disabled"
            @click="clickHandler"
            class="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full uppercase"
            style="outline:none;"
        >
          <i class="far fa-check-circle"></i>
          Пройти опрос!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    image: {
      type: String,
    },
  },
  data: function () {
    return {
      disabled: false,
    }
  },
  methods: {
    onLoaded () {
      this.$emit('imageLoaded')
    },
    clickHandler () {
      this.disabled = true
      this.$emit('clickOnButton')
    },
  },
}
</script>
