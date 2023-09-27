<template>
  <app-modal id="edit">
    <app-form-edit-profile></app-form-edit-profile>
  </app-modal>

  <div class="text-center mb-5">
    <span class="title position-relative py-1">Профиль</span>
  </div>
  <div class="container-fluid">
    <div class="row link-group d-flex align-items-center px-5">
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
      <div
        class="col-12 d-flex justify-content-start py-1 col-lg-3 col-md-6"
        v-if="userRole === 3 || userRole === 1"
      >
        <div class="link-wrapper">
          <router-link to="/profile/profile-beweries" class="profile-link"
            >Мои пивоварни</router-link
          >
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-start py-1 col-lg-3 col-md-6"
        v-if="userRole === 2 || userRole === 3"
      >
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
            <img :src="image" alt="AVATAR" v-if="isDeleted === false" />
            <div class="avatar-actions">
              <div
                class="pencil btn btn-warning btn-sm"
                title="Загрузить аватар"
                @click="openModal"
              >
                <i class="bi bi-pencil"></i>
              </div>
              <div class="trash btn btn-danger btn-sm" @click="deleteAvatar">
                <i class="bi bi-trash"></i>
              </div>
            </div>
            <teleport to="body">
              <div
                v-if="isAvatarFormOpen"
                class="appModal"
                @click.self="isAvatarFormOpen = false"
              >
                <div class="appModal-content">
                  <span
                    class="close"
                    @click="closeAvatarForm"
                    style="cursor: pointer"
                    >&times;</span
                  >
                  <app-form-load-avatar></app-form-load-avatar>
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
import { ref, nextTick } from "vue";
import { BASE_URL } from "@/HelperFunctions/BaseUrl";
import {getAll} from '@/HelperFunctions/isAuthenticated'
import AppFormEditProfile from "@/components/AppFormEditProfile.vue";
import AppFormLoadAvatar from "@/components/AppFormLoadAvatar.vue";
import AppModal from "@/components/UI/AppModal.vue";
import axios from "axios";

export default {
  components: { AppFormEditProfile, AppModal, AppFormLoadAvatar },
  name: "profile-page",
  emits: ["close-avatar-form"],
  setup(_, { emit }) {
    const data = GetDataProfile();
    const name = ref(data?.userName ?? null);
    const login = ref(data?.login ?? null);
    const email = ref(data?.mail ?? null);
    const image = ref(data?.image ?? null);
    const userRole = data?.userRole ?? null;
    const userId = data?.userId ?? null;
    const isDeleted = ref(false);
    const isAvatarFormOpen = ref(false);

    const deleteAvatar = async () => {
      try {
        const response = await axios.delete(
          BASE_URL + `/user/photo/remove?id=${userId}`
        );
        if (response.status) {
          isDeleted.value = true;
          getAll()
        }
      } catch (error) {
        console.log(error);
      }
    };

    const closeAvatarForm = () => {
      isAvatarFormOpen.value = false;
    };

    const openModal = () => {
      isAvatarFormOpen.value = true;
    };
    return {
      name,
      login,
      email,
      image,
      closeAvatarForm,
      openModal,
      isDeleted,
      deleteAvatar,
      isAvatarFormOpen,
      userRole,
      userId,
    };
  },
};
</script>
<style scoped>
@import "@/assets/css/popup.css";
body.unscroll {
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
.avatar-actions {
  position: absolute;
  top: 0;
  left: -20px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s linear;
}
.pencil {
  color: #000;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
}
.trash {
  border-radius: 50%;
  margin-top: 4px;
}
.avatar:hover .avatar-actions {
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
