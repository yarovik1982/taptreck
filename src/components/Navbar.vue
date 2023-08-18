<template>
  <header class="navbar">
    <div class="container-fluid">
      <div class="col-3">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/Layer1.svg" alt="BEER" />
          <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
        </a>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <div class="px-3 w-100">
          <form
            role="search"
            class="d-flex justify-content-center align-items-center"
          >
            <input
              class="form-control form-control-sm"
              type="search"
              placeholder="Поиск"
              style="
                border: 2px solid yellow;
                border-radius: 22px 0 0 22px;
                outline: none;
                box-shadow: none;
              "
            />
            <button
              class="btn btn-warning btn-sm"
              style="
                border-radius: 0px 22px 22px 0px;
                box-shadow: 0 0 0 1px #ffc107;
              "
            >
              <i class="bi bi-search" style="color: #fff"></i>
            </button>
          </form>
        </div>
      </div>
      <div class="col-3 d-flex justify-content-end">
        <div class="user-btns d-flex"
          v-if="!isAuth"
        >
          <button
            type="button"
            class="btn btn-warning btn-sm d-none d-lg-block px-4 text-white"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Вход
          </button>
          <div
            class="modal fade"
            id="loginModal"
            tabindex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog ">
              <div class="modal-content">
                <div
                  class="modal-header"
                  style="border-bottom: 2px solid #faca10"
                >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Закрыть"
                  ></button>
                </div>
                <div class="modal-body">
                  <login-form></login-form>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn btn-warning btn-sm d-none d-lg-block text-white"
            style="margin-left: 16px"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Регистрация
          </button>
          <div
            class="modal fade"
            id="registerModal"
            tabindex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog "> <!--modal-dialog-scrollable-->
              <div class="modal-content">
                <div
                  class="modal-header"
                  style="border-bottom: 2px solid #faca10"
                >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Закрыть"
                  ></button>
                </div>
                <div class="modal-body">
                  <register-form></register-form>
                </div>
              </div>
            </div>
          </div>
          <i
            class="bi bi-box-arrow-in-right d-block d-lg-none"
            style="color: rgb(255, 193, 7); font-size: 32px; cursor: pointer"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          ></i>
          <i
            class="bi bi-person-square d-block d-lg-none"
            style="
              color: rgb(255, 193, 7);
              font-size: 30px;
              cursor: pointer;
              margin-left: 16px;
            "
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          ></i>
          <!-- <i
          class="bi bi-box-arrow-left"
          style="font-size: 40px; color: #ffc107; cursor: pointer"
        ></i> -->
        </div>
        <i class="bi bi-box-arrow-left"
          v-else
          style="font-size:40px; color:#FFC107;cursor:pointer;"
          @click="logout"
        ></i>
      </div>
    </div>
  </header>

   


  <nav class="navbar navbar-expand-lg" aria-label="Fifth navbar example">
    <div class="container-fluid">
    <!-- <div class="app-container"> -->
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#burger"
        aria-controls="burger"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="burger">
        <div
          class="row d-flex w-100 justify-content-between align-items-center"
        >
          <ul class="navbar-list navbar-nav me-auto mb-2 mb-lg-0"
            v-if="isAuth"
          >
            <li class="navbar-list-item px-3">
              <router-link to="/" class="navbar-list-link">Главная</router-link>
            </li>
            <li class="navbar-list-item px-3">
              <router-link to="/places" class="navbar-list-link"
                >Места</router-link
              >
            </li>
            <li class="navbar-list-item px-3">
              <router-link to="/news" class="navbar-list-link"
                >Новинки</router-link
              >
            </li>
            <li class="navbar-list-item px-3">
              <router-link to="/reviews" class="navbar-list-link"
                >Отзывы</router-link
              >
            </li>
            <li class="navbar-list-item px-3">
              <router-link to="/beer" class="navbar-list-link"
                >Пиво</router-link
              >
            </li>
            <li class="navbar-list-item px-3">
              <router-link to="/breweries" class="navbar-list-link"
                >Пивоварни</router-link
              >
            </li>
            <li class="navbar-list-item px-3">
              <router-link to="/breweries" class="navbar-list-link"
                >Карта</router-link
              >
            </li>
            <li class="navbar-list-item px-3"
              @click='handler'
            >
              <span class="navbar-list-link" style="cursor:pointer;"
              
              >Написать нам</span>
              <!-- <router-link to="/feedback" class="navbar-list-link"
                >Написать нам</router-link
              > -->
            </li>
            <li
              class="navbar-list-item px-3"
              v-show="isAuth"
              style="margin-left:auto;"
            >
              <router-link to="/profile" class="navbar-list-link"
                >Профиль</router-link
              >
            </li>
          </ul>
          <ul class="navbar-list navbar-nav me-auto mb-2 mb-lg-0"
            v-else
          >
            <li class="navbar-list-item px-2">
              <router-link to="/" class="navbar-list-link">Главная</router-link>
            </li>
            <li class="navbar-list-item px-2">
              <router-link to="/places" class="navbar-list-link"
                >Места</router-link
              >
            </li>
            <!-- <li class="navbar-list-item px-2">
              <router-link to="/news" class="navbar-list-link"
                >Новинки</router-link
              >
            </li> -->
            <!-- <li class="navbar-list-item px-2">
              <router-link to="/reviews" class="navbar-list-link"
                >Отзывы</router-link
              >
            </li> -->
            <li class="navbar-list-item px-2">
              <router-link to="/beer" class="navbar-list-link"
                >Пиво</router-link
              >
            </li>
            <li class="navbar-list-item px-2">
              <router-link to="/breweries" class="navbar-list-link"
                >Пивоварни</router-link
              >
            </li>
            <li class="navbar-list-item px-2"
              @click='handler'
            >
              <span class="navbar-list-link" style="cursor:pointer;"
              
              >Написать нам</span>
              <!-- <router-link to="/feedback" class="navbar-list-link"
                >Написать нам</router-link
              > -->
            </li>
            <li
              class="navbar-list-item px-2"
              v-show="isAuth"
              style="margin-left:auto;"
            >
              <router-link to="/profile" class="navbar-list-link"
                >Профиль</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import {ref, computed} from 'vue'
import {isAuthenticated} from '@/HelperFunctions/isAuthenticated'
export default {
  components: { LoginForm, RegisterForm },
  name: "navbar",
  emits: ["toggle-modal"],
  setup(_, {emit}) {
   const isShow = ref(false)
   const isAuth = ref(isAuthenticated())
   const toggleValue = () => {
      isShow.value = !isShow.value
   }
   const setValue = computed(() => isShow.value)
   const handler = () => {
    emit('toggle-modal')
   }
   return{
      isShow,
      toggleValue,
      setValue,
      isAuth,
      handler,
   }
  },
};
</script>
<style scoped>
@import '@/assets/css/fonts.css';
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
