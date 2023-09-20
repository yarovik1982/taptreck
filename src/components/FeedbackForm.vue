<template>
  <form
    style="
      padding: 80px;
      background: #fff;
      border-radius: 15px;
      max-width: 950px;
    "
    @submit.prevent="sendData"
  >
    <div class="form-header">
      <p class="text-center">{{message}}</p>
      <h4 class="text-center text-black fw-bolder" style="margin-bottom: 60px">
        Связаться с нами
      </h4>
    </div>
    <div class="row d-flex flex-wrap justify-content-between">
      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="text" class="form-input" name="login" 
          v-model="userName"
          
          @change="nameHideLabel"
        />
        <span class="form-label" :class="{opacity:isNameHideLabel}">Имя</span>
      </div>
      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="text" class="form-input" name="phone" 
          v-model="phone"
          
          @change="phoneHideLabel"
        />
        <span class="form-label" :class="{opacity:isPhoneHideLabel}">Телефон</span>
      </div>

      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="email" class="form-input" name="email" 
          v-model="email"
          @change="emailHideLabel"
        />
        <span class="form-label" :class="{opacity:isEmailHideLabel}">Email</span>
      </div>
      <div
        class="form-row px-1 position-relative"
        style="width: 100%; max-width: 353px"
      >
        <input type="text" class="form-input" name="theme" 
          v-model="theme"
          @change="themeHideLabel"
        />
        <span class="form-label" :class="{opacity:isThemeHideLabel}">Тема</span>
      </div>
      <div class="form-row text-center" style="margin-top: 60px; border: 0">
        <button
          type="submit"
          class="btn btn-warning rounded rounded-2"
          style="width: 260px; height: 69px; font-size: 24px; color: #fff"
        >
          Отправить
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import {ref} from 'vue'
import {BASE_URL} from '@/HelperFunctions/BaseUrl.js'
import axios from 'axios';
export default {
  name: "feedback-form",
  emits:['close-contact-modal'],
  setup(props,{emit}) {
    const userName = ref('')   
    const phone = ref('')
    const email = ref('')
    const theme = ref('')
    const message = ref('')
//----------------------------------------------------
    const isNameHideLabel = ref(false)
    const nameHideLabel = () => {
      isNameHideLabel.value = userName.value !== ""
    }
//------------------------------------------------------
    const isEmailHideLabel = ref(false)
    const emailHideLabel = () => {
      isEmailHideLabel.value = email.value !== ""
    }
//------------------------------------------------------
    const isPhoneHideLabel = ref(false)
    const phoneHideLabel = () => {
      isPhoneHideLabel.value = phone.value !== ""
    }
//------------------------------------------------------
    const isThemeHideLabel = ref(false)
    const themeHideLabel = () =>{
      isThemeHideLabel.value = theme.value !== ""
    }
    const sendData = async() => {
      const data = {
        userName: userName.value,
        phone   : phone.value,
        email   : email.value,
        theme   : theme.value,
      }
      try{
        const response = await axios.post(BASE_URL + '/contact/create', data)
        if(response.status === 200){
          message.value = "Спасибо за обращение, в скором времени мы с вами свяжемся."
          setTimeout(() => {
            emit('close-contact-modal')
            // userName.value = ''
            // phone.value = ''
            // email.value = ''
            // theme.value = ''
            // location.reload()
            }, 3000)
        }
      }catch(error){
        console.log(error);
      }
    }
    return{
      userName, phone, email, theme,
      message, sendData,
      isNameHideLabel, nameHideLabel,
      isEmailHideLabel,emailHideLabel,
      isPhoneHideLabel,phoneHideLabel,
      isThemeHideLabel,themeHideLabel,
    }
  },
};
</script>
<style scoped>
.form-input {
  outline: none;
  width: 100%;
  border: none;
  padding-left: 16px;
  height: 100%;
  background-color: transparent;
}
.form-row {
  margin-bottom: 60px;
  border-bottom: 2px solid #a5a5a5;
  height: 30px;
}
.form-label {
  position: absolute;
  top: 5px;
  left: 16px;
  color: #a5a5a5;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
}
.form-label.opacity{opacity: 0;}
.form-input:focus ~.form-label{
  top: -30px;
}

</style>
