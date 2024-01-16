<template>
  <teleport to="body">
    <div
      v-if="activeModal === 'login'"
      class="appModal"
      @click.self="activeModal = null"
      @close-modal="activeModal = null"
    >
      <div class="appModal-content">
        <button class="close" @click="activeModal = null">&times;</button>
        <login-form></login-form>
      </div>
    </div>

    <div
      v-if="activeModal === 'register'"
      class="appModal"
      @click.self="activeModal = null"
    >
      <div class="appModal-content">
        <button class="close" @click="activeModal = null">&times;</button>
        <register-form></register-form>
      </div>
    </div>

    <div
      v-if="activeModal === 'feedback'"
      class="appModal"
      @click.self="activeModal = null"
      
    >
      <div class="appModal-content">
        <button class="close" @click="activeModal = null">&times;</button>
        <feedback-form
          @close-contact-modal="activeModal = null"
        ></feedback-form>
      </div>
    </div>
  </teleport>
  <!-- ======================================== -->
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
          <!-- Форма поиска -->
          <FormSearch/>
          
        </div>
      </div>
      <!-- Авторизация -->
      <div class="col-3 d-flex justify-content-end">
        <div class="user-btns d-flex" v-if="!isAuth">
          <button
            type="button"
            class="btn btn-warning btn-sm d-none d-lg-block px-4 text-white"
            @click="activeModal = 'login'"
          >
            Вход
          </button>
          <button
            class="btn btn-warning btn-sm d-none d-lg-block text-white"
            style="margin-left: 16px"
            @click="activeModal = 'register'"
          >
            Регистрация
          </button>
          <i
            class="bi bi-box-arrow-in-right d-block d-lg-none"
            style="color: rgb(255, 193, 7); font-size: 32px; cursor: pointer"
            @click="activeModal = 'login'"
          ></i>
          <i
            class="bi bi-person-square d-block d-lg-none"
            style="
              color: rgb(255, 193, 7);
              font-size: 30px;
              cursor: pointer;
              margin-left: 16px;
            "
            @click="activeModal = 'register'"
          ></i>
        </div>
        <i
          class="bi bi-box-arrow-left"
          v-else
          style="font-size: 40px; color: #ffc107; cursor: pointer"
          @click="logout"
        ></i>
      </div>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg" aria-label="Fifth navbar example">
    <div class="container-fluid">
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
          <ul class="navbar-list navbar-nav me-auto mb-2 mb-lg-0">
            <li class="navbar-list-item px-2">
              <router-link to="/" class="navbar-list-link">Главная</router-link>
            </li>
            <li class="navbar-list-item px-2">
              <router-link to="/places" class="navbar-list-link"
                >Места</router-link
              >
            </li>
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
            <li class="navbar-list-item px-2" @click="activeModal = 'feedback'">
              <span class="navbar-list-link" style="cursor: pointer"
                >Написать нам</span
              >
            </li>
            <!-- ========================== -->
            <li
              class="navbar-list-item px-2"
              v-show="isAuth"
              style="margin-left: auto"
            >
              <router-link to="/profile/profile-favorites" class="navbar-list-link"
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
import { ref, computed } from "vue";

import { useRouter } from 'vue-router'

import { getCookie } from "@/HelperFunctions/isAuthenticated";
import { ClearDataProfile } from "@/HelperFunctions/GetDataProfile";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import FormSearch from '@/components/FormSearch.vue'
export default {
  components: { LoginForm, RegisterForm, FeedbackForm, FormSearch },
  name: "navbar",
  emits: ["toggle-modal"],
  setup(_, { emit }) {
//------------------------------
    
//------------------------------------
    const activeModal = ref(null);
    const isShow = ref(false);
    const toSearchResult = useRouter()
    const isAuth = ref(getCookie("token="));
    const isAgeConfirmed = ref(getCookie("ageConfirm="));
    const toggleValue = () => {
      isShow.value = !isShow.value;
    };
    const setValue = computed(() => isShow.value);
    const handler = () => {
      emit("toggle-modal");
    };
    const logout = () => {
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          location.reload()
      });
      ClearDataProfile();
      isAuth.value = false;
      isAgeConfirmed.value = false;
    };
    return {
      // searchData,
      isShow,
      toggleValue,
      setValue,
      isAuth,
      handler,
      activeModal,
      logout,
      toSearchResult,
    };
  },
};
</script>
<style scoped>
@import "@/assets/css/fonts.css";
@import "@/assets/css/popup.css";
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
