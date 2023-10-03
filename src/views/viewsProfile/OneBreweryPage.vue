<template>
    <section id="oneBreweryPage" v-if="list">
    <h1 class="text-center mb-5">
      <span class="title fw-semibold">{{breweryName}} </span>
    </h1>
    <div class="container">
      <div class="card mb-3" style="padding: 40px 20px; border: 1px solid #000"
        v-for="item in list"
        :key="item.id"
      >
        <div class="row g-0 d-flex align-items-center">
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
    const list = ref({})
    const breweryName = ref('')
    const limit = 45
    const offset= 0

    const getBeerListByBrewery = async() => {
      const breweryId = route.params.breweryId
      breweryName.value = route.query.name
      await store.dispatch("GET_BEERS_BY_BREWERY", breweryId,limit,offset);
      list.value = store.getters.BEERS_BREWERY
    };

    onMounted(getBeerListByBrewery);
       
    return {
      list, breweryName,
    };
  },
};
</script>