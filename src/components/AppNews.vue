<template>
  <div class="container-fluid" 
    v-if="BEER_ADD_BLOCK_DATA && BEER_ADD_BLOCK_DATA.length > 0"
  >
    <h2 class="text-center" style="margin-bottom: 60px">
      <span class="section-title">Новинки</span>
    </h2>
    <div class="row row-cols-1 row-cols-lg-2 g-4">
      <div class="col" v-for="item in BEER_ADD_BLOCK_DATA" :key="item.image">
        <div class="card mb-3 w-100 border-0">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-md-4 ">
                <img
                :src="item.image"
                class="img-fluid "
                :alt="item.name"
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <star-rating
                  v-model:rating="item.averageRating"
                  :show-rating="true"
                  :star-size="20"
                  :max-rating=6
                  :increment="0.1"
                  :showControl="false"
                ></star-rating>
                <p class="card-text">
                  {{item.description}}
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
import {mapActions, mapGetters} from 'vuex'

export default{
  name: "app-news",
  components: { StarRating },
  data(){
    return{}
  },
  computed: {
    ...mapGetters(["BEER_ADD_BLOCK_DATA"]),
  },
  methods: {
    ...mapActions(["GET_DATA_BEER_ADD_BLOCK"]),
  },
  mounted() {
    this.GET_DATA_BEER_ADD_BLOCK();
  },
};
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
