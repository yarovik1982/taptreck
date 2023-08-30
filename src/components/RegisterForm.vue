<template>
   <form action="#" class="form" @submit.prevent="submitForm">
    <div class="form-content">
      <div class="form-header">
        <div class="form-row">
          <h4 class="form-title active">Регистрация</h4>
        </div>
      </div>
      <div class="form-body">
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="text"
            name="userName"
            id="userName"
            autocomplete="off"
            v-model="userName"
            required
          />
          <span class="form-label">Имя</span>
        </div>
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="text"
            name="login"
            id="login"
            autocomplete="off"
            v-model="login"
            required
          />
          <span class="form-label">Логин</span>
        </div>
        <div class="form-row">
          <img class="form-icon" src="@/assets/images/user.svg" alt="" />
          <input
            class="form-input"
            type="email"
            name="mail"
            id="email"
            autocomplete="off"
            v-model="mail"
            required
          />
          <span class="form-label">Email</span>
        </div>
        <div class="form-row">
          <div class="form-icon" @click="toggleType(0)">
            <i class="bi bi-eye-slash" v-if="!marker[0]"></i>
            <i class="bi bi-eye" v-else></i>
          </div>
          <input
            class="form-input"
            :type="getInputType(0)"
            name="userPassword"
            id="userPassword"
            autocomplete="off"
            v-model="password"
            required
          />
          <span class="form-label">Пароль</span>
        </div>
        <div class="form-row">
          <div class="form-icon" @click="toggleType(1)">
            <i class="bi bi-eye-slash" v-if="!marker[1]"></i>
            <i class="bi bi-eye" v-else></i>
          </div>
          <input
            class="form-input"
            :type="getInputType(1)"
            name="passwordConfirm"
            id="passwordConfirm"
            autocomplete="off"
            required
          />
          <span class="form-label">Подтвердить пароль</span>
        </div>
        <div class="form-row-check">
          <input
            class="form-input-check-fake"
            type="checkbox"
            name="checkFake"
            id="checkFake"
            v-model="isChecked"
          />

          <label class="form-label-check" for="checkFake">
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
          style="margin-bottom: 89px"
        >
          Зарегистрироваться
        </button>
      </div>
      <div class="form-footer">
        <login-by-social></login-by-social>
        <div class="form-footer-check-agree">
          <div class="form-row-check">
            <input
              class="form-input-check-fake"
              type="checkbox"
              name="checkPolicy"
              id="checkPolicy"
              v-model="isCheckedPolicy"
            />

            <label class="form-label-check" for="checkPolicy">
              <div class="icon-checked" v-if="isCheckedPolicy">
                <img src="@/assets/images/check-square-fill.svg" alt="" />
              </div>
              <div class="icon-unchecked" v-else></div>
            </label>
            <div class="form-footer-policy">
              Продолжая, вы соглашаетесь с
              <a href="#"><strong> Политика конфиденциальности </strong></a>
              и
              <a href="#"><strong> Условия использования </strong></a>
            </div>
          </div>
        </div>
        <p>{{message}}</p>
      </div>
    </div>
  </form>
</template>
<script>
import { ref, computed } from "vue";
import {useStore} from 'vuex'

import LoginBySocial from '@/components/LoginBySocial.vue';

export default {
  name: "register-form",
  components: { LoginBySocial },
  setup() {
    const store = useStore()
    const marker = ref([false, false]);
    const isChecked = ref(true);
    const isCheckedPolicy = ref(true);
    const userName = ref('')
    const login    = ref('')
    const mail     = ref('')
    const password = ref('')

    const getInputType = computed(() => (index) => (marker.value[index] ? "text" : "password"));
    const message  = computed(()=> store.state.currentMessage)
    
    const toggleType = (index) => {
      marker.value[index] = !marker.value[index];
    };

    const submitForm = () => {
      const registerData = {
        userName:userName.value,
        login   :login.value,
        mail    :mail.value,
        password:password.value
      }
      store.dispatch('CREATE_USER', registerData)
    }

    return {
      marker, isChecked,isCheckedPolicy,
      toggleType, getInputType, userName,
      login, mail, password, message, 
      submitForm,
    };
  },
};
</script>

<style scoped>
@import '@/assets/css/auth.css';
</style>
