<template>
   <div id="moreInteresting">
      <div class="advert-item mb-2" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;">
         <h5 class="text-center m-0 py-2">Может быть интересно</h5>
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
   name:'app-more-interesting',
   setup() {
      const srore = useStore()
      const router = useRouter()
      const list = computed(() => srore.getters.BEER_ADD_BLOCK_DATA)
      const getBeerAdBlock = () => {
         srore.dispatch("GET_DATA_BEER_ADD_BLOCK")
      }
      getBeerAdBlock()
      return{
         list,
      }
   },
}
</script>
<style scoped>
@import '@/assets/css/recommended.css';
</style>