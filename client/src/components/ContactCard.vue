<template>
  <div class="bg-white rounded-3xl p-5 flex flex-col justify-center items-center space-y-5">
    <div class="h-16 w-16">
      <img src="../assets/logo.png"/>
    </div>

    <h4 class="text-center leading-4">
      Укажите ваши контактные данные, что бы мы могли забронировать
      предложение за 190 руб. именно для Вас!
    </h4>

    <form class="space-y-2">
      <input
          id="name"
          v-model="contact.name"
          required
          class="border py-2 px-3 text-grey-darkest w-full focus:outline-none rounded-full"
          placeholder="Ваше имя"
          style="outline: none;"
          autocomplete="off"
      />
      <input
          style="outline: none;"
          v-model="contact.phone"
          required
          type="tel"
          class="border py-2 px-3 text-grey-darkest w-full focus:outline-none rounded-full"
          placeholder="Ваш номер телефона"
          autocomplete="on"
      />
    </form>

    <button
        @click="submit"
        :disabled="!contact.name || !contact.phone"
        class="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full uppercase leading-4"
    >
      Записаться на лазерную эпиляцию за 190 руб.
    </button>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  data: function () {
    return {
      contact: {
        name: '',
        phone: '',
      },
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.contact)
    },
  },
}
</script>
