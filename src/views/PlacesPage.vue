<template>
  <teleport to="body">
    <div
      class="layout"
      style="background: rgba(0, 0, 0, 0.7); z-index: 10"
      v-if="isShowModalAddBeer === true"
      @click.self="isShowModalAddBeer = false"
    >
      <div
        class="layout-content"
        v-if="isShowModalAddBeer === true"
        :style="{ top: scrollPosition + 'px' }"
      >
        <div class="plices">
          <h3 class="text-center">{{ nameBeer }}</h3>
          <div
            class="plice-item d-flex px-3 justify-content-between align-items-center mb-1"
            v-for="place in placesData"
            :key="place.placeId"
            :id="place.placeId"
            :data-place-added="place.isAdded"
          >
            <h5 class="plice-title">{{ place.name }}</h5>
            <div class="btns-row d-flex align-items-center">
              <button
                type="button"
                class="btn btn-warning text-white btn-sm"
                style="width: 100px"
                v-if="place.isAdded === false"
                @click="setPlaceBuyBeer(place.placeId)"
              >
                Добавить
              </button>
              <button
                type="button"
                v-else
                class="btn btn-danger btn-sm"
                style="margin-left: 8px; width: 100px"
                @click="placeIsAddedRemove(place.placeId)"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
  <section id="placePage">
    
    <h1 class="text-center">
      <span class="title fw-semibold">Места</span>
    </h1>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div
              class="card mb-3 border-warning"
              v-for="item in placeData"
              :key="item.placeId"
              :data-id="item.placeId"
            >
              <div class="row g-0 align-items-center">
                <div
                  class="col-md-4 d-flex justify-content-center align-items-center"
                >
                  <img :src="item.image" class="image" alt="IMAGE" style="border-radius: 16px;width: 200px;height: 200px;" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="row d-flex justify-content-between">
                      <h5 class="card-title col-10">{{ item.name }}</h5>
                      <div class="card-favorite col-2">
                        <i
                          class="bi bi-heart"
                          v-if="!item.setAvailabilityOfSpaceForTheUser"
                        ></i>
                        <i class="bi bi-heart-fill" v-else></i>
                      </div>
                    </div>
                    <p class="card-text">
                      {{ item.type }}
                    </p>
                    <p
                      class="card-descr"
                      title="Прокрутите, чтобы увидеть все."
                    >
                      {{ item.description }}
                    </p>
                    <!-- <p class="card-text">Город: {{ item.city }}</p> -->
                    <p class="card-text">адрес: {{ item.address }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-btn">
              <button class="btn-more" @click="loadMore">Загрузить еще</button>
            </div>
          </div>
          <div class="col-4">
            <app-advert></app-advert>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import AppAdvert from "@/components/AppAdvert.vue";

export default {
  name: "place-page",
  components: { AppAdvert },
  props: {},
  setup() {
    const store = useStore();
    const profile = GetDataProfile();
    const userId = profile?.userId ?? null;
    const role = profile?.userRole ?? null;
    const isShowModalAddBeer = ref(null);
    const scrollPosition = ref(0);
    const limit = 45;
    const offset = ref(0);
    const nameBeer = ref("");
    const beerId = ref("");
    const placeId = ref("");
    const placeAdded = ref(null);

    const showModalAddBeer = () => {
      scrollPosition.value =
        window.pageYOffset || document.documentElement.scrollTop;
      isShowModalAddBeer.value = true;
    };
    //------------------------------------------------------------------------------------
    const placesData = computed(() => store.getters.PLACE_IS_ADDED_LIST);
    const renderPlacesAll = (id, name) => {
      store.dispatch("GET_PLICE_IS_ADDED_LIST", { userId, beerId: id });
      nameBeer.value = name;
      beerId.value = id;
    };
    //----------------------------------------------------------------
    const placeData = computed(() => store.getters.PLACE_DATA);
    const getDataPlace = () => {
      store.dispatch("GET_DATA_PLACE", { limit, offset: offset.value });
    };
    //-----------------------------------------------------------------
    const loadMore = () => {
      offset.value += limit;
      getDataPlace();
    };
    //-----------------------------------------------------------------
    getDataPlace();

    return {
      userId,
      role,
      placeData,
      loadMore,
      isShowModalAddBeer,
      scrollPosition,
      showModalAddBeer,
      nameBeer,
      beerId,
      placeId,
      placeAdded,
      placesData,
      renderPlacesAll,
    };
  },
};
</script>

<style scoped>
section {
  position: relative;
}
#addBeer {
  position: absolute;
  top: 8px;
  right: 40px;
  width: 402px;
}
.title {
  position: relative;
}
.title::before {
  width: 50%;
  position: absolute;
  content: "";
  left: 0;
  top: 100%;
  height: 6px;
  background-color: #fbcc04;
}
.content {
  margin-top: 80px;
}
.image{
  width: 80%;
  height: 80%;
  object-fit: cover;
}

.card-favorite i {
  color: #ff0000;
  font-size: 32px;
}
.card-descr {
  color: rgb(184, 184, 184);
  max-height: 200px;
  padding: 8px;
  overflow-y: auto;
  transition: all 0.3s linear;
  cursor: url("~@/assets/images/cursor-scroll.png"), auto;
}
.card:hover .card-descr {
  box-shadow: #faca10 0px 0px 8px 2px;
}
.card-descr::-webkit-scrollbar {
  width: 0;
}
.row-btn {
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
</style>
