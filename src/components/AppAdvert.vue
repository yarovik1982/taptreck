<template>
   <div class="advert px-2">
      <app-recommended-place></app-recommended-place>
      <app-recommended-breweries></app-recommended-breweries>
      <app-more-interesting></app-more-interesting>
   </div>
</template>
<script>
import AppRecommendedPlace from '@/components/recommendations/AppRecommendedPlace.vue'
import AppRecommendedBreweries from '@/components/recommendations/AppRecommendedBreweries.vue'
import AppMoreInteresting from '@/components/recommendations/AppMoreInteresting.vue'
export default {
  components: { AppRecommendedPlace, AppRecommendedBreweries, AppMoreInteresting },
   name:'app-advert',
   setup() {
      
   },
}
</script>
<style scoped>

</style>