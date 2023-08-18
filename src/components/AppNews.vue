<template>
  <div class="container-fluid">
    <h2 class="text-center" style="margin-bottom: 60px">
      <span class="section-title">Новинки</span>
    </h2>
    <div class="row row-cols-1 row-cols-lg-2 g-4">
      <div class="col" v-for="item in data" :key="item.image">
        <div class="card mb-3 w-100 border-0">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="item.image"
                class="img-fluid rounded-start"
                :alt="item.name"
              />
            </div>
            <div class="col-8">
              <!-- <div class="col-md-8"> -->
              <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <star-rating
                  v-model:rating="item.rating"
                  :show-rating="true"
                  :star-size="20"
                  :max-rating=6
                  :increment="0.1"
                  :showControl="false"
                ></star-rating>
                <p class="card-text">
                  {{item.text}}
                </p>
                <a href="#">Оставить отзыв</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";

import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "app-news",
  components: { StarRating },
  setup() {
    const data = ref([
      {
        name: "Эль (Ale)",
        image: require("@/assets/images/news1.png"),
        rating: 3.5,
        text:"Производится верховым брожением, обладает тонким фруктовым привкусом и высоким содержание спирта.",
      },
      {
        name: "Эль (Ale)",
        image: require("@/assets/images/news2.png"),
        rating: 4.5,
        text:"Производится верховым брожением, обладает тонким фруктовым привкусом и высоким содержание спирта.",
      },
      {
        name: "Эль (Ale)",
        image: require("@/assets/images/news3.png"),
        rating: 6.0,
        text:"Производится верховым брожением, обладает тонким фруктовым привкусом и высоким содержание спирта.",
      },
      {
        name: "Эль (Ale)",
        image: require("@/assets/images/news4.png"),
        rating: 4.9,
        text:"Производится верховым брожением, обладает тонким фруктовым привкусом и высоким содержание спирта.",
      },
    ]);
    return {
      data,
    };
  },
});
</script>
<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 37px;
}
@media (max-width: 991px) {
  .image {
    width: 50%;
  }
}
</style>
