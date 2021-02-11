<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div class="avatar-circle"></div>
      <div class="avatar-img"></div>

      <div class="card-title">Оставьте номер телефона, мы с вами свяжемся</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeadsPage',
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.card-wrapper {
  padding: 2rem 1rem;
  margin-top: 50%;
  width: 100%;
  border-radius: 25px;
  background-color: white;
  position: relative;
  margin-bottom: 20px;
}

.avatar-circle {
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: white;
}

.avatar-img {
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  height: 52px;
  width: 52px;
  border-radius: 50%;
  background-color: red;
}

</style>
