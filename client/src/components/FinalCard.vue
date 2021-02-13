<template>
  <div class="container">
    <div class="card">
      <h3>Спасибо!</h3>
      <h4>Вы свяжемся с Вами <br> в ближайшее время!</h4>
      <div>Хотите поделиться с друзьями?</div>

      <div class="icons-wrapper">

        <ShareNetwork
            class="share-link"
            network="whatsapp"
            title="Лазерная эпиляция всего за 190р!"
            description="Лазерная эпиляция города Томск открыта для ваших кисок"
            url="https://instagram.com/burnday"
        >
          <div class="icon">
            <i class="fab fa-whatsapp"></i>
          </div>
        </ShareNetwork>

        <ShareNetwork
            class="share-link"
            network="Telegram"
            title="Лазерная эпиляция всего за 190р!"
            description="Лазерная эпиляция города Томск открыта для ваших кисок"
            url="https://instagram.com/burnday"
        >
          <div class="icon">
            <i class="fab fa-telegram-plane"></i>
          </div>
        </ShareNetwork>

        <ShareNetwork
            class="share-link"
            network="VK"
            title="Лазерная эпиляция всего за 190р!"
            description="Лазерная эпиляция города Томск открыта для ваших кисок"
            url="https://instagram.com/burnday"
        >
          <div class="icon">
            <i class="fab fa-vk"></i>
          </div>
        </ShareNetwork>


        <ShareNetwork
            class="share-link"
            network="odnoklassniki"
            title="Лазерная эпиляция всего за 190р!"
            description="Лазерная эпиляция города Томск открыта для ваших кисок"
            url="https://instagram.com/burnday"
        >
          <div class="icon">
            <i class="fab fa-odnoklassniki"></i>
          </div>
        </ShareNetwork>

        <ShareNetwork
            class="share-link"
            network="viber"
            title="Лазерная эпиляция всего за 190р!"
            description="Лазерная эпиляция города Томск открыта для ваших кисок"
            url="https://instagram.com/burnday"
        >
          <div class="icon">
            <i class="fab fa-viber"></i>
          </div>
        </ShareNetwork>

      </div>
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

.icon {
  position: relative;
  width: 50px;
  height: 50px;
  display: block;
  text-align: center;
  margin: 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(0deg, #ddd, #fff);
}

.fab {
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(50px - 12px);
  font-size: 27px;
  color: #262626;
}

.icons-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.share-link {
  text-decoration: none;
}
</style>
