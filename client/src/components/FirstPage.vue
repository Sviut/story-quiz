<template>
  <div class="p-5">
    <div class="rounded-t-3xl max-w-2xl">
      <img v-if="image" :src="image" class="rounded-t-3xl">
    </div>
    <div class="flex flex-col items-center space-y-2 bg-white rounded-b-3xl p-2">
      <div class='text-center leading-4'>
        Ответьте на несколько простых вопросов и мы запишем вас на процедуру за 190 руб.
      </div>
      <div class="text-sm text-gray-600">
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
    clickHandler () {
      this.disabled = true
      this.$emit('clickOnButton')
    },
  },
}
</script>
