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
        :style="{top:scrollPosition + 'px'}"
      >
        <div class="plices">
          <h3 class="text-center">{{nameBeer}}</h3>
          <div
            class="plice-item d-flex px-3 justify-content-between align-items-center mb-1"
            v-for="place in placesData"
            :key="place.placeId"
            :id="place.placeId"
            :data-place-added="place.isAdded"
          >
            <h5 class="plice-title">{{ place.name }}</h5>
            <div class="btns-row d-flex align-items-center">
              <button type="button" 
                class="btn btn-warning text-white btn-sm"
                style="width:100px;"
                v-if="place.isAdded === false"
                @click="setPlaceBuyBeer(place.placeId)"
              >
                Добавить
            </button>
            <button type="button" 
              v-else
              class="btn btn-danger btn-sm" 
              style="margin-left:8px;width:100px;" 
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
    <!-- <button id="addBeer" class="btn btn-warning text-white">
      Добавить пиво
    </button> -->
    <h1 class="text-center">
      <span class="title fw-semibold">Места</span>
    </h1>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div
              class="card mb-3"
              v-for="item in placeData"
              :key="item.placeId"
              :data-id="item.placeId"
            >
              <div class="row g-0 align-items-center">
                <div
                  class="col-md-4 d-flex justify-content-center align-items-center"
                >
                  <div class="card-img">
                    <img :src="item.image" :alt="item.name" />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="row justify-content-between">
                      <h5 class="card-title">{{ item.name }}</h5>
                      <div class="card-favorite">
                        <i class="bi bi-heart" v-if="!item.setAvailabilityOfSpaceForTheUser"></i>
                        <i class="bi bi-heart-fill" v-else></i>
                      </div>
                    </div>
                    <p class="card-text">
                      {{ item.type }}
                    </p>
                    <p class="card-text">
                      {{ item.description }}
                    </p>
                    <!-- <p class="card-text">Город: {{ item.city }}</p> -->
                    <p class="card-text">адрес: {{ item.address }}</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="row-btn">
              <button class="btn-more"
                @click="loadMore"
              >Загрузить еще</button>
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import {GetDataProfile} from '@/HelperFunctions/GetDataProfile.js'
import AppAdvert from '@/components/AppAdvert.vue';

export default {
  name: "place-page",
  components:{AppAdvert},
  props: {},
  setup() {
    const store = useStore();
    const profile = GetDataProfile()
    const userId = profile?.userId ?? null
    const role = profile?.userRole ?? null
    const isShowModalAddBeer = ref(null);
    const scrollPosition = ref(0);
    const limit = 45
    const offset = ref(0)
    const nameBeer = ref('')
    const beerId = ref('')
    const placeId = ref('')
    const placeAdded = ref(null)

    const showModalAddBeer = () => {
      scrollPosition.value = window.pageYOffset || document.documentElement.scrollTop;
      isShowModalAddBeer.value = true
    }
//------------------------------------------------------------------------------------
    const placesData = computed(() => store.getters.PLACE_IS_ADDED_LIST)
    const renderPlacesAll = (id, name) => {
      store.dispatch("GET_PLICE_IS_ADDED_LIST", {userId, beerId:id});
      nameBeer.value = name
      beerId.value = id
    };
//----------------------------------------------------------------
    const placeData = computed(() => store.getters.PLACE_DATA);
      // console.log(beerData.length);
    const getDataPlace = () => {
      store.dispatch('GET_DATA_PLACE', {limit, offset:offset.value});
    };
//-----------------------------------------------------------------
    const loadMore = () => {
      offset.value += limit
      getDataPlace()
    }
//-----------------------------------------------------------------
    getDataPlace();

    return {
      userId,role,
      placeData,
      loadMore,
      isShowModalAddBeer,scrollPosition,showModalAddBeer,
      nameBeer,beerId,placeId,placeAdded,
      placesData,renderPlacesAll,
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
.card-img {
  max-width: 380px;
  height: 380px;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-favorite i{
  color:#ff0000;
  font-size: 32px;
}
.row-btn{
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
</style>

