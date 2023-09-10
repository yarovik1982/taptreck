<template>
  <section id="oneSilePage" v-if="item">
    <h1 class="text-center mb-5">
      <span class="title fw-semibold"> {{ item.name }}</span>
    </h1>
    <div class="container">
      <div class="card mb-3" style="padding: 40px 20px; border: 1px solid #000">
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
            <div
              class="card-body py-0 d-flex flex-column justify-content-between"
            >
              <div>
                <div
                  class="d-flex justify-content-between align-items-center"
                  style="margin-bottom: 21px"
                >
                  <h3 class="card-title">{{ item.name }}</h3>
                  <img src="@/assets/images/favorites.svg" alt="ICON HEART" />
                </div>
                <div></div>
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
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "one-sile-page",
  setup() {
    const route = useRoute();
    const store = useStore();
    const item = ref({})

    const getItemSile = async() => {
      const placeId = route.params.placeId
      await store.dispatch("GET_ITEM_SILE", placeId);
      item.value = store.getters.GET_ITEM
    };

    onMounted(getItemSile);
       
    return {
      item,
    };
  },
};
</script>
<style scoped>
.title{
   position: relative;
}
.title::before{
   width: 50%;
   position: absolute;
   content: "";
   left: 0;
   top: 100%;
   height: 6px;
   background-color: #fbcc04;
}
</style>