<template>
   <div id="recommendedRrewerirs">
      <div class="advert-item mb-2">
         <h5 class="text-center m-0 py-2">Рекомендованные пивоварни</h5>
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
import {useStore} from 'vuex'
import {useRouter} from "vue-router"
export default {
   name:'app-recommended-breweries',
   setup() {
      const srore = useStore()
      const router = useRouter()
      const list = computed(() => srore.getters.BREWERY_ADBLOCK)
      const getBreweriesAdblock = () => srore.dispatch("GET_DATA_BREWERY_ADD_BLOCK")
      getBreweriesAdblock()
      return{
         list,
      }
   },
}
</script>
<style scoped>
@import '@/assets/css/recommended.css';
</style>