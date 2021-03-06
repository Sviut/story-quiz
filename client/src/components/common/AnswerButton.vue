<template>
  <div
      class="w-full rounded-full px-2.5 flex items-center h-12 transition-colors duration-200 ease-in-out text-sm md:text-2xl md:h-16"
      :class="{
        'bg-insta-green text-white border border-green-400' : isSelected,
        'border-blue-400 border': !isSelected
      }"
  >
    <span
        class="flex-shrink-0 h-8 w-8 text-blue-400 rounded-full font-mono font-bold flex items-center justify-center mr-2.5 md:h-12 md:w-12"
        :class="{
          'bg-white border-green-400' : isSelected,
          'border-blue-400 border-2': !isSelected
        }"
    >
      <span
          :class="{'text-green-400 border-green-400' : isSelected}"
      >
        {{ char }}
      </span>
    </span>
    <span class="leading-4 text-left">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AnswerButton',
  props: {
    index: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    char () {
      return String.fromCharCode(65 + this.index)
    },
  },
}
</script>

<style scoped>

</style>
