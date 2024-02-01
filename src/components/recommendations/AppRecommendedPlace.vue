<template>
   <div id="recommendedPlaces">
       <div class="advert-item mb-2" style="border-top-left-radius: 8px;
   border-top-right-radius: 8px;">
         <h5 class="text-center m-0 py-2">Рекомендованные места</h5>
         <div class="advert-body p-2">
            <div class="item mb-2"
               v-for="item in list"
               :key="item.placeId"
            >
               <div class="item-img">
                  <img :src="item.image" :alt="item.name">
               </div>
               <div class="item-name">{{item.name}}</div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import {ref, computed} from 'vue'
// import {useStore} from 'vuex'
// import {useRouter} from "vue-router"
import store from '@/store/store'
export default {
   name:'app-recommended-places',
   setup() {
      // const store = useStore()
      // const router = useRouter()


      const list = computed(() => store.getters.PLACE_ADD_BLOCK_DATA)
      const getPlaceAddblock = () => {
         store.dispatch('GET_DATA_PLACE_ADD_BLOCK')
      }
      getPlaceAddblock()

      return{
         list
      }
   },
}
</script>


<style scoped>
@import '@/assets/css/recommended.css';
</style>