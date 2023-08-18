<template>
   <form action="#" class="form"
      
   >
    <div class="form-content">
      <div class="form-header">
        <div class="form-row">
          <h4 class="form-title active text-center">Редактировать</h4>
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
          />
          <span class="form-label">Имя</span>
        </div>
        <div class="form-row">
          <input
            class="form-input"
            type="text"
            name="birthDay"
            id="birthDay"
            autocomplete="off"
            v-model="birthDay"
          />
          <span class="form-label">Дата рождения</span>
        </div>
         <div class="form-row">
          <input
            class="form-input"
            type="text"
            name="city"
            id="city"
            autocomplete="off"
            v-model="city"
          />
          <span class="form-label">Город</span>
        </div>
         <div class="form-row">
          <input
            class="form-input"
            type="text"
            name="country"
            id="country"
            autocomplete="off"
            v-model="country"
          />
          <span class="form-label">Страна</span>
        </div>
         <div class="form-row">
            <input
            class="form-input"
            type="text"
            name="phone"
            id="phone"
            autocomplete="off"
            v-model="phone"
            />
            <span class="form-label">Номер телефона</span>
         </div>
         <div class="form-row">
          <input
            class="form-input"
            type="email"
            name="email"
            id="email"
            autocomplete="off"
            v-model="email"
          />
          <span class="form-label">Email</span>
        </div>

        <button
          class="btn-big radius-10"
          type="submit"
          style="margin: 40px 0"
        >
          Сохранить
        </button>
          
        <label for="file" class="btn-big radius-10">
            Загрузить фото
        </label>
        <input
          type="file"
          id="file"
          class="inpFile"
        />
      </div>
    </div>
  </form>
</template>
<script>
import {ref} from 'vue'
import {GetDataProfile} from '@/HelperFunctions/GetDataProfile.js'
export default {
   name:'form-edit-profile',
   setup() {
      const login = ref('userName')
      const birthDay = ref('01.01.1970')
      const city = ref('Санкт-Петербург')
      const country = ref('Россия')
      const phone = ref('88002001122')
      const email = ref('user@mail.com')
      const dataProfile = GetDataProfile()
      console.log(dataProfile);
      return{
         login, birthDay,city, country,
         phone, email,
      }
   },
}
</script>

<style scoped>
@import '@/assets/css/auth.css';
.form{
   height: 80%;
   margin-top: 20px;
}
.inpFile{
   width: 0.1px;
   height: 0.1px;
   position: absolute;
   opacity: 0;
   overflow: hidden;
}
</style>