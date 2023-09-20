<template>
   <h3 class="text-center">
      Search Result Breweries
      <small style="font-size:12px;display:block; margin-right:16px;margin-top:-25px;text-align:right;"> {{amount}} items found</small>
   </h3>
</template>
<script>
import {ref} from 'vue'
export default {
   name:'search-result-breweries',
   setup() {
      const amount = ref(10)

      return{
         amount
      }
   },
}
</script>