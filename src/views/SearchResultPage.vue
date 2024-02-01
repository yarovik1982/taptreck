<template>
  <h3 class="text-center">Результаты поиска</h3>
  <div class="container-fluid">
    <div
      class="row link-group d-flex align-items-center px-5 justify-content-center mb-4"
    >
    <div
      class="col-12 d-flex justify-content-start justify-content-sm-center py-1 col-sm-4"
    >
      <div class="link-wrapper">
        <router-link
          to="/search-result/search-result-beer"
          class="profile-link"
          :data-length="data.beer?.length"
          >Пиво</router-link
        >
      </div>
    </div>

      <div
        class="col-12 d-flex justify-content-start justify-content-sm-center py-1 col-sm-4"
      >
        <div class="link-wrapper">
          <router-link
            to="/search-result/search-result-breweries"
            class="profile-link"
            :data-length="data.brewery?.length"
            >Пивоварни</router-link
          >
        </div>
      </div>


      <div
        class="col-12 d-flex justify-content-start justify-content-sm-center py-1 col-sm-4"
      >
        <div class="link-wrapper">
          <router-link
            to="/search-result/search-result-places"
            class="profile-link"
            :data-length="data.place?.length"
            >Точки продажи</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();
const data = ref(computed(() => store.getters.GET_SEARH_RESULT));
</script>

<style scoped>
.profile-link {
  padding: 8px 24px;
  font-size: calc(3px + 1.3vw);
  background-color: #a6a18e;
  color: #fff;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
}
.profile-link.router-link-active {
  background-color: #faca10;
}
.profile-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translate(0, -50%);
  width: 30px;
  height: 2px;
  background-color: #a6a18e;
}
.profile-link::after {
  content: attr(data-length);
  position: absolute;
  top: 50%;
  left: -52px;
  transform: translate(0, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #a6a18e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-link.router-link-active::before {
  background-color: #faca10;
}
.profile-link.router-link-active::after {
  background-color: #faca10;
}
</style>
