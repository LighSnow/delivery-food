<script setup>
import instagram from "@/assets/img/social/instagram.svg";
import fb from "@/assets/img/social/fb.svg";
import vk from "@/assets/img/social/vk.svg";
import logo from "@/assets/img/icon/logo.svg";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <img :src="logo" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <a href="#" class="footer-link">Ресторанам </a>
          <a href="#" class="footer-link">Курьерам</a>
          <a href="#" class="footer-link">Пресс-центр</a>
          <a href="#" class="footer-link">Контакты</a>
        </nav>
        <div class="footer-social-links">
          <a href="#" class="footer-social-link">
            <img :src="instagram" alt="instagram" />
          </a>
          <a href="#" class="footer-social-link">
            <img :src="fb" alt="facebook" />
          </a>
          <a href="#" class="footer-social-link">
            <img :src="vk" alt="vk" />
          </a>
        </div>
        <!-- /.social-links -->
      </div>
      <!-- /.footer-block -->
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 60px 0;
  &-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-nav {
    margin-left: 35px;
    margin-right: auto;
  }

  &-link {
    display: inline-block;
    color: #595959;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;
  }

  &-link:not(:last-child) {
    margin-right: 15px;
  }

  &-social-links {
    display: flex;
    align-items: center;
  }

  &-social-link:not(:last-child) {
    margin-right: 21px;
  }

  @media (max-width: 992px) {
    &-link {
      font-size: 16px;
    }
  }
  @media (max-width: 578px) {
    padding: 30px 0;

    &-block {
      align-items: flex-start;
    }

    &-nav {
      margin-left: 0;
      margin-right: 0;
      order: 0;
      display: flex;
      flex-direction: column;
    }

    &-logo {
      margin-right: 15px;
      order: 1;
    }

    &-social-links {
      order: 2;
    }
  }

  @media (max-width: 480px) {
    &-block {
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
    }

    &-logo {
      order: 0;
      margin-bottom: 20px;
    }

    &-nav {
      margin-bottom: 20px;
      text-align: center;
    }

    &-link:not(:last-child) {
      margin-right: 0;
    }
  }
}
</style>
