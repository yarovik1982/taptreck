<template>
  <teleport to="body">
    <div
      class="layout"
      v-if="showFormShopAdd"
      @click.self="showFormShopAdd = false"
      style="background: rgba(0, 0, 0, 0.7); z-index: 10"
    >
      <div class="layout-content" style="width: 992px">
        <form-plice-add></form-plice-add>
      </div>
    </div>
  </teleport>
  <button
    class="btn-big"
    @click="showFormShopAdd = true"
    v-if="role === 2 || role === 3"
  >
    Добавить точку продажи
  </button>
  <div
    class="card mb-3 border border-warning"
    style="padding: 40px 20px"
    v-for="item in userSilesData"
    :key="item.placeId"
    @click.self="onCardClick(item)"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="item.image"
          class="img-fluid"
          alt="IMAGE"
          style="border-radius: 16px"
        />
      </div>
      <div class="col-md-8 d-flex">
        <div class="card-body py-0 d-flex flex-column justify-content-between">
          <div>
            <div
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 21px"
            >
              <h3 class="card-title">{{ item.name }}</h3>
              <button class="btn-favorite">
                <i
                  class="icon-heart bi bi-heart"
                  v-if="!item.setAvailabilityOfSpaceForTheUser"
                  @click="favorite(item.placeId, 'post')"
                ></i>
                <i
                  class="icon-heart bi bi-heart-fill"
                  v-else
                  @click="favorite(item.placeId, 'delete')"
                ></i>
              </button>
            </div>
            <div>
              <span class="fw-semibold">{{ item.type }}</span>
            </div>
            <div>
              <span class="fw-semibold">{{ item.address }}</span>
            </div>
          </div>
          <p
            class="card-text"
            style="color: #b8b8b8; font-size: 20px; letter-spacing: 3px"
          >
            {{ item.description }}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <a href="#">Смотреть на карте</a>
            <a href="#">Оставить отзыв</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row-btn">
    <button class="btn-more">Загрузить еще</button>
  </div>
</template>
<script>
import axios from "axios";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import store from "@/store/store";
import FormPliceAdd from "@/components/FormPliceAdd.vue";
export default {
  components: { FormPliceAdd },
  name: "profile-shops-page",
  setup() {
    const showFormShopAdd = ref(false);
    const profile = GetDataProfile();
    const role = profile.userRole;
    const userId = profile.userId;
    const userSilesData = computed(() => store.getters.USER_SILES_DATA);
    const router = useRouter();

    const onCardClick = (item) => {
      router.push({
        path: `/profile/profile-shops/${item.placeId}`,
        query: { name: item.name },
      });
    };

    const favorite = async (id, method) => {
      const bodyData = {
        userId: userId,
        placeId: id,
      };
      try {
        const response = await axios({
          method: method,
          url: `https://taptrack.ru/place/favorite${
            method === "post" ? "" : "/remove"
          }`,
          data: bodyData,
        });

        if (response.status === 200) {
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getUserSilesData = () => {
      store.dispatch("GET_USER_SILES", userId);
    };
    getUserSilesData();
    return {
      favorite,
      showFormShopAdd,
      profile,
      role,
      userSilesData,
      userId,
      router,
      onCardClick,
    };
  },
};
</script>

<style scoped>
.btn-big {
  position: absolute;
  top: -165px;
  right: 30px;
}
.row-btn {
  display: flex;
  justify-content: center;
}
.btn-favorite {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background-color: transparent;
}
.icon-heart {
  font-size: 32px;
  color: #ff0000;
}
</style>
