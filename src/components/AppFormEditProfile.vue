<template>
  <form class="form" @submit.prevent="editProfile">
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
            name="userName"
            id="userName"
            autocomplete="off"
            v-model="userName"
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
            v-model="birthday"
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
            v-model="telephoneNumber"
          />
          <span class="form-label">Номер телефона</span>
        </div>
        <div class="form-row">
          <input
            class="form-input"
            type="email"
            name="mail"
            id="mail"
            autocomplete="off"
            v-model="mail"
          />
          <span class="form-label">Email</span>
        </div>

        <button class="btn-big radius-10" type="submit" style="margin: 40px 0">
          Сохранить
        </button>

        <label for="file" class="btn-big radius-10"> Загрузить фото </label>
        <input type="file" id="file" class="inpFile" @change="changeFile"  />
      </div>
    </div>
  </form>
</template>
<script>
import { ref } from "vue";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import { BASE_URL, apiList } from "@/HelperFunctions/BaseUrl.js";
export default {
  name: "app-form-edit-profile",
  setup() {
    const data = GetDataProfile();
    const userName = ref(data?.userName ?? "");
    const birthday = ref(data?.birthday ?? "");
    const city = ref(data?.city ?? "");
    const country = ref(data?.country ?? "");
    const telephoneNumber = ref(data?.telephoneNumber ?? "");
    const mail = ref(data?.mail ?? "");

    const userId = data?.userId ?? null;
    console.log(userId);

    const file = ref(null);
    const changeFile = (e) => {
      file.value = e.target.files[0];
    console.log(file.value);
    };

    // Функция для отправки данных профиля
    const sendProfileData = async ( userId, userName, birthday, city, country, telephoneNumber, mail) => {
      const response = await fetch(
        BASE_URL + apiList.userEdit + `?id=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userName, birthday,city, country,telephoneNumber,mail }),
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
    };

    // Функция для отправки файла
    const sendFile = async (userId, file) => {
      const photoData = new FormData();
      photoData.append("image", file);

      const response = await fetch( BASE_URL + apiList.userPhoto + `?userId=${userId}`,
        {
          method: "POST",
          body: photoData,
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
    };

    // Функция редактирования профиля
    const editProfile = async () => {
      try {
        await sendProfileData(
          userId,
          userName.value,
          birthday.value,
          city.value,
          country.value,
          telephoneNumber.value,
          mail.value
        );
        await sendFile(userId, file.value);
      } catch (error) {
        console.log(error);
      }
    };

  
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       userName: userName.value,
    //       birthday: birthday.value,
    //       city: city.value,
    //       country: country.value,
    //       telephoneNumber: telephoneNumber.value,
    //       mail: mail.value
    //     }),
    //   });

    //   if (!profileResponse.ok) {
    //     throw new Error(`Ошибка: ${profileResponse.statusText}`);
    //   }

    //   const photoData = new FormData();
    //       photoData.append("file", file.value);

    //       const photoResponse = await fetch(BASE_URL+apiList.userPhoto+`?id=${userId}`, {
    //         method: "POST",
    //         body: photoData,
    //       });

    //       if (!photoResponse.ok) {
    //         throw new Error(`Ошибка: ${photoResponse.statusText}`);
    //       }
    // };

    // console.log(data);
    return {
      userName,
      birthday,
      city,
      country,
      telephoneNumber,
      mail,
      file,
      editProfile,
      changeFile,
    };
  },
};
</script>

<style scoped>
/* @import "@/assets/css/auth.css"; */
/* .form {
  height: 80%;
  min-height: 100px;
  margin-top: 20px;
}*/
/* .inpFile {
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  opacity: 0;
  overflow: hidden;
} */
</style>
