<template>
   <form 
    class="form" 
    @submit.prevent="auth"
    style="max-width:509px;"
    
   >
    <div class="form-content" style="display: flex;flex-direction: column;align-items: center;">
      <div class="form-header">
         <p class="text-light bg-success text-center">{{ message }}</p>
        <div class="form-row">
          <h4 class="form-title active">Вход</h4>
        </div>
      </div>
      <div class="form-body">
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            
            type="text"
            name="name"
            id="name"
            autocomplete="off"
            v-model="login"
            required
          />
          <span class="form-label">Имя</span>
        </div>
        <div class="form-row">
          <div class="form-icon" @click="toggleType">
            <i class="bi bi-eye-slash" v-if="!marker"></i>
            <i class="bi bi-eye" v-else></i>
          </div>
          <input
            class="form-input"
            :type="getInputType"
            name="password"
            id="password"
            autocomplete="off"
            v-model="password"
            required
          />
          <span class="form-label">Пароль</span>
        </div>
        <div class="form-row-check">
          <input
            class="form-input-check-fake"
            type="checkbox"
            name="check"
            id="check"
            v-model="isChecked"
          />

          <label class="form-label-check" for="check">
            <div class="icon-checked" v-if="isChecked">
              <img src="@/assets/images/check-square-fill.svg" alt="" />
            </div>
            <div class="icon-unchecked" v-else></div>
            Запомнить меня
          </label>
        </div>
         <button
          class="btn-big radius-10"
          type="submit"
          style="margin-bottom: 49px"
        >
          Войти
        </button>
        <div class="form-reset-password">
          <a href="#">Забыли пароль?</a>
        </div>
      </div>
      <div class="form-footer">
        <login-by-social></login-by-social>
      </div>
    </div>
    
  </form>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import LoginBySocial from "./LoginBySocial.vue";
import { BASE_URL, apiList } from "@/HelperFunctions/BaseUrl";
import {getAll} from '@/HelperFunctions/isAuthenticated'
export default {
  components: { LoginBySocial },
  name: "login-form",
  emits:['close-modal'],
  setup(props,{emit}) {
    const login = ref("");
    const password = ref("");
    const message = ref("");
    const toProfile = useRouter();
    const marker = ref(false);
    const isChecked = ref(true);
    const getInputType = ref("password");
    const toggleType = () => {
      marker.value = !marker.value;
    };
    watch(marker, () => {
      getInputType.value = marker.value ? "text" : "password";
    });

    const auth = async () => {
      const authData = {
        login   : login.value,
        password: password.value,
      };
      try {
        const response = await fetch(BASE_URL + apiList.userAuth, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authData),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const token = data.token;
          document.cookie = `token=${token}; path=/`;
          localStorage.setItem('token', JSON.stringify(token))
          const profileResponse = await fetch(BASE_URL + apiList.userProfile, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            console.log(profileData);
            localStorage.setItem("user", JSON.stringify(profileData))
            
              toProfile.push("/profile/profile-favorites");
            setTimeout(() => {
              location.reload(true)
              message.value = ''
            }, 500)
          } else
            message.value = "Упс , что-то пошло не так. Попробуйте заново!";
        }
      } catch (error) {
        message.value =
          "Произошла ошибка при отправке запроса. Попробуйте заново!.";
        console.log(error);
      }
    };
    return {
      marker,
      isChecked,
      toggleType,
      getInputType,
      auth,
      message,
      login,
      password,
      // attrValue,
      // setAttrValue,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/auth.css";
@import "@/assets/css/index.css"
</style>