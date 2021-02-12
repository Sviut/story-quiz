<template>
  <div class="container">
    <div class="card">
      <h3>Спасибо!</h3>
      <h4>Вы свяжемся с Вами <br> в ближайшее время!</h4>
      <div>Хотите поделиться с друзьями?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinalCard',
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100%;
}

.card {
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
}
</style>
