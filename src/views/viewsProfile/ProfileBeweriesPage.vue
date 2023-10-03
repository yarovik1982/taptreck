<template>
  
  <button
    class="btn-big"
    @click="showFormBewierAdd = true"
    v-if="role === 1 || role === 3"
  >
    Добавить пивоварню
  </button>
  <div
    class="card mb-3"
    style="padding: 40px 20px; border: 1px solid #000"
    v-for="breweryItem in breweryData"
    :key="breweryItem.id"
    :data-breweryId="breweryItem.id"
    @click="onCardClick(breweryItem)"
  >
    <div class="row g-0">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          :src="breweryItem.image"
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
              <h3 class="card-title">{{ breweryItem.name }}</h3>
              <!-- <img src="@/assets/images/favorites.svg" alt="ICON HEART" /> -->
            </div>
            <div>
              <p>{{ breweryItem.type }}</p>
            </div>
          </div>
          <p
            class="card-text" title="Прокрутите, чтобы увидеть все."
          >
            {{ breweryItem.description }}
          </p>
          <button
            id="addBeer"
            class="btn btn-warning text-white"
            v-if="role === 1 || role === 3"
            @click="
              showModalAddBeer(breweryItem.id)
            "
          >
            Добавить пиво
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row-btn">
    <button class="btn-more">Загрузить еще</button>
  </div>
  <teleport to="body">
    <div
      class="layout"
      v-if="showFormBewierAdd"
      @click.self="showFormBewierAdd = false"
      style="background: rgba(0, 0, 0, 0.7); z-index: 10"
    >
      <div class="layout-content" style="width: 992px">
        <form-brewery-add></form-brewery-add>
      </div>
    </div>

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

    <div
      class="layout"
      v-if="isShowModalAddBeer === true"
      @click.self="isShowModalAddBeer = false"
      style="background: rgba(0, 0, 0, 0.7); z-index: 10"
    >
      <div class="layout-content" style="width: 992px">
        <form-beer-add :breweryId="selectedBreweryId"></form-beer-add>
      </div>
    </div>
  </teleport>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import FormBreweryAdd from "@/components/FormBreweryAdd.vue";
import FormBeerAdd from '@/components/FormBeerAdd.vue'
import axios from "axios";

export default {
  components: { FormBreweryAdd, FormBeerAdd },
  name: "profile-beweries-page",
  setup() {
    const showFormBewierAdd = ref(false);
    const store = useStore();
    const router = useRouter()
    const profile = GetDataProfile();
    const role = profile.userRole;
    const userId = profile.userId;
    const isShowModalAddBeer = ref(false)
    const selectedBreweryId = ref(null)

    const onCardClick = (item) => {
      router.push({
        path:`/profile/profile-beweries/${item.breweryId}`,
        query:{name:item.name}
        })
    }

    const showModalAddBeer = (breweryId) => {
      isShowModalAddBeer.value = true
      selectedBreweryId.value = breweryId
    }

    const breweryData = computed(() => store.getters.USER_BREWERY_DATA);

    const getUserBreweryData = () => {
      store.dispatch("GET_USER_BREWERY_DATA", userId);
    };
    getUserBreweryData();

    return {
      showFormBewierAdd,
      profile,
      role,
      userId,
      breweryData,
      isShowModalAddBeer,showModalAddBeer,
      selectedBreweryId,
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
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
.card-text{
  color: #b8b8b8; 
  font-size: 20px; 
  letter-spacing: 3px;
  height:250px;
  overflow:auto;
  padding: 8px;
  transition: box-shadow .3s linear;
}
#addBeer{
  width: 170px;
}
.card-text:hover{
  box-shadow: inset 0 0 12px 2px #ccc;
}
.card-text::-webkit-scrollbar{
  width: 3px;
}
</style>
