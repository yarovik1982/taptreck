<template>
    <section id="oneBreweryPage" v-if="list">
    <h1 class="text-center mb-5">
      <span class="title fw-semibold">{{breweryName}} </span>
    </h1>
    <div class="container">
      <div class="card mb-3" style="padding: 40px 20px; border: 1px solid #000"
        v-for="item in list.value"
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
               <qrcode-vue
                class="btn btn-warning btn-sm" 
                :value ="item.name " 
                :level =" level " 
                :render-as =" renderAs"
                @click="downloadQR"
                >Скачать QR-код</qrcode-vue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "one-sile-page",
  components:{QrcodeVue},
  setup() {
    const route = useRoute();
    const store = useStore();
    const list = ref({})
    const breweryName = ref('')
    const limit = 45
    const offset= 0
    const level = ref('M')
    const renderAs = ref('svg')


   const downloadQR = () => {
      const canvas = document.querySelector('canvas')
      const img = canvas.toDataURL('image/svg')
      const link = document.createElement('a')
      link.href = img
      link.download = `${value.value.replace(/ /g, "_")}.svg`
      link.click()
   }

    const getBeerListByBrewery = async() => {
      const id = route.params.breweryId
      console.log(id);
      breweryName.value = route.query.name
      await store.dispatch("GET_BEERS_BY_BREWERY", id);
      list.value = store.getters.BEERS_BREWERY
    };

    onMounted(getBeerListByBrewery);
       
    return {
      list, breweryName,
      level, renderAs,
      downloadQR,
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