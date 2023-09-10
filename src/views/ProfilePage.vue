<template>
  <app-modal id="edit">
   <app-form-edit-profile></app-form-edit-profile>
  </app-modal>

 
  <div class="text-center mb-5">
    <span class="title position-relative py-1">Профиль</span>
  </div>
  <div class="container-fluid">
    <div
      class="row link-group d-flex align-items-center  px-5"
    >
      <div class="col-12 d-flex justify-content-start py-1 col-lg-3 col-md-6">
        <div class="link-wrapper">
          <router-link to="/profile/profile-favorites" class="profile-link"
            >Избранное</router-link
          >
        </div>
      </div>
      <div class="col-12 d-flex justify-content-start py-1 col-lg-3 col-md-6">
        <div class="link-wrapper">
          <router-link to="/profile/profile-reviews" class="profile-link"
            >Мои отзывы</router-link
          >
        </div>
      </div>
      <div class="col-12 d-flex justify-content-start py-1 col-lg-3 col-md-6" v-if="userRole === 3 || userRole === 1">
        <div class="link-wrapper">
          <router-link to="/profile/profile-beweries" class="profile-link"
            >Мои пивоварни</router-link
          >
        </div>
      </div>
      <div class="col-12 d-flex justify-content-start py-1 col-lg-3 col-md-6" v-if="userRole === 2 || userRole === 3">
        <div class="link-wrapper">
          <router-link to="/profile/profile-shops" class="profile-link"
            >Мои точки продаж</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row position-relative">
      <i
        class="bi bi-three-dots-vertical"
        title="Редактировать профиль"
        style="
          font-size: 40px;
          cursor: pointer;
          position: absolute;
          width: 40px;
          height: 40px;
          right: 30px;
          z-index: 6;
        "
        data-bs-toggle="modal"
        data-bs-target="#edit"
      ></i>
      <div class="col-8" style="margin-top: 60px">
        <router-view></router-view>
      </div>

     
      <div class="col-4">
        <div class="d-flex flex-column align-items-center">
          <div class="avatar mt-5">
            <img :src="image" alt="AVATAR">
            <div class="pencil btn btn-warning btn-sm" 
              title="Загрузить аватар"
              @click="showModal = true"
            >
              <i class=" bi bi-pencil"></i>
            </div>
            <teleport to="body">
              <div v-if="showModal" class="appModal" @click.self="showModal = false">
                <div class="appModal-content">
                  <form  id="formLoadPhoto" @submit.prevent="loadedPhoto">
                    <div class="form-header">
                      <span class="close"
                        @click="showModal = false"
                      >&times;</span>
                    </div>
                    <div class="form-body">
                      <div class="form-row">
                        <input type="file" name="image" id="inpImage"
                          @change="selectedImage"
                        >
                      </div>
                      <div class="form-row">
                        <button type="submit" class="btn btn-warning btn-sm rounded rounded-4">Загрузить фото</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </teleport>
          </div>
          <div class="data">
            <div class="data-row">
              <input
                type="text"
                class="data-input"
                name="name"
                v-model="name"
                readonly
              />
              <span class="data-span">Имя</span>
            </div>
            <div class="data-row">
              <input
                type="text"
                class="data-input"
                name="login"
                v-model="login"
                readonly
              />
              <span class="data-span">Логин</span>
            </div>
            <div class="data-row">
              <input
                type="text"
                class="data-input"
                name="email"
                v-model="email"
                readonly
              />
              <span class="data-span">Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import { ref , nextTick} from "vue";
import AppFormEditProfile from "@/components/AppFormEditProfile.vue";
import AppModal from "@/components/UI/AppModal.vue";
export default {
  components: { AppFormEditProfile, AppModal },
  name: "profile-page",
  //   emits: ["toggle-modal"],
  setup() {
    const data = GetDataProfile();
    const name = ref(data?.userName ?? null);
    const login = ref(data?.login ?? null);
    const email = ref(data?.mail ?? null);
    const image = ref(data?.image ?? null);
    const showModal = ref(false);
    const userRole = data.userRole
    
    const closeModal = () => {
      showModal.value = false;
      nextTick(()=>{
        document.body.classList.remove('unscroll') // Включить прокрутку
      })
    };

    const openModal = () => {
      showModal.value = true;
      nextTick(()=>{
        document.body.classList.add('unscroll') // Запретить прокрутку
      })
      
    };
    return {
      name,
      login,
      email,
      image,
      closeModal,
      openModal,
      // isVisible,
      // showProfile,
      showModal,
      // toggleModal,
      userRole,
    };
  },
};
</script>
<style scoped>
@import '@/assets/css/popup.css';
body.unscroll{
  overflow: hidden;
  padding-right: 25px;
}
.title {
  font-size: 48px;
  font-weight: bold;
}
.title::before {
  position: absolute;
  content: "";
  width: 50%;
  height: 6px;
  background-color: rgb(255, 193, 7);
  top: 100%;
  left: 0;
}
.profile {
  position: absolute;
  top: 0;
  right: -535px;
  width: 33.3333%;
  min-width: 500px;
  transition: right 0.3s linear;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.7);
}
.profile-link {
  padding: 8px 24px;
  font-size: calc(3px + 1.3vw);
  background-color: #a6a18e;
  color: #fff;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
}
.profile-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(0, -50%);
  width: 30px;
  height: 2px;
  background-color: #a6a18e;
}
.profile-link::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -52px;
  transform: translate(0, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #a6a18e;
}
.profile-link.router-link-active {
  background-color: #faca10;
}
.profile-link.router-link-active::before {
  background-color: #faca10;
}
.profile-link.router-link-active::after {
  background-color: #faca10;
}
.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
  background-color: #faca10;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.pencil {
  position: absolute;
  color: #000;
  border-radius: 50%;
  border: 0;
  top:0;
  right: 25px;
  cursor: pointer;
  opacity: 0;
  transition: opacity .3s linear;
}
.avatar:hover .pencil{
  opacity: 1;
}
.verticalDotes {
  padding: 0 4px;
  cursor: pointer;
}
.data {
  margin-top: 106px;
  padding: 0 71px;
}
.data-row {
  position: relative;
  margin-bottom: 40px;
}
.data-input {
  width: 100%;
  border-bottom: 1px solid #000;
  padding-left: 16px;
}
.data-span {
  position: absolute;
  top: -25px;
  left: 16px;
}

</style>
