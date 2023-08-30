<template>
  <div
    class="card mb-3"
    style="padding: 40px 20px; border: 1px solid #000"
    v-for="card in cardList"
    :key="card.id"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="card.image"
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
              <h3 class="card-title">{{ card.title }}</h3>
              <img src="@/assets/images/favorites.svg" alt="ICON HEART" />
            </div>
            <div>
              <a
                href="/profile/shoplist:shopId"
                class="card-text"
                v-if="card.type == 'Магазин'"
                >{{ card.type }}</a
              >
              <a href="/profile/bewerieslist:beweriesId" v-else>{{
                card.type
              }}</a>
            </div>
          </div>
          <p
            class="card-text"
            style="color: #b8b8b8; font-size: 20px; letter-spacing: 3px"
          >
            {{ card.description }}
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
import { ref } from "vue";
import {useStore} from "vuex"
export default {
  name: "profile-favorites-page",
  setup() {
    const srore = useStore()
    const cardList = srore.state.favoritesList
    // const isFavorites = ref(true)
    return {
      cardList,
      // isFavorites
    };
  },
};
</script>
<style scoped>
.card-row {
  margin-bottom: 21px;
}
.row-btn {
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
</style>
