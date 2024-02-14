<template>
  <div class="container-fluid" v-if="data?.length">
    <div class="row">
      <div class="col-8">
        <div
          class="card mb-3"
          style="padding: 40px 20px; border: 1px solid rgb(255, 193, 7)"
          v-for="(item) in data"
          :key="item.placeId"
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
                   
                      <i class="bi bi-heart" style="color:red;font-size: 32px;" ></i>
                      <!-- <i class="bi bi-heart" style="color:red;font-size: 32px;" v-if="!setAvailabilityOfSpaceForTheUser"></i> -->
                      <!-- <i class="bi bi-heart-fill" style="color:red;font-size: 32px;" v-else></i> -->
                    
                  </div>
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
import axios from "axios";
import { BASE_URL } from "@/HelperFunctions/BaseUrl";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile";
import { toggleClass } from "@/HelperFunctions/addClass";
import { ref , onMounted, computed} from "vue";
import {useStore} from 'vuex'
import AppAdvert from "@/components/AppAdvert.vue";

const store = useStore()
const profileData = GetDataProfile()
const userId = profileData.userId
const data = computed(() => store.getters.GET_SEARH_RESULT.place)

// const setFaforite = async (item) => {
//   const bodyData = {
//     userId: userId,
//     placeId: item.placeId
//   }
//   try{
//     const response = await fetch(BASE_URL + '/place/favorite', {
//       method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(bodyData),
//     })
//     if(response.ok){
//       const data = await response.json()
//       console.log(data);
//     }

//   }catch(e){
//     console.log(e);
//   }
// }
onMounted(() => {
   toggleClass('.icon-heart')
})

</script>
<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-heart {
   cursor: pointer;
  width: 40px;
  height: 40px;
  transition: all 0.3s linear;
}
.icon-heart:hover {
  transform: scale(1.2);
}
.icon-heart .bi-heart {
   
  opacity: 1;
}
.icon-heart .bi-heart-fill{
  opacity: 0;
  display: none;
}
.icon-heart.active .bi-heart{
   opacity: 0;
   display: none;
}
.icon-heart.active .bi-heart-fill{
   opacity: 1;
   display: block;
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
</style>
