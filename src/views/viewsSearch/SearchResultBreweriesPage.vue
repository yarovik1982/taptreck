<template>
  
   <div class="container-fluid" v-if="data?.length">
      <div class="row">
        <div class="col-8">
          <div
            class="card mb-3"
            style="padding: 40px 20px; border: 1px solid rgb(255, 193, 7)"
            v-for="item in data"
            :key="item.id"
          >
            <div class="row g-0 d-flex ">
              <div class="col-md-4 px-2 d-flex justify-content-center align-items-center">
                <img
                  :src="item.image"
                  class="image"
                  alt="IMAGE"
                  style="border-radius: 16px;width: 200px;height: 200px;"
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
                      
                    </div>
                    <div></div>
                  </div>
                  <p class="card-descr">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <AppAdvert/>
        </div>
      </div>
   </div>
</template>
<script setup>
import { useStore } from 'vuex';

// import { getAll } from "@/HelperFunctions/useSearch";
import {ref, computed} from 'vue'
import AppAdvert from '@/components/AppAdvert.vue';

// const data = getAll()
const store = useStore()
const data = computed(() => store.getters.GET_SEARH_RESULT.brewery)
</script>
<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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