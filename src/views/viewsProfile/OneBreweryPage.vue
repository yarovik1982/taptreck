<template>
  <section id="oneBreweryPage" v-if="list">
    <h1 class="text-center mb-5">
      <span class="title fw-semibold">{{ breweryName }} </span>
    </h1>
    <div class="container">
      <div
        class="card mb-3"
        style="padding: 40px 20px; border: 1px solid rgb(255, 193, 7)"
        v-for="item in list"
        :key="item.id"
      >
        <div class="row g-0 d-flex align-items-center">
          <div class="col-md-4 px-2">
            <img
              :src="item.image"
              class="image"
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
              <p class="card-descr">
                {{ item.description }}
              </p>
              <div class="d-flex justify-content-end align-items-center">
                <span class="qr" @click="openModal(item)">QRcode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <teleport to="body">
        <app-layout-modal
          v-if="isOpen === true"
          @click.self="closeModal"
          :style="{ top: scrollPosition + 'px' }"
        >
          <qrcode-vue
            :value="value"
            :level="level"
            :render-as="renderAs"
          ></qrcode-vue>
          <button class="btn btn-warning btn-sm d-block" @click="downloadQR">
            Сохранить
          </button>
        </app-layout-modal>
      </teleport>
    </div>
  </section>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import QrcodeVue, { Level, RenderAs } from "qrcode.vue";
import AppLayoutModal from "@/components/UI/AppLayoutModal.vue";
import { removeBodyScroll } from "@/HelperFunctions/bodyScroll";
import { SAVE_QR} from '@/HelperFunctions/saveQR'
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "one-brewery-page",
  components: { QrcodeVue, AppLayoutModal },
  setup() {
    const route = useRoute();
    const store = useStore();
    const list = computed(() => store.getters.BEERS_BREWERY);
    const breweryName = ref("");
    const level = ref("M");
    const renderAs = ref("svg");
    const isOpen = ref(null);
    const value = ref("");
    const scrollPosition = ref(null);

    const openModal = (item) => {
      scrollPosition.value =
        window.pageYOffset || document.documentElement.scrollTop;
      isOpen.value = true;
      value.value = item.name;
      removeBodyScroll(isOpen.value);
    };

    const closeModal = () => {
      isOpen.value = false;
      removeBodyScroll(isOpen.value);
    };

    const downloadQR = () => {
      SAVE_QR(value.value)
    };

    const getBeerListByBrewery = async () => {
      const breweryId = route.params.breweryId;
      breweryName.value = route.query.name;
      await store.dispatch("GET_BEERS_BY_BREWERY", breweryId);
    };

    onMounted(getBeerListByBrewery);

    return {
      list,
      breweryName,
      level,
      renderAs,
      downloadQR,
      openModal,
      closeModal,
      isOpen,
      scrollPosition,
      value,
    };
  },
};
</script>
<style scoped>
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
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.qr {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s;
}
.qr:hover {
  box-shadow: #fbcc04 0 0 6px 2px;
}
.card-descr{
  color: rgb(184, 184, 184);
  max-height: 200px;
  padding: 8px;
  overflow-y: auto;
  transition: all .3s linear;
  cursor: url('~@/assets/images/cursor-scroll.png'), auto;
}
.card:hover .card-descr{
  box-shadow: #faca10 0px 0px 8px 2px;
}
.card-descr::-webkit-scrollbar{
  width: 0;
}
</style>
