<template>
   <div class="card mb-3"
      v-for="item in data"
      :key="item.id"
   >
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="item.image" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
         <star-rating
                  v-model:rating="item.rating"
                  :show-rating="true"
                  :star-size="40"
                  :max-rating=6
                  :increment="0.1"
                  :showControl="false"
                ></star-rating>
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.description}}</p>
        <p class="card-text"><small class="text-body-secondary">Последнее обновление 3 мин. назад</small></p>
      </div>
    </div>
  </div>
</div>
<div class="row-btn">
    <button class="btn-more">Загрузить еще</button>
  </div>
</template>
<script>
import {ref} from 'vue'
import StarRating from "vue-star-rating";
export default {
   name:'profile-reviews-page',
   components:{StarRating},
   setup() {
      const data = ref([
         {id:Date.now(), title:'Пшеничное пиво',description:'Отличный мягкий вкус.Отличный мягкий вкус. Отличный мягкий вкус.Отличный       мягкий вкус.', image:require('@/assets/images/profile-reviews1.png'),rating:4.5},
         {id:Date.now(), title:'Пшеничное пиво',description:'Отличный мягкий вкус.Отличный мягкий вкус. Отличный мягкий вкус.Отличный       мягкий вкус.', image:require('@/assets/images/profile-reviews1.png'),rating:5},
         {id:Date.now(), title:'Пшеничное пиво',description:'Отличный мягкий вкус.Отличный мягкий вкус. Отличный мягкий вкус.Отличный       мягкий вкус.', image:require('@/assets/images/profile-reviews1.png'),rating:5.5},
         {id:Date.now(), title:'Пшеничное пиво',description:'Отличный мягкий вкус.Отличный мягкий вкус. Отличный мягкий вкус.Отличный       мягкий вкус.', image:require('@/assets/images/profile-reviews1.png'),rating:4.3},
      ])
      return{
         data,
      }
   },
}
</script>
<style scoped>
.row-btn {
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
</style>