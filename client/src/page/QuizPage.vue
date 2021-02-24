<template>
  <div class="container">
    <QuizCard></QuizCard>
  </div>
</template>

<script>

import QuizCard from '@/components/QuizCard'

export default {
  name: 'QuizPage',
  components: { QuizCard },
}
</script>

<style scoped>

.container {
  display: flex;
  align-items: flex-end;
  height: 100%;
  max-height: 100%;
  background-color: #6473EA;
  padding: 25px 25px 90px;
  width: 100%;
}
</style>
