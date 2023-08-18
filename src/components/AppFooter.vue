<template>
  <footer class="footer">
    <div class="container-fluid">
      <div
        class="row justify-content-between py-1 border-top"
        style="margin-top: 32px"
      >
        <div class="col-6 col-md-3 mb-1">
          <img src="@/assets/images/Layer1.svg" alt="BEER" />
          <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
          <p class="text-body-secondary mt-4" style="font-size: 12px">
            Copyrights ©2023 TapTreck
          </p>
        </div>
        <div class="col-6 mb-1 text-end text-md-center">
          <ul class="nav flex-column">
            <li class="navbar-list-item mb-2">
              <router-link to="/" class="navbar-list-link">Главная</router-link>
            </li>
            <li class="navbar-list-item mb-2">
              <router-link to="/places" class="navbar-list-link"
                >Места</router-link
              >
            </li>
            <!-- <li class="navbar-list-item mb-2">
              <router-link to="/news" class="navbar-list-link"
                >Новинки</router-link
              >
            </li> -->
            <!-- <li class="navbar-list-item mb-2">
              <router-link to="/reviews" class="navbar-list-link"
                >Отзывы</router-link
              >
            </li> -->
            <li class="navbar-list-item mb-2">
              <router-link to="/beer" class="navbar-list-link"
                >Пиво</router-link
              >
            </li>
            <li class="navbar-list-item mb-2">
              <router-link to="/breweries" class="navbar-list-link"
                >Пивоварни</router-link
              >
            </li>
            <li class="navbar-list-item mb-2"
               @click='handler'
            >
              <!-- <router-link to="/feedback" class="header-list-link"
                >Написать нам</router-link -->
                <span class="navbar-list-link" style="cursor:pointer;"
              
              >Написать нам</span>
              
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-3 mb-1 text-center text-md-end">
          <h5 class="mb-2">Контакты</h5>
          <div class="flex-column">
            <a
              href="tel:+7(900)900-90-90"
              style="color: #0a0909; font-size: 18px"
              >+7(900)900-90-90</a
            >
            <div class="pt-3">
              <a href="" class="social-link">
                <img src="@/assets/images/WhatsApp.svg" alt="" />
              </a>
              <a href="" class="social-link" style="margin-left: 16px">
                <img src="@/assets/images/Telegram-Original.svg" alt="" />
              </a>
              <a href="" class="social-link" style="margin-left: 16px">
                <img src="@/assets/images/VK-Original.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap mt-2 justify-content-center">
        <a href="#" target="_blanc" class="p-1">
          <img src="@/assets/images/App-Store.png" alt="" width="282px" />
        </a>
        <a href="https://play.google.com/store/apps" target="_blanc" class="p-1">
          <img src="@/assets/images/google-play.png" alt="" width="282px" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import {ref} from 'vue'
export default {
   emits:['toggle-modal'],
   name:'app-footer',
   setup(_, {emit}) {
      const handler = () => {
         emit('toggle-modal')
      }
      return{
         handler,
      }
   },
}
</script>
<style scoped>
a{
   text-decoration: none;
}
.navbar-list-link {
  color: #1e1e1e;
  font-weight: bold;
  font-size: 18px;
  padding: 4px 0;
  position: relative;
  text-decoration: none;
 
}
.navbar-list-link::after {
  position: absolute;
  width: 50%;
  top: 100%;
  left: 0;
  height: 3px;
  background-color: #f2e534;
  content: "";
  opacity: 0;
  transition: all 0.3s linear;
}
.navbar-list-link.router-link-active::after {
  opacity: 1;
}
</style>

