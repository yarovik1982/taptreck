<script setup>
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile";
import { messages } from "@/HelperFunctions/Messages";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const profile = GetDataProfile();
const userId = profile?.userId || "";
const name = ref("");
const searchResult = computed(() => store.getters.GET_SEARH_RESULT);

const searchStarted = () => {
  if(name.value.length >= 3) getSearchResult();
};
const getSearchResult = () => {
  store.dispatch("GET_SEARCH_DATA", { userId, name: name.value });
  
    router.push("/search-result/search-result-beer");
 
};
</script>
<template>
  <form role="search" class="d-flex justify-content-center align-items-center">
    <input
      class="form-control form-control-sm"
      type="search"
      placeholder="Поиск"
      minlength="3"
      style="
        border: 2px solid yellow;
        border-radius: 22px 0 0 22px;
        outline: none;
        box-shadow: none;
      "
      v-model="name"
      @input="searchStarted"
    />
    
    <button
      class="btn btn-warning btn-sm"
      type="submit"
      style="border-radius: 0px 22px 22px 0px; box-shadow: 0 0 0 1px #ffc107"
    >
      <i class="bi bi-search" style="color: #fff"></i>
    </button>
    
  </form>
  
  <p class="text-center">
    
  </p>
</template>
<style scoped></style>
