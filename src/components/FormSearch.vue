<script setup>
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const profile = GetDataProfile();
const userId = profile?.userId || "";
const name = ref("");

// const searchData = computed(() => store.getters.GET_SEARH_RESULT);
const getSearchResult = () => {
  store.dispatch("GET_SEARCH_DATA", { userId, name: name.value });
};
</script>
<template>
  <form
    role="search"
    class="d-flex justify-content-center align-items-center"
    @submit.prevent="getSearchResult"
  >
    <input
      class="form-control form-control-sm"
      type="search"
      placeholder="Поиск"
      style="
        border: 2px solid yellow;
        border-radius: 22px 0 0 22px;
        outline: none;
        box-shadow: none;
      "
      v-model="name"
      @change="getSearchResult"
    />
    <router-link to="/search-result/search-result-beer">
      <button
        class="btn btn-warning btn-sm"
        type="submit"
        style="border-radius: 0px 22px 22px 0px; box-shadow: 0 0 0 1px #ffc107"
      >
        <i class="bi bi-search" style="color: #fff"></i>
      </button>
    </router-link>
  </form>
</template>
<style scoped></style>
