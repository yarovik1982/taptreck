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
  <section id="beerPage">
    <h1 class="text-center">
      <span class="title fw-semibold">Пиво</span>
    </h1>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div
              class="card mb-3"
              v-for="item in beerData"
              :key="item.id"
              :data-id="item.id"
              :data-breweryId="item.breweryId"
              :data-placeId="item.placeId"
            >
              <div class="row g-0 d-flex align-items-center">
                <div
                  class="col-md-4 d-flex justify-content-center align-items-center"
                >
                  <div class="card-img">
                    <img :src="item.image" :alt="item.name" />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">
                      {{ item.description }}
                    </p>
                    <p class="card-text">
                      Производитель: {{ item.breweryName }}
                    </p>
                    <button
                      id="addBeer"
                      class="btn btn-warning text-white"
                      :data-beer-id="item.id"
                      :data-breweryId="item.breweryId"
                      :data-beer-name="item.name"
                      v-if="( role === 2) || ( role === 3)"
                      @click="showModalAddBeer();
                        renderPlacesAll(item.id, item.name);
                      "
                    >
                      Добавить пиво
                    </button>
                    <span v-else></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-btn">
              <button class="btn-more" @click="loadMore">Загрузить еще</button>
            </div>
          </div>
          <div class="col-4">
            <div class="row mt-5">
              <h3 class="text-center">Здесь может быть ваша реклама</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile";
import {BASE_URL} from '@/HelperFunctions/BaseUrl'
// import {getCookie} from '@/HelperFunctions/isAuthenticated.js'
import axios from 'axios';

export default {
  name: "beer-page",
  props: {},
  setup() {
    const profile = GetDataProfile();
    // const isAuth = ref(getCookie("token="))
    const role = profile?.userRole ?? null
    const userId = profile?.userId ?? null;
    const isShowModalAddBeer = ref(null);
    const scrollPosition = ref(0);
    const store = useStore();
    const limit = ref(45)
    const offset = ref(0);
    const nameBeer = ref('')
    const beerId = ref('')
    const placeId = ref('')
    const placeAdded = ref(null)

    const showModalAddBeer = () => {
      scrollPosition.value = window.pageYOffset || document.documentElement.scrollTop;
      isShowModalAddBeer.value = true
    }
//-----------------------------------------------------------------------
    const placeIsAddedRemove = async (place) => {
      const data = {
        placeId: place,
        beerId : beerId.value
      }
      try{
        const response = await axios(BASE_URL + `/place/isAdded/remove`, {
          method:'DELETE',
          data,
        })
        if(response.status){
          console.log("Delete");
          renderPlacesAll(beerId.value, nameBeer.value)
        }
      }catch(error){
        console.log(error);
      }
    }

//------------------------------------------------------------------------
    const setPlaceBuyBeer = async (place) => {

      const data = {
        placeId : place,
        beerId  : beerId.value
      }
      try{
        const response = await axios(BASE_URL + `/place/buy/beer`,{
          method:'POST',
          data,
        })
        if(response.status){
          renderPlacesAll(beerId.value, nameBeer.value)
        }
      }catch(error){
        console.log(error);
      }
      
    }
//------------------------------------------------------------------------
    const placesData = computed(() => store.getters.PLACE_IS_ADDED_LIST)
    const renderPlacesAll = (id, name) => {
      store.dispatch("GET_PLICE_IS_ADDED_LIST", {userId, beerId:id});
      nameBeer.value = name
      beerId.value = id
    };
//-------------------------------------------------------------------------
    const beerData = computed(() => store.getters.BEER_DATA);
    const getDataBeer = () => {
      store.dispatch("GET_DATA_BEER", { limit:limit.value, offset: offset.value });
    };
    const loadMore = () => {
      offset.value += limit;
      getDataBeer();
    };
    getDataBeer();
//--------------------------------------------------------------------------
    return {
      beerData,
      loadMore,
      role,
      showModalAddBeer,
      placesData,
      renderPlacesAll,
      nameBeer,
      setPlaceBuyBeer, placeIsAddedRemove,
      placeAdded,
      placeId,
      isShowModalAddBeer,
      scrollPosition,
    };
  },
};
</script>

<style scoped>
section {
  position: relative;
}
#addBeer {
  margin-top: auto;
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
.row-btn {
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
.layout-content{
  width: 600px;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  height: fit-content;
  position: relative;
}
</style>
