<template>
  <div class="container-fluid">
    <h2 class="text-center" style="margin-bottom: 60px">
      <span class="section-title">Отзывы</span>
    </h2>
    <swiper
      :slidesPerView="5"
      :space-between="16"
      :centeredSlides="true"
      :loop="true"
      :navigation="true"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      :autoplay="{
        delay: 700,
      }"
      :modules="modules"
      class="reviewsSwiper"
    >
      <swiper-slide v-for="reviewItem in FEEDBACK_LIST_MAIN" :key="reviewItem.id">
        <!-- <div class="slide-image" :style="{backgroundImage: 'url(' + reviewItem.image + ')', width: '120px', height: '120px'}"> -->
        <div class="slide-image" style="width:120px;height:120px;">
          <img :src="reviewItem.imageBeer" alt="BEER" style="width:100%;height:100%;object-fit:cover;"/>
        </div>
        <div class="review">
          <p>
            {{reviewItem.feedbackText}}
          </p>
          <span>{{ reviewItem.userName }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "app-reviews",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
    };
  },
    computed: {
    ...mapGetters(["FEEDBACK_LIST_MAIN"]),
  },
  methods: {
    ...mapActions(["GET_DATA_FEEDBACK_LIST_MAIN"]),
  },
  mounted() {
    this.GET_DATA_FEEDBACK_LIST_MAIN();
  },
};
</script>

<style scoped>
.swiper {
  padding-top: 50px;
  padding-bottom: 300px;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.2s linear;
  z-index: 2;
}
.swiper-slide .slide-image {
  opacity: 0.4;
}
.swiper-slide-active {
  transform: scale(1.8);
  z-index: 4;
}
.swiper-slide-active .slide-image {
  opacity: 1;
}
.swiper-slide-next,
.swiper-slide-prev {
  transform: scale(1.4);
  z-index: 3;
}
.swiper-slide-next .slide-image,
.swiper-slide-prev .slide-image {
  opacity: 0.7;
}
.swiper-slide .review > p {
  font-size: calc(1px + 1vw);
}
.swiper-slide .review {
  display: none;
}
.swiper-slide.swiper-slide-active .review {
  display: block;
}
.swiper-slide>.slide-image {
  width: 120px;
  height: 120px;
}
.slide-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.review {
  position: absolute;
  top: 100%;
  width: 200%;
  text-align: center;
}
.reviewsSwiper > .swiper-pagination .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: yellow;
}
</style>
